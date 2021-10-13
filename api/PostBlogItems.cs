using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace AzApi.Post
{
    public static class PostBlogItems
    {
        [FunctionName("PostBlogItems")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [Queue("blogitems", Connection = "blogitems_STORAGE")] IAsyncCollector<BlogItem> blogItems,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            var requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var input = JsonConvert.DeserializeObject<BlogItem>(requestBody);
            if(input.Title == null)
            {
                return new BadRequestObjectResult("Please provide a title of the Blog");
            }

            await blogItems.AddAsync(input);
            return new OkResult();
        }
    }
    public class BlogItem
    {
        public string Title { get; set; }
        public string Blogtext { get; set; }
        public DateTime PostDate { get; set; }
    }
}

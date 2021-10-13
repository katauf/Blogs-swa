using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.Cosmos.Table;
using System.Linq;

namespace Az.ApiGet
{
    public static class GetBlogItems
    {
        [FunctionName("GetBlogItems")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [Table("BlogItem", Connection = "blogitems_STORAGE")] CloudTable table,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            var query = table.CreateQuery<TableData>();

            var blogItems = (await table.ExecuteQuerySegmentedAsync(query, null)).ToList();
            if(blogItems.Any())
            {
                foreach(var blog in blogItems)
                {
                    var result = new BlogItem
                    {
                        Title = blog.Title,
                        Blogtext = blog.Blogtext,
                        PostDate = blog.PostDate
                    };
                    return new OkObjectResult(result);
                }
            }
            return new OkResult();
        }
    }
    public class TableData : TableEntity
    {
        public string Title { get; set; }
        public string Blogtext { get; set; }
        public DateTime PostDate { get; set; }
    }

    public class BlogItem
    {
        public string Title { get; set; }
        public string Blogtext { get; set; }
        public DateTime PostDate { get; set; }
    }
}

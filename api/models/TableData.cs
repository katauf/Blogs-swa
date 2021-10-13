using System;
using Microsoft.Azure.Cosmos.Table;

namespace Az.Function
{
    public class TableData : TableEntity
    {
        public string Title { get; set; }
        public string Blogtext { get; set; }
        public DateTime PostDate { get; set; }
    }
}
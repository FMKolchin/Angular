using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    
        public enum Category
        {
            מזרחי, חסידי, פופ, קלאסי, ישראלי
            //"מזרחי"
            //"חסידי"
            //"פופ"
            //"קלאסית"
        }

        public class Product
        {
            public int id { get; set; }
            public string name { get; set; }
            public int? price { get; set; }
            public string singer { get; set; }
            public Category category { get; set; }
            public string[] songs { get; set; }
            public bool buy { get; set; }
        }
    
}
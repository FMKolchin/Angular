using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class DB
    {
        private static string[] songs1 = { "כוח הרצון", "במקום זה", "גל עיני" };
        private static string[] songs2 = { " בודאי...", "מתי יבוא", "הביטו", "מחר" };
        private static string[] songs3 = { "כמה...", " בזכות", "ציפיה", "הלוואי " };
        private static string[] songs4 = { " מחר", " אהבה", "ראה עונינו", " מתי" };
        private static string[] songs5 = { " יודע", "הלילה", "ירושלים", "רצון" };
        private static string[] songs6 = { " טוב להודות", " להתענג", " הבט וראה", " אתבונן" };
        private static string[] songs7 = { " שומע תעלומות", "גם כי", "מקדשינו", "אחלה" };
        private static string[] songs8 = { "מזמור", "בגיא צלמוות", "תשמע", "ציפיה" };

        public static List<Product> products = new List<Product>() {
            new Product{ id= 1, name= "כוח הרצון", price= 50, singer= "רולי דיקמן", category= Category.ישראלי,songs  = songs1, buy= false }
    , new Product{ id= 2, name= "התו השמיני ", price= 30, singer= "רולי דיקמן", category= Category.חסידי,songs = songs2, buy= false }
    , new Product{ id= 3, name= "עננו", price= 40, singer= "רולי דיקמן", category= Category.פופ, songs = songs3, buy= false }
    , new Product{ id= 4, name= " קרבן", price= 60, singer= "בערי וובר", category= Category.קלאסי, songs = songs4, buy= false }
    , new Product{ id= 5, name= " בבליפה", price= 100, singer= "ליפא שמלצער", category= Category.מזרחי, songs = songs5, buy= false },
  new Product{ id= 6, name= " לך לך", price= 45, singer= "בערי וובר", category= Category.חסידי, songs = songs6, buy= false }
    ,new Product { id= 7, name= " נוכח", price= 23, singer= "ליפא שמלצער", category= Category.מזרחי, songs= songs7, buy= false },
    new Product{ id= 8, name= " ידעת", price= 49, singer= "ליפא שמלצער", category= Category.חסידי, songs = songs8, buy= false }
        };
    }
}
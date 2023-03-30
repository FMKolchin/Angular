using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins:"*",headers:"*",methods:"*")]
    public class ProductController : ApiController
    {
        [HttpGet]
        //[Route("api/GetProducts")]
        // GET: api/Product
        public IHttpActionResult Get()
        {
            return Ok(DB.products);
        }
        [HttpGet]
        [Route("api/GetProduct")]
        // GET: api/Product/5
        public IHttpActionResult Get(int id)
        {
            return Ok(DB.products[id]);
        }

        // POST: api/Product
        public IHttpActionResult
            Post([FromBody]Product album)
        {
            DB.products.Add(album);
            return Ok(DB.products);
        }

        // PUT: api/Product/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Product/5
        public void Delete(int id)
        {
        }
    }
}

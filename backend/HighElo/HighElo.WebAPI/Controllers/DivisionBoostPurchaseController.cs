using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HighElo.WebAPI.Controllers
{
    [Route("api/division-boost-purchase")]
    public class DivisionBoostPurchaseController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "DivisionBoostPurchaseController" };
        }
    }
}
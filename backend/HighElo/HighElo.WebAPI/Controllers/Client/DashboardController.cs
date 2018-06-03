using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HighElo.WebAPI.Controllers.Client
{
    [Route("api/client/[controller]")]
    public class DashboardController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "client1", "client2" };
        }
    }
}
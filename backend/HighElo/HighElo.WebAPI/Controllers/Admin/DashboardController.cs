using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HighElo.WebAPI.Controllers.Admin
{
    [Route("api/admin/[controller]")]
    public class DashboardController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "sdf", "234" };
        }
    }
}
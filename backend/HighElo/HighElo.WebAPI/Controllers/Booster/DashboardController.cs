﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HighElo.WebAPI.Controllers.Booster
{
    [Route("api/booster/[controller]")]
    public class DashboardController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "booster1", "booster2" };
        }
    }
}
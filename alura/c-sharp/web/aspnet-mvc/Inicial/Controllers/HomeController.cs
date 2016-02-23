using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace Inicial.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        public IActionResult Index()
        {
            // codigo da regra de negocio
            return View();
        }
    }
}

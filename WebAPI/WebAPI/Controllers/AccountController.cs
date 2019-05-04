using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{

    public class AccountController : ApiController
    {
        [Route("api/User/Register")]
        [HttpPost]
        [AllowAnonymous]

        public IdentityResult Register(AccountModel model)
        {
            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            var manager = new UserManager<ApplicationUser>(userStore);
            var user = new ApplicationUser() { UserName = model.UserName, Email = model.Email };
            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            manager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 3
            };
            IdentityResult result = manager.Create(user, model.Password);
            return result;
        }

        [HttpGet]
        [Route("api/GetUserClaims")]
        [Authorize]
        public AccountModel GetUserClaims()
        {
            var identiyClaims = (ClaimsIdentity)User.Identity;
            IEnumerable<Claim> claims = identiyClaims.Claims;
            AccountModel model = new AccountModel()
            {
                UserName = identiyClaims.FindFirst("Username").Value,
                Email = identiyClaims.FindFirst("Email").Value,

                FirstName = identiyClaims.FindFirst("FirstName").Value,
                LastName = identiyClaims.FindFirst("LastName").Value,
                LoggedOn= identiyClaims.FindFirst("LoggedOn").Value
            };
            return model;

        }
    }
}




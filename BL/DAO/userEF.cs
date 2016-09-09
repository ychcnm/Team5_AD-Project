using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using DL;

namespace BL.DAO
{
    public class userEF
    {
        private Team5_ADEntities db = new Team5_ADEntities();

        public String loginValid(String userName, String passWord)
        {
            var user = db.Users.FirstOrDefault(u => u.name == userName);
            if (user == null)
            {
                return "0"; //Can't find user
            }
            if (!user.password.Equals(passWord))
            {
                return "1"; //Password don't match
            }
            return "2"; //success
        }
    }
}

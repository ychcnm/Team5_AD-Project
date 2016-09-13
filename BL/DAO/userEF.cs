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
            var user = from u in db.Users select u;
            if (user.First() == null)
            {
                return "0"; //Can't find user
            }
            if (!user.First().password.Equals(passWord))
            {
                return "1"; //Password don't match
            }
            return "2"; //success
        }

        public User findUserByName(string name)
        {
            var user = from u in db.Users where u.name == name select u;
            return user.First();
        }
    }
}

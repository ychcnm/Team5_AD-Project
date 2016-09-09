using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DL;
using System.Data.Entity;

namespace BL.DAO
{
    public class categoryEF
    {
        private Team5_ADEntities db = new Team5_ADEntities();
        public List<DL.Category> getCategoryList()
        {
            var categoryList = from c in db.Categories select c;
            return categoryList.ToList();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DL;
using System.Data.Entity;


namespace BL.DAO
{
    public class requisitionEF
    {
        private Team5_ADEntities db = new Team5_ADEntities();
        public int makeRequisition(Requisition req)
        {

            Requisition r = db.Requisitions.Add(req);
            db.SaveChanges();
            return r.requisitionID;

        }
    }
}

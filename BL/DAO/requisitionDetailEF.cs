using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DL;
using System.Data.Entity;
using Newtonsoft.Json.Linq;
using System.Transactions;

namespace BL.DAO
{
    public class requisitionDetailEF
    {
        private Team5_ADEntities db = new Team5_ADEntities();

        public string makeRequisitionDetail(JToken list, int RequisitionId)
        {
            using (TransactionScope scope = new TransactionScope())
            {
                try
                {
                    foreach (JToken j in list)
                    {
                        RequisitionDetail reqD = new RequisitionDetail();
                        reqD.description = j.Value<string>("description");
                        reqD.inventoryCode = j.Value<string>("itemId");
                        reqD.quantity = j.Value<int>("Quantity");
                        reqD.requisitionID = RequisitionId;
                        db.RequisitionDetails.Add(reqD);
                    }
                    db.SaveChanges();
                    scope.Complete();
                    return "success";
                }
                catch (Exception)
                {
                    return "fail";
                }
            }
        }
    }
}

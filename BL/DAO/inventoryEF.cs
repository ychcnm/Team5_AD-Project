using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DL;
using System.Data.Entity;

namespace BL.DAO
{
    public class inventoryEF
    {
        private Team5_ADEntities db = new Team5_ADEntities();
        public List<DL.Inventory> getAllInventory(page page)
        {
            var inventoryList = from i in db.Inventories select i;
            page.setTotalNumber(inventoryList.Count());
            int skipInx = page.getCurrentPage() * page.getPageVolumn();
            var query = inventoryList.OrderBy(l => l.inventoryCode).Skip(skipInx).Take(page.getPageVolumn());
            return query.ToList();
        }
        public List<DL.Inventory> getInventoryByCategory(string cid, page page)
        {
            int id = Convert.ToInt32(cid);
            var inventoryList = from i in db.Inventories where i.categoryID == id select i;
            page.setTotalNumber(inventoryList.Count());
            int skipInx = page.getCurrentPage() * page.getPageVolumn();
            var query = inventoryList.OrderBy(l => l.inventoryCode).Skip(skipInx).Take(page.getPageVolumn());
            return query.ToList();
        }
        public DL.Inventory getEditItem(string itemId)
        {
            var item = from i in db.Inventories where i.inventoryCode == itemId select i;
            return item.First();
        }
    }
}

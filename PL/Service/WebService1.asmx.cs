using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using DL;
using BL.DAO;
using System.Data.Entity;
using Newtonsoft.Json.Linq;

namespace PL.Service
{
    /// <summary>
    /// Summary description for WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WebService1 : System.Web.Services.WebService
    {
        private Team5_ADEntities db = new Team5_ADEntities();
        private userEF userDAO = new userEF();
        private categoryEF categoryDAO = new categoryEF();
        private inventoryEF inventoryDAO = new inventoryEF();


        [WebMethod(EnableSession = true)]
        public string Login(String userName, String passWord)
        {

            switch (userDAO.loginValid(userName, passWord))
            {
                case "0":
                    return "Can't find user";
                    break;
                case "1":
                    return "Password is Wrong";
                    break;
                case "2":
                    Session["UserName"] = userName;
                    return "Successful";
                    break;
                default:
                    return "Error";
                    break;
            }
        }

        [WebMethod]
        public string getCategory()
        {
            List<Category> categoryList = categoryDAO.getCategoryList();
            JArray jsonArray = new JArray();
            foreach (Category c in categoryList)
            {
                jsonArray.Add(c.toJson());
            }
            return jsonArray.ToString();

        }

        [WebMethod]
        public string getStationery(int page, int amount, string categoryId)
        {
            page pageObject = new page(page, amount);

            JArray jsonArray = new JArray();
            JObject finalJson = new JObject();
            List<Inventory> inventoryList = new List<Inventory>();
            if (categoryId.Equals("0"))
            {
                inventoryList = inventoryDAO.getAllInventory(pageObject);
                foreach (Inventory i in inventoryList)
                {
                    jsonArray.Add(i.toJson());
                }

            }
            else
            {
                inventoryList = inventoryDAO.getInventoryByCategory(categoryId, pageObject);
                foreach (Inventory i in inventoryList)
                {
                    jsonArray.Add(i.toJson());
                }
            }
            finalJson.Add("itemList", jsonArray);
            finalJson.Add("count", pageObject.getTotalNumber());
            return finalJson.ToString();
        }

        [WebMethod]

        public string getEditItem(string itemId)
        {
            Inventory item = inventoryDAO.getEditItem(itemId);
            JObject finalJson = item.toJson();
            return finalJson.ToString();
        }
    }
}

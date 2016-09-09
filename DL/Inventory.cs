//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
using Newtonsoft.Json.Linq;
using System.Text;
namespace DL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Inventory
    {
        public Inventory()
        {
            this.DisbursementDetails = new HashSet<DisbursementDetail>();
            this.DiscrepancyDetails = new HashSet<DiscrepancyDetail>();
            this.ItemPrices = new HashSet<ItemPrice>();
            this.OrderDetails = new HashSet<OrderDetail>();
            this.RequisitionDetails = new HashSet<RequisitionDetail>();
            this.Retrievals = new HashSet<Retrieval>();
            this.ShortageDetails = new HashSet<ShortageDetail>();
            this.StockCards = new HashSet<StockCard>();
        }
    
        public string inventoryCode { get; set; }
        public int categoryID { get; set; }
        public string description { get; set; }
        public int reorderLevel { get; set; }
        public int reorderQuality { get; set; }
        public string unitOfMeasure { get; set; }
        public string location { get; set; }
        public int quantityInHand { get; set; }
        public string image { get; set; }
        public double price { get; set; }
        public string status { get; set; }
    
        public virtual Category Category { get; set; }
        public virtual ICollection<DisbursementDetail> DisbursementDetails { get; set; }
        public virtual ICollection<DiscrepancyDetail> DiscrepancyDetails { get; set; }
        public virtual ICollection<ItemPrice> ItemPrices { get; set; }
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
        public virtual ICollection<RequisitionDetail> RequisitionDetails { get; set; }
        public virtual ICollection<Retrieval> Retrievals { get; set; }
        public virtual ICollection<ShortageDetail> ShortageDetails { get; set; }
        public virtual ICollection<StockCard> StockCards { get; set; }

        public JObject toJson()
        {

            String jsonString = "{'itemID':'" + inventoryCode + "'," + "'categoryID':'" + categoryID + "',"
                                              + "'description':'" + description + "'," + "'reorderLevel':'" + reorderLevel + "',"
                                              + "'reorderQuality':'" + reorderQuality + "'," + "'UMID':'" + unitOfMeasure + "',"
                                              + "'location':'" + location + "'," + "'quantityInHand':'" + quantityInHand + "',"
                                              + "'image':'" + image + "'," + "'price':'" + price + "',"
                                              + "'status':'" + status + "'," + "'category':'" + Category.categoryName
                                              + "'}";
            JObject json = JObject.Parse(jsonString);
            return json;
        }
    }
}
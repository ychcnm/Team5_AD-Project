//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DL
{
    using System;
    using System.Collections.Generic;
    
    public partial class RequisitionDetail
    {
        public int requisitionDetailsID { get; set; }
        public int requisitionID { get; set; }
        public string inventoryCode { get; set; }
        public int quantity { get; set; }
        public string description { get; set; }
    
        public virtual Inventory Inventory { get; set; }
        public virtual Requisition Requisition { get; set; }
    }
}

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
    
    public partial class Retrieval
    {
        public string retrievalID { get; set; }
        public string departmentCode { get; set; }
        public string inventoryCode { get; set; }
        public int neededQuantity { get; set; }
        public int actualQuantity { get; set; }
        public string status { get; set; }
    
        public virtual Department Department { get; set; }
        public virtual Inventory Inventory { get; set; }
    }
}
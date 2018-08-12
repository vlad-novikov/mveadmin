
namespace Mveadmin.Mve.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Mve.AppEquipmentCommodityRate")]
    [BasedOnRow(typeof(Entities.AppEquipmentCommodityRateRow), CheckNames = true)]
    public class AppEquipmentCommodityRateColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Process { get; set; }
        public String EquipmentType { get; set; }
        public String MarCNumber { get; set; }
        public String MarketingCategory { get; set; }
        public String Stage { get; set; }
        public String MillLiningType { get; set; }
        public String Equipment { get; set; }
        public String Type { get; set; }
        public String CommodityType { get; set; }
        public String Uom { get; set; }
        public String AbrasivityYesNo { get; set; }
        public String Quantity { get; set; }
        public String Length { get; set; }
        public String WidthOrDiameter { get; set; }
        public Double Level0to100 { get; set; }
        public Double Level100to600 { get; set; }
        public Double Level600to1200 { get; set; }
        public Double Level1200to1700 { get; set; }
        public Double Level1700to5000 { get; set; }
    }
}
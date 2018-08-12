
namespace Mveadmin.Mve.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Mve.AppEquipmentMarketingCategory")]
    [BasedOnRow(typeof(Entities.AppEquipmentMarketingCategoryRow), CheckNames = true)]
    public class AppEquipmentMarketingCategoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String Code { get; set; }
        public String Description { get; set; }
    }
}

namespace Mveadmin.Mve.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Mve.AppEquipmentMarketingCategory")]
    [BasedOnRow(typeof(Entities.AppEquipmentMarketingCategoryRow), CheckNames = true)]
    public class AppEquipmentMarketingCategoryForm
    {
        public String Description { get; set; }
    }
}

namespace Mveadmin.Mve.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AppEquipmentCommodityRateRow))]
    public class AppEquipmentCommodityRateController : Controller
    {
        [Route("Mve/AppEquipmentCommodityRate")]
        public ActionResult Index()
        {
            return View("~/Modules/Mve/AppEquipmentCommodityRate/AppEquipmentCommodityRateIndex.cshtml");
        }
    }
}

namespace Mveadmin.Mve.Pages
{
    using Serenity;
    using Serenity.Web;
    using Microsoft.AspNetCore.Mvc;

    [PageAuthorize(typeof(Entities.AppEquipmentMarketingCategoryRow))]
    public class AppEquipmentMarketingCategoryController : Controller
    {
        [Route("Mve/AppEquipmentMarketingCategory")]
        public ActionResult Index()
        {
            return View("~/Modules/Mve/AppEquipmentMarketingCategory/AppEquipmentMarketingCategoryIndex.cshtml");
        }
    }
}

namespace Mveadmin.Mve {

    @Serenity.Decorators.registerClass()
    export class AppEquipmentMarketingCategoryGrid extends Serenity.EntityGrid<AppEquipmentMarketingCategoryRow, any> {
        protected getColumnsKey() { return 'Mve.AppEquipmentMarketingCategory'; }
        protected getDialogType() { return AppEquipmentMarketingCategoryDialog; }
        protected getIdProperty() { return AppEquipmentMarketingCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return AppEquipmentMarketingCategoryRow.localTextPrefix; }
        protected getService() { return AppEquipmentMarketingCategoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
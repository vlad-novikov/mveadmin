
namespace Mveadmin.Mve {

    @Serenity.Decorators.registerClass()
    export class AppEquipmentMarketingCategoryDialog extends Serenity.EntityDialog<AppEquipmentMarketingCategoryRow, any> {
        protected getFormKey() { return AppEquipmentMarketingCategoryForm.formKey; }
        protected getIdProperty() { return AppEquipmentMarketingCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return AppEquipmentMarketingCategoryRow.localTextPrefix; }
        protected getNameProperty() { return AppEquipmentMarketingCategoryRow.nameProperty; }
        protected getService() { return AppEquipmentMarketingCategoryService.baseUrl; }

        protected form = new AppEquipmentMarketingCategoryForm(this.idPrefix);

    }
}
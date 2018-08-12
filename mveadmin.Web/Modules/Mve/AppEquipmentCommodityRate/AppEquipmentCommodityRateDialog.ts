
namespace Mveadmin.Mve {

    @Serenity.Decorators.registerClass()
    export class AppEquipmentCommodityRateDialog extends Serenity.EntityDialog<AppEquipmentCommodityRateRow, any> {
        protected getFormKey() { return AppEquipmentCommodityRateForm.formKey; }
        protected getIdProperty() { return AppEquipmentCommodityRateRow.idProperty; }
        protected getLocalTextPrefix() { return AppEquipmentCommodityRateRow.localTextPrefix; }
        protected getNameProperty() { return AppEquipmentCommodityRateRow.nameProperty; }
        protected getService() { return AppEquipmentCommodityRateService.baseUrl; }

        protected form = new AppEquipmentCommodityRateForm(this.idPrefix);

    }
}
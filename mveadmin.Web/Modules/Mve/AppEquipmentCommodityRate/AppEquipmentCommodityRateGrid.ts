
namespace Mveadmin.Mve {

    @Serenity.Decorators.registerClass()
    export class AppEquipmentCommodityRateGrid extends Serenity.EntityGrid<AppEquipmentCommodityRateRow, any> {
        protected getColumnsKey() { return 'Mve.AppEquipmentCommodityRate'; }
        protected getDialogType() { return AppEquipmentCommodityRateDialog; }
        protected getIdProperty() { return AppEquipmentCommodityRateRow.idProperty; }
        protected getLocalTextPrefix() { return AppEquipmentCommodityRateRow.localTextPrefix; }
        protected getService() { return AppEquipmentCommodityRateService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}
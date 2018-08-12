namespace Mveadmin.Mve {
    export interface AppEquipmentCommodityRateForm {
        Process: Serenity.StringEditor;
        EquipmentType: Serenity.StringEditor;
        MarCNumber: Serenity.StringEditor;
        MarketingCategory: Serenity.StringEditor;
        Stage: Serenity.StringEditor;
        MillLiningType: Serenity.StringEditor;
        Equipment: Serenity.StringEditor;
        Type: Serenity.StringEditor;
        CommodityType: Serenity.StringEditor;
        Uom: Serenity.StringEditor;
        AbrasivityYesNo: Serenity.StringEditor;
        Quantity: Serenity.StringEditor;
        Length: Serenity.StringEditor;
        WidthOrDiameter: Serenity.StringEditor;
        Level0to100: Serenity.DecimalEditor;
        Level100to600: Serenity.DecimalEditor;
        Level600to1200: Serenity.DecimalEditor;
        Level1200to1700: Serenity.DecimalEditor;
        Level1700to5000: Serenity.DecimalEditor;
    }

    export class AppEquipmentCommodityRateForm extends Serenity.PrefixedContext {
        static formKey = 'Mve.AppEquipmentCommodityRate';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AppEquipmentCommodityRateForm.init)  {
                AppEquipmentCommodityRateForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(AppEquipmentCommodityRateForm, [
                    'Process', w0,
                    'EquipmentType', w0,
                    'MarCNumber', w0,
                    'MarketingCategory', w0,
                    'Stage', w0,
                    'MillLiningType', w0,
                    'Equipment', w0,
                    'Type', w0,
                    'CommodityType', w0,
                    'Uom', w0,
                    'AbrasivityYesNo', w0,
                    'Quantity', w0,
                    'Length', w0,
                    'WidthOrDiameter', w0,
                    'Level0to100', w1,
                    'Level100to600', w1,
                    'Level600to1200', w1,
                    'Level1200to1700', w1,
                    'Level1700to5000', w1
                ]);
            }
        }
    }
}

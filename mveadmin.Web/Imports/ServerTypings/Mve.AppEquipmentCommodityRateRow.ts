namespace Mveadmin.Mve {
    export interface AppEquipmentCommodityRateRow {
        Id?: number;
        Process?: string;
        EquipmentType?: string;
        MarCNumber?: string;
        MarketingCategory?: string;
        Stage?: string;
        MillLiningType?: string;
        Equipment?: string;
        Type?: string;
        CommodityType?: string;
        Uom?: string;
        AbrasivityYesNo?: string;
        Quantity?: string;
        Length?: string;
        WidthOrDiameter?: string;
        Level0to100?: number;
        Level100to600?: number;
        Level600to1200?: number;
        Level1200to1700?: number;
        Level1700to5000?: number;
    }

    export namespace AppEquipmentCommodityRateRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Process';
        export const localTextPrefix = 'Mve.AppEquipmentCommodityRate';

        export declare const enum Fields {
            Id = "Id",
            Process = "Process",
            EquipmentType = "EquipmentType",
            MarCNumber = "MarCNumber",
            MarketingCategory = "MarketingCategory",
            Stage = "Stage",
            MillLiningType = "MillLiningType",
            Equipment = "Equipment",
            Type = "Type",
            CommodityType = "CommodityType",
            Uom = "Uom",
            AbrasivityYesNo = "AbrasivityYesNo",
            Quantity = "Quantity",
            Length = "Length",
            WidthOrDiameter = "WidthOrDiameter",
            Level0to100 = "Level0to100",
            Level100to600 = "Level100to600",
            Level600to1200 = "Level600to1200",
            Level1200to1700 = "Level1200to1700",
            Level1700to5000 = "Level1700to5000"
        }
    }
}

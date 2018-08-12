namespace Mveadmin.Mve {
    export namespace AppEquipmentCommodityRateService {
        export const baseUrl = 'Mve/AppEquipmentCommodityRate';

        export declare function Create(request: Serenity.SaveRequest<AppEquipmentCommodityRateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AppEquipmentCommodityRateRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AppEquipmentCommodityRateRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AppEquipmentCommodityRateRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Mve/AppEquipmentCommodityRate/Create",
            Update = "Mve/AppEquipmentCommodityRate/Update",
            Delete = "Mve/AppEquipmentCommodityRate/Delete",
            Retrieve = "Mve/AppEquipmentCommodityRate/Retrieve",
            List = "Mve/AppEquipmentCommodityRate/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AppEquipmentCommodityRateService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

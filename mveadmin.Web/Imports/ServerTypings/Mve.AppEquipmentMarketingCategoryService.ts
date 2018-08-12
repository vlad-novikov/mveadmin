namespace Mveadmin.Mve {
    export namespace AppEquipmentMarketingCategoryService {
        export const baseUrl = 'Mve/AppEquipmentMarketingCategory';

        export declare function Create(request: Serenity.SaveRequest<AppEquipmentMarketingCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AppEquipmentMarketingCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AppEquipmentMarketingCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AppEquipmentMarketingCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Mve/AppEquipmentMarketingCategory/Create",
            Update = "Mve/AppEquipmentMarketingCategory/Update",
            Delete = "Mve/AppEquipmentMarketingCategory/Delete",
            Retrieve = "Mve/AppEquipmentMarketingCategory/Retrieve",
            List = "Mve/AppEquipmentMarketingCategory/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AppEquipmentMarketingCategoryService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

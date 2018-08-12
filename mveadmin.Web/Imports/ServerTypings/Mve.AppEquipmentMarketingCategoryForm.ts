namespace Mveadmin.Mve {
    export interface AppEquipmentMarketingCategoryForm {
        Description: Serenity.StringEditor;
    }

    export class AppEquipmentMarketingCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Mve.AppEquipmentMarketingCategory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AppEquipmentMarketingCategoryForm.init)  {
                AppEquipmentMarketingCategoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AppEquipmentMarketingCategoryForm, [
                    'Description', w0
                ]);
            }
        }
    }
}


namespace Mveadmin.Mve.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("MVE"), Module("Mve"), TableName("[dbo].[AppEquipmentMarketingCategory]")]
    [DisplayName("App Equipment Marketing Category"), InstanceName("App Equipment Marketing Category")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AppEquipmentMarketingCategoryRow : Row, IIdRow, INameRow
    {

        [DisplayName("Code"), Size(255), PrimaryKey, QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Description"), Size(255)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Code; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Code; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AppEquipmentMarketingCategoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public StringField Code;

            public StringField Description;


		}
    }
}

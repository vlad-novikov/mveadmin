
namespace Mveadmin.Mve.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("MVE"), Module("Mve"), TableName("[dbo].[AppEquipmentCommodityRate]")]
    [DisplayName("App Equipment Commodity Rate"), InstanceName("App Equipment Commodity Rate")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AppEquipmentCommodityRateRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Column("id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Process"), Size(255), QuickSearch]
        public String Process
        {
            get { return Fields.Process[this]; }
            set { Fields.Process[this] = value; }
        }

        [DisplayName("Equipment Type"), Column("Equipment Type"), Size(255)]
        public String EquipmentType
        {
            get { return Fields.EquipmentType[this]; }
            set { Fields.EquipmentType[this] = value; }
        }

        [DisplayName("Mar C Number"), Column("MarC number"), Size(255)]
        public String MarCNumber
        {
            get { return Fields.MarCNumber[this]; }
            set { Fields.MarCNumber[this] = value; }
        }

        [DisplayName("Marketing Category"), Column("Marketing category"), Size(255)]
        public String MarketingCategory
        {
            get { return Fields.MarketingCategory[this]; }
            set { Fields.MarketingCategory[this] = value; }
        }

        [DisplayName("Stage"), Column("stage"), Size(255)]
        public String Stage
        {
            get { return Fields.Stage[this]; }
            set { Fields.Stage[this] = value; }
        }

        [DisplayName("Mill Lining Type"), Column("Mill lining type"), Size(255)]
        public String MillLiningType
        {
            get { return Fields.MillLiningType[this]; }
            set { Fields.MillLiningType[this] = value; }
        }

        [DisplayName("Equipment"), Size(255)]
        public String Equipment
        {
            get { return Fields.Equipment[this]; }
            set { Fields.Equipment[this] = value; }
        }

        [DisplayName("Type"), Size(255)]
        public String Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [DisplayName("Commodity  Type"), Column("Commodity  type"), Size(255)]
        public String CommodityType
        {
            get { return Fields.CommodityType[this]; }
            set { Fields.CommodityType[this] = value; }
        }

        [DisplayName("Uom"), Column("UOM"), Size(255)]
        public String Uom
        {
            get { return Fields.Uom[this]; }
            set { Fields.Uom[this] = value; }
        }

        [DisplayName("Abrasivity Yes No"), Size(255)]
        public String AbrasivityYesNo
        {
            get { return Fields.AbrasivityYesNo[this]; }
            set { Fields.AbrasivityYesNo[this] = value; }
        }

        [DisplayName("Quantity"), Size(255)]
        public String Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Length"), Size(255)]
        public String Length
        {
            get { return Fields.Length[this]; }
            set { Fields.Length[this] = value; }
        }

        [DisplayName("Width Or Diameter"), Size(255)]
        public String WidthOrDiameter
        {
            get { return Fields.WidthOrDiameter[this]; }
            set { Fields.WidthOrDiameter[this] = value; }
        }

        [DisplayName("Level0to100")]
        public Double? Level0to100
        {
            get { return Fields.Level0to100[this]; }
            set { Fields.Level0to100[this] = value; }
        }

        [DisplayName("Level100to600")]
        public Double? Level100to600
        {
            get { return Fields.Level100to600[this]; }
            set { Fields.Level100to600[this] = value; }
        }

        [DisplayName("Level600to1200")]
        public Double? Level600to1200
        {
            get { return Fields.Level600to1200[this]; }
            set { Fields.Level600to1200[this] = value; }
        }

        [DisplayName("Level1200to1700")]
        public Double? Level1200to1700
        {
            get { return Fields.Level1200to1700[this]; }
            set { Fields.Level1200to1700[this] = value; }
        }

        [DisplayName("Level1700to5000")]
        public Double? Level1700to5000
        {
            get { return Fields.Level1700to5000[this]; }
            set { Fields.Level1700to5000[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Process; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AppEquipmentCommodityRateRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField Process;

            public StringField EquipmentType;

            public StringField MarCNumber;

            public StringField MarketingCategory;

            public StringField Stage;

            public StringField MillLiningType;

            public StringField Equipment;

            public StringField Type;

            public StringField CommodityType;

            public StringField Uom;

            public StringField AbrasivityYesNo;

            public StringField Quantity;

            public StringField Length;

            public StringField WidthOrDiameter;

            public DoubleField Level0to100;

            public DoubleField Level100to600;

            public DoubleField Level600to1200;

            public DoubleField Level1200to1700;

            public DoubleField Level1700to5000;


		}
    }
}

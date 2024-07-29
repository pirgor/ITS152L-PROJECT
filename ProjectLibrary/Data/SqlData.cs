using M1_Partial_Library.DataAccess;
using M1_Partial_Library.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization.Metadata;
using System.Threading.Tasks;

namespace M1_Partial_Library.Data
{
    public class SqlData : ISqlData
    {
        private ISqlDataAccess _db;
        private const string connectionStringName = "SqlDb";
        public SqlData(ISqlDataAccess db)
        {
            _db = db;
        }
        public void addItem(Item item)
        {
            _db.SaveData<dynamic>(
                "dbo.spItem_Add",
                new { item.Name, item.Code, item.Brand, item.UnitPrice },
                connectionStringName, true);
        }

        public void DeleteData(int itemId)
        {
            _db.DeleteData<dynamic>(
                "dbo.spItem_Delete",
                new { itemId },
                connectionStringName, true);
        }

        public void UpdateData(Item item)
        {
            _db.UpdateData<dynamic>(
                "dbo.spItem_Update",
                new { item.Id, item.Name, item.Code, item.Brand, item.UnitPrice },
                connectionStringName, true);
        }

        public Item ReadData(int itemId)
        {
            return _db.LoadData<Item, dynamic>("dbo.spItem_Read", new { itemId }, connectionStringName, true).FirstOrDefault();
        }
        public List<Item> ReadAllItems()
        {
            return _db.LoadData<Item, dynamic>("dbo.spItem_ReadAll", new { }, connectionStringName, true).ToList();
        }

    }
}

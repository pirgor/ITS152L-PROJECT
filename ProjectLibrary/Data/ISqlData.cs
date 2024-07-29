using M1_Partial_Library.Objects;

namespace M1_Partial_Library.Data
{
    public interface ISqlData
    {
        void addItem(Item item);
        void DeleteData(int itemId);
        Item ReadData(int itemId);
        void UpdateData(Item item);
        List<Item> ReadAllItems();


    }
}
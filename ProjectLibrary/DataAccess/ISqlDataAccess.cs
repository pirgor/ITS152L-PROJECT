namespace M1_Partial_Library.DataAccess
{
    public interface ISqlDataAccess
    {
        void DeleteData<T>(string sqlStatement, T parameters, string connectionStringName, bool isStoredProcedure);
        List<T> LoadData<T, U>(string sqlStatement, U parameters, string connectionStringName, bool isStoredProcedure);
        void SaveData<T>(string sqlStatement, T parameters, string connectionStringName, bool isStoredProcedure);
        void UpdateData<T>(string sqlStatement, T parameters, string connectionStringName, bool isStoredProcedure);
    }
}
CREATE PROCEDURE [dbo].[spItem_ReadAll]

AS
BEGIN
	SET NOCOUNT ON;
	SELECT Id, Name, Code, Brand, UnitPrice
	FROM dbo.Item;
END

CREATE PROCEDURE [dbo].[spItem_Read]
	@itemId int
AS
begin
	SET NOCOUNT ON;
	SELECT Id, Name, Code, Brand, UnitPrice
	FROM dbo.Item
	WHERE Id = @itemId;
end

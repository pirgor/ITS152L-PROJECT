CREATE PROCEDURE [dbo].[spItem_Delete]
	@itemId int
AS
begin 
	SET NOCOUNT ON;
	DELETE FROM dbo.Item
	WHERE Id = @itemid;
end

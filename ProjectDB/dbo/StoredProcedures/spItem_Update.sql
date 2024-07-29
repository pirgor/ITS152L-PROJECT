CREATE PROCEDURE [dbo].[spItem_Update]
	@id int,
	@name nvarchar(50),
	@code nvarchar(8),
	@brand nvarchar(50),
	@unitPrice int
AS
begin
	SET NOCOUNT ON;
	UPDATE dbo.Item
	SET
		Name = @name,
		Code = @code,
		Brand = @brand,
		UnitPrice = @unitPrice
	WHERE
		Id = @id;
end

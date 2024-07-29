CREATE PROCEDURE [dbo].[spItem_Add]
	@name nvarchar(50),
	@code nvarchar(8),
	@brand nvarchar(50),
	@unitPrice int
AS
begin
	SET NOCOUNT ON;
	INSERT INTO dbo.Item
	(Name, Code, Brand, UnitPrice)
	VALUES
	(@name, @code, @brand, @unitPrice)
end

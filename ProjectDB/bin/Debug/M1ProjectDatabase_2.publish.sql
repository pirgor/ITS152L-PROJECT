﻿/*
Deployment script for M1ProjectDB

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "M1ProjectDB"
:setvar DefaultFilePrefix "M1ProjectDB"
:setvar DefaultDataPath "C:\Users\embse\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\"
:setvar DefaultLogPath "C:\Users\embse\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\"

GO
:on error exit
GO
/*
Detect SQLCMD mode and disable script execution if SQLCMD mode is not supported.
To re-enable the script after enabling SQLCMD mode, execute the following:
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'SQLCMD mode must be enabled to successfully execute this script.';
        SET NOEXEC ON;
    END


GO
USE [$(DatabaseName)];


GO
PRINT N'Altering Procedure [dbo].[spItem_Update]...';


GO
ALTER PROCEDURE [dbo].[spItem_Update]
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
GO
PRINT N'Creating Procedure [dbo].[spItem_ReadAll]...';


GO
CREATE PROCEDURE [dbo].[spItem_ReadAll]

AS
BEGIN
	SET NOCOUNT ON;
	SELECT Id, Name, Code, Brand, UnitPrice
	FROM dbo.Item;
END
GO
PRINT N'Update complete.';


GO

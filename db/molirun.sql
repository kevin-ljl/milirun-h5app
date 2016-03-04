 /*========================================================= molirun数据库*/

/*================================= 建立表空间及对应dba*/
 -- create user
 GRANT USAGE ON *.* TO 'molirun'@'localhost' IDENTIFIED BY 'molirun' WITH GRANT OPTION;
 -- create database
 CREATE DATABASE molirun CHARACTER SET  utf8  COLLATE utf8_general_ci;
 -- grant user 权限1,权限2,select,insert,update,delete,create,drop,index,alter,grant,references,reload,shutdown,process,file等14个权限
 GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,LOCK TABLES ON molirun.*  TO 'molirun'@'localhost' IDENTIFIED BY 'molirun';

 /*================================= 建立表、表主外键、多表关联等T-SQL*/
 -- 改变当前数据库
 USE molirun;

/*
用户表
*/
create table user (
id INT NOT NULL auto_increment COMMENT 'ID标识',
groups INT NOT NULL COMMENT '组别',
size VARCHAR(128)  NOT NULL COMMENT '尺码',
name VARCHAR(128) NOT NULL COMMENT '姓名',
sex INT NOT NULL COMMENT '性别',
age VARCHAR(128) NOT NULL COMMENT '出生年月',
IDchange INT NOT NULL COMMENT '证件类型',
IDcard VARCHAR(128) NOT NULL COMMENT '证件号码',
phone CHAR(11) NOT NULL COMMENT '手机号码',
econtactp VARCHAR(128) NOT NULL COMMENT '紧急联系人',
ephone CHAR(11) NOT NULL COMMENT '紧急联系方式',
packages INT NOT NULL COMMENT '赛事包类型',
paystatus INT NOT NULL COMMENT '支付状态',
adate VARCHAR(19) NOT NULL COMMENT '提交信息时间',
primary key (id) -- 主键
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


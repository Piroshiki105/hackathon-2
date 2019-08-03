create table CONTENT (
    ID numeric(4, 0) primary key,
    NAME text not null,
    TITLE text not null,
    VALUE text not null
);

create table APPLY (
    ID numeric(4, 0) primary key,
    USER_NAME text not null,
    VALUE text not null
);

create table CHAT (
    ID numeric(4, 0) primary key,
    USER_NAME text not null,
    VALUE text not null
);

create sequence SEQ_CONTENT_ID;
create sequence SEQ_APPLY_ID;
create sequence SEQ_CHAT_ID;

insert into CONTENT(ID, NAME, TITLE, VALUE) values (nextval('SEQ_CONTENT_ID'), 'NAME', 'TITLE', 'VALUE');
insert into APPLY(ID, USER_NAME, VALUE) values (nextval('SEQ_CONTENT_ID'), 'USER_XX', 'HOGEHOGE');
insert into CHAT(ID, USER_NAME, VALUE) values (nextval('SEQ_CONTENT_ID'), 'USER_XX', 'HOGEHOGE');

CREATE TABLE "LINK"
(
  id numeric(4,0) NOT NULL,
  name text NOT NULL,
  url text NOT NULL
)
;
CREATE TABLE "BBS"
(
  id numeric(4,0) NOT NULL,
  name text NOT NULL,
  url text NOT NULL
)
;
CREATE TABLE "IMAGE"
(
  id numeric(4,0) NOT NULL,
  name text NOT NULL,
  url text NOT NULL
)
;
CREATE TABLE "HISTORY"
(
  id numeric(4,0) NOT NULL,
  name text NOT NULL,
  url text NOT NULL
)
;
CREATE TABLE "CHAT"
(
  id numeric(4,0) NOT NULL,
  name text NOT NULL,
  text text NOT NULL
)
;

CREATE SEQUENCE seq_link_id INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 
START 1 CACHE 1; 

CREATE SEQUENCE seq_bbs_id INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 
START 1 CACHE 1; 

CREATE SEQUENCE seq_image_id INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 
START 1 CACHE 1; 

CREATE SEQUENCE seq_history_id INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 
START 1 CACHE 1; 

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
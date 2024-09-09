create database banco;
use banco;

create table cliente (
    id int primary key auto_increment,
    nome varchar(100) not null,
    cpf varchar(11) not null,
    email varchar(100) not null,
    senha varchar(100) not null
);

insert into cliente (nome, cpf, email, senha) values ('Fulano', '12345678901', 'fulano@ws.com', '123');
insert into cliente (nome, cpf, email, senha) values ('Zezinho', '12345678901', 'zezinho@ws.com', '123');
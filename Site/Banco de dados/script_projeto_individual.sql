create database projeto_individual;

use projeto_individual;

create table usuario(
	id int primary key auto_increment,
	nome varchar(100),
	email varchar (100),
	senha varchar(100)
);

create table dados_dieta (
	id int primary key auto_increment, 
	peso int,
    tmb int,
    tdee int,
    proteina int,
    carboidrato int,
    gordura int,
    qtd_caloriasDiarias int,
	fkUsuario int,
		constraint fkUsuario foreign key (fkUsuario)
			references usuario(id)
)auto_increment = 10000;

select * from usuario;

select* from dados_dieta;


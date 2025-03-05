create database itcm;
use itcm;
create table Docentes (
 ID_Docente INT AUTO_INCREMENT PRIMARY KEY,
correo varchar (50) unique not null,
contraseña varchar (50) not null,
nombre varchar (100) not null,
apellido varchar (100)  not null
);

create table Alumnos (
No_Control  varchar (8) PRIMARY KEY,
nombre varchar (100) not null,
apellido varchar (100)  not null
);

create table Grupos(
ID_Grupo varchar(10) PRIMARY KEY,
materia varchar (50) not null,
ID_Docente int unique not null,
FOREIGN KEY (ID_Docente) references Docentes(ID_Docente)
);

create table Listas(
ID_Listas INT AUTO_INCREMENT PRIMARY KEY,
No_Cont varchar (8) not null,
ID_Grupo varchar (10) not null,
FOREIGN KEY (ID_Grupo) references Grupos(ID_Grupo),
FOREIGN KEY (No_Cont) references Alumnos(No_Control)
);

create table Crit_Evaluacion (
ID_Eval INT AUTO_INCREMENT PRIMARY KEY,
valor float not null, 
descripcion varchar (100) not null,
ID_Grupo varchar (10) not null,
FOREIGN KEY (ID_Grupo) references Grupos(ID_Grupo)
);

create table Actividades(
ID_Actividades INT AUTO_INCREMENT PRIMARY KEY,
titulo varchar (100) not null,
descripcion varchar (100) not null,
valor float not null,
ID_Evaluacion int not null,
FOREIGN KEY (ID_Evaluacion) references Crit_Evaluacion(ID_Eval)
);

create table calificacion (
ID_Calificacion INT AUTO_INCREMENT PRIMARY KEY,
calificacion float not null,
puntos float not null,
No_Control_Alum varchar (8) not null,
ID_Actividades int not null,
FOREIGN KEY (No_Control_Alum) references Alumnos(No_Control),
FOREIGN KEY (ID_Actividades) references Actividades(ID_Actividades)
);
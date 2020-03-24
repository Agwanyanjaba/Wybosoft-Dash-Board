 create table student(
   ID int NOT NULL primary key auto_increment,
   firstname varchar(50),
   lastName varchar(50),
   gender varchar(1),
   dob date,
   email varchar(250) NOT NULL,
   section varchar(100),
   country varchar(100),
   firstAttempt boolean,
   subjects varchar(250),
   UNIQUE (email));
	
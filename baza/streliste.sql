drop database if exists streliste;
create database if not exists streliste;

use streliste;

drop table if exists usluga;
create table if not exists usluga(

	id int unsigned not null auto_increment,
    naziv varchar(60) not null,
   
    primary key(id)

);

drop table if exists lokal;
create table if not exists lokal(

	id int unsigned not null auto_increment,
    naziv varchar(60) not null,
	adresa varchar(100) not null,
	
   
    primary key(id)

);

drop table if exists lokalUsluga;
create table if not exists lokalUsluga(

	id int unsigned not null auto_increment,
	lokal int unsigned not null,
	usluga int unsigned not null,
	
	foreign key fkLokal(lokal) references lokal(id),
	foreign key fkUsluga(usluga) references usluga(id),
   
    primary key(id)

);


insert into usluga(naziv)
	values('пиће'),
	      ('храна'),
	      ('куповина'),
	      ('новац'),
	      ('школовање'),
		  ('лечење'),
		  ('фризер'),
		  ('кладионица'),
          ('супермаркет');

insert into lokal(naziv,adresa)
	values('Наполи','Вељка Петровића 9/23'),
	      ('Еспацио','Вељка Влаховића'),
	      ('Гомекс','Вељка Петровића бб'),
	      ('Макси', 'Вељка Влаховића бб'),
	      ('Пикасо','Вељка Петровића 11А'),
	      ('Кабаљеро','Вељка Петровића 5'),
	      ('ОШ Мирослав Антић','Душана Петровића Шанета 11'),
	      ('Банка поштанска штедионица','Вељка Влаховића 18'),
	      ('Амбуланта Стрелиште','Милутина Бојића'),
	      ('Апотека Пандора','Вељка Петровић12Б'),
	      ('Апотека Зингибер','Вељка Петровић 11А'),
	      ('Фризер Шукер','Вељка Влаховића 16'),
	      ('Фризер Гага','Вељка Влаховића 14'),          
	      ('Фризер Брица','Вељка Петровића 16'),
 	      ('Моцарт Кладионица','Вељка Петровића 5'),
	      ('Меридиан бет','Вељка Петровића 9');
drop table if exists prevoz;
create table if not exists prevoz(

	id int unsigned not null auto_increment,
	naziv varchar(20),
	mestoPolaska varchar(20),
	vremePolaska time not null,

	primary key(id)

);


insert into prevoz(naziv,mestoPolaska,vremePolaska)
	values('бус-6','Утвин Аеродром','5:00'),
	      ('бус-6','Утвин Аеродром','6:00'),
	      ('бус-6','Утвин Аеродром','7:00'),
	      ('бус-6','Утвин Аеродром','7:55'),
	      ('бус-6','Утвин Аеродром','9:00'),
	      ('бус-6','Утвин Аеродром','10:00'),
	      ('бус-6','Утвин Аеродром','11:00'),
	      ('бус-6','Утвин Аеродром','12:00'),
	      ('бус-6','Утвин Аеродром','13:00'),
	      ('бус-6','Утвин Аеродром','14:00'),
	      ('бус-6','Утвин Аеродром','15:00'),
	      ('бус-6','Утвин Аеродром','16:00'),
	      ('бус-6','Утвин Аеродром','16:30'),
	      ('бус-6','Утвин Аеродром','17:00'),
	      ('бус-6','Утвин Аеродром','18:00'),
	      ('бус-6','Утвин Аеродром','19:00'),
	      ('бус-6','Утвин Аеродром','20:00'),
	      ('бус-6','Утвин Аеродром','21:00'),
	      ('бус-6','Утвин Аеродром','22:00'),
	      ('бус-6','Утвин Аеродром','22:50'),

		  ('бус-7','Утвин Аеродром','4:30'),
	      ('бус-7','Утвин Аеродром','5:30'),
	      ('бус-7','Утвин Аеродром','7:30'),
	      ('бус-7','Утвин Аеродром','8:30'),
	      ('бус-7','Утвин Аеродром','9:30'),
	      ('бус-7','Утвин Аеродром','10:30'),
	      ('бус-7','Утвин Аеродром','11:30'),
	      ('бус-7','Утвин Аеродром','12:30'),
	      ('бус-7','Утвин Аеродром','13:30'),
	      ('бус-7','Утвин Аеродром','14:30'),
	      ('бус-7','Утвин Аеродром','15:30'),
	      ('бус-7','Утвин Аеродром','16:30'),

		  ('БГ-воз','Станица Стрелиште','5:06'),
		  ('БГ-воз','Станица Стрелиште','6:08'),
		  ('БГ-воз','Станица Стрелиште','6:56'),
		  ('БГ-воз','Станица Стрелиште','16:11'),
		  ('БГ-воз','Станица Стрелиште','16:59'),
		  ('БГ-воз','Станица Стрелиште','18:07');


drop table if exists ulice;
create table if not exists ulice(

	id int unsigned not null auto_increment,
	nazivUlice varchar(30) not null,

	primary key(id)
);

insert into ulice(nazivUlice)
	values('Вељка Влаховића'),
	          ('Вељка Петровића'),
	          ('Душана Петровића Шанета'),
	          ('Милутина Бојића'),
	          ('Цвијићева'),
	          ('Михајла Петровића Аласа'),
	          ('Радивоја Кораћа');
              
insert into lokalUsluga(lokal,usluga)
values(1,2),
		  (2,2),
		  (3,9),
		  (4,9),
		  (5,1),
		  (6,1),
		  (7,5),
		  (8,4),
		  (9,6),
		  (10,6),
		  (11,6),
		  (12,7),
		  (13,7),
		  (14,7),
		  (15,8),
	      (16,8);
-- show tables;


select * from lokal;
select * from usluga;
select * from lokalUsluga;
select * from prevoz;

select l.naziv,adresa,u.naziv
from lokal l join lokalUsluga lu on l.id = lu.lokal
join usluga u on u.id = lu.usluga
where u.naziv like 'лечење';

select * from ulice;

drop table if exists viza;
create table if not exists viza(

	id int unsigned not null auto_increment,
    ime varchar(60) not null,
	prezime varchar(60) not null,
	godiste int not null,
    jmbg varchar(13) not null,
   
    primary key(id)

);

select * from viza;


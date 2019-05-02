#DROP TABLE IF EXISTS booking;
#DROP TABLE IF EXISTS cars;
#DROP TABLE IF EXISTS location;

create table location(
id int not null auto_increment,
location varchar(45),
primary key (id)
);

CREATE table cars(
id int not null auto_increment,
nummerplate varchar(45) unique,
brand varchar(45),
fueltype enum('gas','diesel','electricity','hybrid'),
gear enum('shift','auto'),
year int,
cartype varchar(45),
seats int,
doors int,
price int,
img varchar(45),
location_id int,
primary key (id),
constraint location1 foreign key (location_id) references location(id)
 ON DELETE cascade
);

CREATE table booking(
id int not null auto_increment,
startdate date,
enddate date,
user_id int,
car_id int,
total_price int,
primary key (id),
constraint user_id1 foreign key (user_id) references users(ID)
ON DELETE cascade,
constraint car_id1 foreign key (car_id) references cars(id)
ON DELETE cascade
);
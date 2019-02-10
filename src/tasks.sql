create table tasks (
	id serial primary key,
	userid bigint not null REFERENCES users (id),
	task varchar(300) not null,
	category varchar(100) references categories (id),
	priority smallint
)
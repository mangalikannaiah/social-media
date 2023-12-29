create database social_media;

use social_media;

create table users (
    id integer primary key auto_increment,
    name varchar(50),
    profile varchar(50),
    headline varchar(100),
    password varchar(50),
    token varchar(500)
);

create table posts(
    profile varchar(50),
    content varchar(5000),
    likes integer,
    shares integer
)

insert into users(name, profile, headline, password, token) 
values ('vamsi','krishnavamsi', 'mentor', '123456','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')

insert into users(name, profile, headline, password, token) 
values ('krishna','krishnavamsi bendalam', 'software engineer', 'abc123','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')


select * from users;


insert into posts (profile, content, likes, shares) values 
('krishnavamsi', 'sample paragraph', 5,10)

select * from posts;
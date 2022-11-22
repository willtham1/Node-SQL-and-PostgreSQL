CREATE TABLE wizards(
  name varchar(50),
  power varchar(50)
);

CREATE TABLE elves(
  name varchar(50),
  speed real
);

CREATE TABLE hobbits(
  name varchar(50),
  personality varchar(50)
);

CREATE TABLE allies(
  wizards varchar(50),
    elves varchar(50),
);

CREATE TABLE guardians(
  elves varchar(50),
    hobbits varchar(50),
);


INSERT INTO wizards(name, power)
VALUES
('Gandalf', 'fireworks'),
('Sauron', 'rings'),
('Saruman', 'betrayal');

INSERT INTO elves(name, speed)
VALUES
('Legolas', 10),
('Arwen', 9),
('Elrond', 5);

INSERT INTO hobbits(name, personality)
VALUES
('Frodo', 'careful'),
('Sam', 'brave'),
('Bilbo', 'greedy');

INSERT INTO allies(wizards, elves)
VALUES
('Gandalf', 'Legolas'),
('Gandalf', 'Arwen'),
('Sauron', 'Elrond'),
('Saruman', 'Legolas');

INSERT INTO guardians(elves, hobbits)
VALUES
('Legolas', 'Frodo'),
('Legolas', 'Sam'),
('Arwen', 'Frodo'),
('Arwen', 'Sam'),
('Elrond', 'Bilbo');
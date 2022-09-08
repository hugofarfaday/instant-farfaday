CREATE TABLE article(
   Id_article INT AUTO_INCREMENT,
   title VARCHAR(255),
   prix DOUBLE,
   PRIMARY KEY(Id_article)
);

CREATE TABLE client(
   Id_client INT AUTO_INCREMENT,
   nom VARCHAR(255),
   ville VARCHAR(255),
   PRIMARY KEY(Id_client)
);

CREATE TABLE compte(
   Id_compte INT AUTO_INCREMENT,
   login VARCHAR(255),
   password VARCHAR(255),
   Id_client INT,
   PRIMARY KEY(Id_compte),
   UNIQUE(Id_client),
   UNIQUE(login),
   FOREIGN KEY(Id_client) REFERENCES client(Id_client)
);

CREATE TABLE commande(
   Id_commande INT AUTO_INCREMENT,
   reference VARCHAR(255),
   date_validation DATETIME,
   Id_client INT,
   PRIMARY KEY(Id_commande),
   FOREIGN KEY(Id_client) REFERENCES client(Id_client)
);

CREATE TABLE contenir(
   Id_article INT,
   Id_commande INT,
   PRIMARY KEY(Id_article, Id_commande),
   FOREIGN KEY(Id_article) REFERENCES article(Id_article),
   FOREIGN KEY(Id_commande) REFERENCES commande(Id_commande)
);
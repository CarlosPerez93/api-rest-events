const role = `CREATE TABLE IF NOT EXISTS  role (
  id_role INT AUTO_INCREMENT,
  role VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_role));
`;
const user = `CREATE TABLE IF NOT EXISTS user (
  id_user INT AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL,
  fk_role INT NOT NULL,
  PRIMARY KEY (id_user),
  CONSTRAINT fk_user_role1
    FOREIGN KEY (fk_role)
    REFERENCES role (id_role)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
`;
const typeDocument = `CREATE TABLE IF NOT EXISTS type_document (
  id_type_document INT AUTO_INCREMENT,
  type_document VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_type_document));
`;
const person = `CREATE TABLE IF NOT EXISTS person (
  id_person INT AUTO_INCREMENT ,
  first_name VARCHAR(45) NOT NULL,
  middle_name VARCHAR(45) NULL,
  first_last_name VARCHAR(45) NOT NULL,
  middle_last_name VARCHAR(45) NULL,
  fk_type_document INT NOT NULL,
  number_document INT NOT NULL,
  fk_user INT ,
  PRIMARY KEY (id_person),
  CONSTRAINT fk_person_user
    FOREIGN KEY (fk_user)
    REFERENCES user (id_user)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_person_type_document1
    FOREIGN KEY (fk_type_document)
    REFERENCES type_document (id_type_document)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);`;

const events = `CREATE TABLE IF NOT EXISTS event (
  id_event INT AUTO_INCREMENT,
  event VARCHAR(45) NOT NULL,
  description VARCHAR(45) NULL,
  date_start DATE NOT NULL,
  date_end DATE NOT NULL,
  PRIMARY KEY (id_event));
`;
const typeService = `CREATE TABLE IF NOT EXISTS type_service (
  id_type_service INT AUTO_INCREMENT,
  type_servicio VARCHAR(45) NOT NULL,
  unit_price INT NOT NULL,
  ammount INT NOT NULL,
  PRIMARY KEY (id_type_service));
`;
const service = `CREATE TABLE IF NOT EXISTS service (
  id_service INT AUTO_INCREMENT,
  service VARCHAR(45) NOT NULL,
  fk_type_service INT NOT NULL,
  PRIMARY KEY (id_service),
  CONSTRAINT fk_service_type_service1
    FOREIGN KEY (fk_type_service)
    REFERENCES type_service (id_type_service)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
`;
const eventUser = `CREATE TABLE IF NOT EXISTS event_user (
  event_id_event INT AUTO_INCREMENT,
  user_id_user INT NOT NULL,
  description VARCHAR(100) NOT NULL,
  PRIMARY KEY (event_id_event, user_id_user),
  CONSTRAINT fk_event
    FOREIGN KEY (event_id_event)
    REFERENCES event (id_event)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_user
    FOREIGN KEY (user_id_user)
    REFERENCES user (id_user)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);    
`;
const eventService = `CREATE TABLE IF NOT EXISTS event_service (
  event_id_event INT AUTO_INCREMENT,
  service_id_service INT NOT NULL,
  description VARCHAR(45) NOT NULL,
  PRIMARY KEY (event_id_event, service_id_service),
  CONSTRAINT fk_event_has_service_event1
    FOREIGN KEY (event_id_event)
    REFERENCES event (id_event)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_event_has_service_service1
    FOREIGN KEY (service_id_service)
    REFERENCES service (id_service)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
`;
/* INSERT INTO role VALUES
(1,'SUPER ADMIN'),
(2,'SUPPLIER'),
(3,'CLIENT');

INSERT INTO type_document VALUES
(1,'RC'),
(2,'TI'),
(3,'CC'),
(4,'TE'),
(5,'CE'),
(6,'NIT'),
(7,'PTE');

INSERT INTO user VALUES
(1,'Carlos', '123456', 2),
(2,'Andrea', '123456', 1);

INSERT INTO person VALUES
(1,'Andrea', '', 'Pascuas', 'Torres', 2, 1006502547, 1),
(2,'Carlos', 'Alberto', 'Perez', 'Cuellar', 3, 1117528897, 2);

INSERT INTO event VALUES
(1,'fiesta infantil Mathias ','5 añitos de Mathias', '2023-06-21', '2023-06-21');

INSERT INTO type_service VALUES
(1,'Sillas', 1000, 50),
(2,'recreación', 120000, 1);

INSERT INTO service VALUES
(1,'Alquiler de sillas', 1),
(2,'Animcaion para niños', 2);

INSERT INTO event_user VALUES
(1, 1,'Aqui esta el encargado'),
(1, 2,'Aqui esta el cliente');

INSERT INTO event_service VALUES
(1, 1,'Aqui esta el detalle de las sillas'),
(1, 2,'Aqui esta el detalle de la recreacion');


 */

export {
  role,
  user,
  typeDocument,
  person,
  typeService,
  service,
  events,
  eventUser,
  eventService,
};

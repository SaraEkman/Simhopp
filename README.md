# Simhopp

Den här applikationen är mitt examensarbete. Syftet med applikationen är att skapa en webbapplikation som ett designförslag på Stockholmspolisens IF Simhopp hemsida med admin gränssnitt där hanteras nyhetsflödet i hemsidan. Applikationen är skriven i Angular och använder sig av en backend som är skriven i Node.js och Express. Databasen som används är en MySQL-databas.

## Installation

För att kunna köra applikationen krävs det att du har Node.js och MySql installerat på din dator. För att installera Node.js, gå till [Node.js hemsida](https://nodejs.org/en/) och ladda ner den senaste versionen. När Node.js är installerat, öppna en terminal och navigera till mappen där du har klonat projekten. Kör sedan kommandot `npm install` för att installera alla nödvändiga paket för både projekten.
OBS Förutsetts att du har Klonat både frontend och backend [länken](https://github.com/SaraEkman/Simhopp-Backend) projektet i samma mapp och följd instruktionerna för båda projekten, här nedanför finns instruktioner för att installera frontend projektet.

## Starta applikationen

öppna en terminal och navigera till mappen där du har klonat både projekten sedan navigera till `simhopp` 
kör kommandot `ng serve`. När applikationen har startat, 
öppna en webbläsare och navigera till `http://localhost:4200`.


Logga in med användarnamn: admin@gmail.com och lösenord: 123456 och du kommer till admin gränssnittet där du kan hantera nyhetsflödet i hemsidan och lägga till nya användare med olika roller.

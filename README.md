# Real Time Web

![example workflow](https://img.shields.io/github/languages/count/DaanKetelaars/RTW?style=flat-square)
![example workflow](https://img.shields.io/github/last-commit/DaanKetelaars/RTW?style=flat-square)
![example workflow](https://img.shields.io/github/repo-size/DaanKetelaars/RTW?style=flat-square)


## Live DEMO
[https://rijks-online.herokuapp.com](https://mysterious-fjord-61345.herokuapp.com/)

<img src="https://github.com/DaanKetelaars/RTW/blob/main/Schermafbeelding%202022-06-30%20om%2022.26.12.png" alt="example of the live application" />

## Description
Voor real time web ben ik bezig geweest met een real time app. Ik had veel concepten en ben uiteindelijk gegaan voor een collabrative YouTube. Het is een probleem wat ik zelf wel eens heb gehad. Je bent met iemand aan het bellen via discord of teams. Iemand wil een leuke video laten zien op YouTube, dit kan maar dan via schermdelen, dan via het geluid van diegene. Zoals je al kan lezen, niet heel soepel. De kwaliteit verminderd ook. Vandaar dat dit idee. Dus het idee is dat je gezamenlijk in een room komt, daar kun je een video zoeken. Beide kunnen zoeken en beide kunnen een video aanzetten of stopzetten. 

## Real Time Web Apps & WebSockets
Ik zal kort hieronder even uitleggen wat een RTW app nou eigenlijk is. Daarnast zal ik ook sockets meenemen, dit is ook een cruciaal onderdeel van RTW.

Real Time Web App
Een Real Time Web App stuurt informatie (bijna) ogenblikkelijk tussen de users en de server. Dit is anders dan andere web apps, waar de client om informatie moet vragen van de server. 

Bij een RTW app, opent de client een connectie direct vanuit de server zodat meerdere users een bericht kunnen sturen zonder te wachten of erom gevraagd te worden. Als er iets veranderd op de server, dan stuurt het de data direct over de connectie naar de client. Als er iets aan de client veranderd dan wordt het doorgestuurd naar de server, die bepaalt dan of dit ook verstuurt wordt naar andere clients.

WebSockets
WebSocket is een geadvanceerde API die je de optie bied om een two-way interactive communication (Persoon A stuurt een mail, Persoon B stuurt een eigen mail terug op de mail van Persoon A) sessie te openen tussen de browser van een user en de server. Met deze API kun je dus berichten of data versturen naar een server om dan event-driven responses te ontvangen zonder dat je de server om hoeft te vragen.

Voor dit project heb ik gebruik gemaakt van een WebSocket library, genaamd socket.io. Super handig en was uiteindelijk best makkelijk te gebruiken.
https://socket.io/

## Gebruikte Sockets

## Concepten
<img src="https://github.com/DaanKetelaars/RTW/blob/main/IMG_9945.jpg" alt="concept schetsen 01" />
<img src="https://github.com/DaanKetelaars/RTW/blob/main/IMG_9946.jpg" alt="concept schetsen 02" />

## Data model
<img src="https://github.com/DaanKetelaars/RTW/blob/main/data-model.jpg" alt="data model" />


## Reflectie
Persoonlijk was dit wel voor mij het lastigste vak, qua code. Ook een leuk vak, ik vond het heel tof om met real time data te werken. Toch ben ik best wel even bezig geweest om de sockets goed te begrijpen. Ik vond dat wel belangrijk, want eerst had ik dit niet gedaan en toen kwam ik wel in de knoop. Uiteindelijk heb ik hier goed voor gezeten en ben ik erg trots op mijn eindresultaat. Ik denk ook wel dat mijn concept erg uitdagend was, daarom ben ik ook extra trots dat hij gelukt is. Nou ja, soort van. Het enige probleem is dat de play en stop optie niet overal werkt. Alleen bij de eerste YouTube video. Dit is dan ook wel iets wat ik eventueel nog zou aanpassen als ik ooit verder zou of was gegaan met dit project.

## Table of Contents

- [Install](#install)
- [Features](#features)
- [Used Tools](#used-tools)
- [Meta](#meta)
- [License](#license)

## Install

Clone the GitHub Repo locally
```
git clone https://github.com/DaanKetelaars/RTW
```

Connect your API Key.

Got to the YouTube development page and get your own API key
https://developers.google.com/youtube/v3/getting-started

When you have your API key, create a .env file and add it in their.
Quick thing, also add your PORT to the .env file. 

The .env file will look something like this:
```env
PORT=your_port_number_here
API_KEY=myapikey
```
In the app.js file, right at the bottom, the PORT you added in the .env file is already connected. I added a fallback if that doesn't work, make sure to change the fallback to the same PORT number you added in the .env file.


Install all packages
```
npm install
```

Host this project on localhost. 
```
PORT = your_port_number_here
```

## Used Tools

- [git](https://git-scm.com/)
- [NodeJS](https://node.jshttps://nodejs.org)
- [ExpressJS](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [YouTube-API](https://developers.google.com/youtube/v3/getting-started)

## Meta
For any questions, don't hesitate to reach out!
Daan Ketelaars - daanketelaars@gmail.com - https://github.com/DaanKetelaars/RTW

## License

Usage is provided under the [MIT License](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt) MIT. See [LICENSE](https://github.com/DaanKetelaars/RTW/blob/master/LICENSE) for the full details.



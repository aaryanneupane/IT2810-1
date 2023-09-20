# Valuta-Gutta 

Valuta-Gutta er en nettside hvor man kan få oppdatert informasjon om vekslingskurset mellom 1 euro og 170 forskejllige valutaer. Nettsiden gjør det lett å velge ut valutaer du har lyst å følge ekstra godt med på gjennom en "mine favoritter" side. 

## Bygging og kjøring

For å gjøre prosjektet klart for kjøring må en rekke kommandoer kjøres etter repoet har blitt **klonet**. Først må man navigere seg til mappen "IT2810-1" ved å kjøre:
```
cd IT2810-1
```

Deretter må man installere forskjellige pakker nettsiden er avhengig av med å kjøre kommandoen:
```
npm i
```

Nettsiden kan nå åpnes på to forskjellige måter:

### Alternativ 1

kommandoen:
```
npm run dev
```
Da vil nettsiden åpnes i en localhost i nettleseren din.

### Alternativ 2

Åpne appen på http://it2810-20.idi.ntnu.no/project1 og sjekk ut nettsiden! 


For mer detaljert om utførelsen vår til de ulike kravene, de vedlagt pdf-fil.
-----------------------------------------------------------------------------------------------------------------------------------------
Innhenting av api-data:

REST API’et vi har benyttet i dette prosjektet heter ”Exchange Rates API” og sender ut veksling-
skurset mellom en euro og 170 forskjellige valutaer. Api’et er aktivt og oppdaterer verdiene på de
forskjellige kursene veldig jevnt. Det vil si at vi er nødt til å oppdatere api-dataen vi innhenter
jevnlig for å kunne vise sann informasjon til brukerne. Løsningen vi har valgt å bruke involverer
funksjonalitetene QueryClient, PersistQueryClientProvider og createSyncStoragePersister fra Tan-
Stack Query. QueryClient bruker vi i index filen for å opprette en queryclient for hele nettsiden,
deretter bruker vi createSyncStoragePersister og PersistQueryClientProvider for å lagre og bruke
innhentet informasjon i localstorage og hindre ekstra kall på api’et når en bruker navigerer på
samme side.
For å hente inn data fra api’et har vi en egen api fil med informasjon om hvor man finner dataen og
eksporterer dette i en async funksjon for å forsikre at innhentingen skjer i riktig rekkefølge. Denne
fetchData funksjonen brukes da i både hjemme- og favorittsiden som query-funksjonen i UseQuery
for innhenting av data fra api’et.
Til slutt er det verdt å nevne at vi har valgt at api’et skal kalles når brukeren først går innpå siden
og hver gang den navigerer mellom de to sidene våre, samt når de kommer tilbake til siden fra
andre applikasjoner og trykker på våre sider. Dette er for å forsørge at vekslingsdata’en vi tilbyr
alltid er oppdatert i henhold til api’et i både hjemme- og favorittsiden, og om brukeren går tilbake
nettsiden etter å brukt andre applikasjoner. Lagring av vekslingsdataen i localstorage for å vise
på ”mine favoritter” hadde medført gammel vekslingsrate data og dette ville vi unngå. Derfor
valgte vi en løsning som lagret valuta navnet og en favoritt state på hver valuta som er favorisert
i localstorage og deretter hentet inn oppdatert data fra api’et og filtrert på valuta navnet for å
tilfredsstille behovet av ny data på favorittsiden.



# Valuta-Gutta

Valuta-Gutta er en nettside hvor man kan få oppdatert informasjon om vekslingskurset mellom 1 euro og 170 forskjellige valutaer. Nettsiden gjør det lett å velge ut valutaer du har lyst å følge ekstra godt med på gjennom en "mine favoritter" side.

## Bygging og kjøring

For å gjøre prosjektet klart for kjøring må en rekke kommandoer kjøres etter repoet har blitt **klonet**. Først må man navigere seg til mappen "IT2810-1" ved å kjøre:

```
cd IT2810-1
```

Deretter må man installere forskjellige pakker nettsiden er avhengig av med å kjøre kommandoen:

```
npm i
```

For åpne nettsiden må du være koblet til ntnu sitt nett, eller bruk VPN. Nettside kan åpnes på to forskjellige måter:

### Alternativ 1

kommandoen:

```
npm run dev
```

Da vil nettsiden åpnes i en localhost i nettleseren din.

### Alternativ 2

Åpne appen på http://it2810-20.idi.ntnu.no/project1 og sjekk ut nettsiden!

### Testing

For å kjøre testene vi har skrevet, kan dere benytte kommandoen:

```
npm test
```

## For mer detaljert om utførelsen vår til de ulike kravene og testing, se vedlagt pdf-fil med navn "Beskrivelse".

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

## Funksjonelle krav

Krav 1:
Henter inn API-data og viser en ressurs om gangen. Søkebaren gir muligheten til å hoppe til en spesifikk ressurs, pilene gjør det lett å bla seg frem og tilbake.

Krav 2:
Ved bruk av søkebaren, får en opp forslag relatert til det du skriver inn. Med denne filtreringen får du presentert den valutaen du trykker på. I tillegg presenterer favorittsoden de valutaene du har favorisert. Valgene huskes selv om siden reloades.

Krav 3:
En bruker kan gjøre valg ved å trykke på favorittknappen til valutaene de har lyst til å følge med på. Valgene presenteres på favorittsiden. Disse kan enkelt legges til og fjernes. Valgene huskes selv om siden avsluttes og startes igjen.

Krav 4:
Løsningen har et responsivt design som fungerer optimalt på forskjellige enheter og skjermstørrelser.

Krav 5:
Vi har valgt et gjennomgående design, slik at nettsiden er behagelig å se på. Det er ingen unødvendige elementer, noe som gir en ryddig utforming. Vi har tatt hensyn til universell utforming, der fargene og komponentete har sterk kontrast slik at alle skal ha mulighet til å lese siden best mulig. Samtidig skal det være intuitivt hvordan man skal bruke siden.

## Tekniske krav

Oppsett:
Vi har fulgt filen "prosjektopprettelse" filen på blackboard for å opprette prosjektet og har basert på Typescript og React.

React state og props:
De fleste filene har benyttet React state og props.

Innhenting av informasjon fra REST API:
REST APIet vi har benyttet i dette prosjektet heter "Exchange Rates API" og sender ut vekslingskurset mellom en euro og 170 forskjellige valutaer. Api´et er aktivt og oppdaterer verdiene på de forskjellige kursene veldig jevnt. Det vil si at vi er nødt til å oppdatere api-dataen vi innhenter jevnlig for å kunne vise sann informasjon til brukerne. Løsningen vi har valgt å bruke involverer funksjonalitetene QueryClient, PersistQueryClientProvider og createSyncStoragePersister fra TanStack Query. QueryClient bruker vi i index filen for å oppdatere en queryclient for å lagre og bruke innhentet informasjon i localstorage og hindre ekstra kall på api´
et når man bruker naviger på samme side.

For å hente inn data fra api´et har vi en egen api fil med informasjon om hvor man finner dataen og ekporterer dette i en async funksjon for å forsikre at innhentingen skjer i riktig rekkefølge. Denne fetchData funksjonen brukes da i både hjemme- og favorittsiden som query-funksjonen i UseQuery for innhenting av data fra api´et.

Til slutt er det vert å nevne at vi har valgt at api´et skal kalles når brukeren først går innpå siden og hver gang den navigerer mellom de to sidene våre, samt når de kommer tilbake til siden fra andre applikasjonen og trykker på våre sider. Dette er for å sørge for at vekslingsdataen vi tilbyr alltid er oppdatert i henhold til api´et i både hjemme- og favorittsiden, og om brukeren går tilbake til nettsiden etter å brukt andre applikasjoner. Lagring av vekslingsdataen i localStorage for å vise på "mine favoritter" hadde medført gammel vekslingsrate data og dette ville vi unngå. Derfpr valgte vi en løsning som lagret valuta navnet og en favoritt state på hver valuta som er favorisert i localstorage og deretter hentet inn oppdatert data fra api´et og filtrert på valuta navnet for å tilfredsstille behovet av ny data på favorittsiden.

Web- og localstorage:
Ettersom vi vil lagre og huske valutaene brukeren har trykket favoritt på, har vi valgt å benytte localstorage. I HomepageCurrency filen, har vi benyttet en useEffect hook for innhenting av lagret informasjon om de bruker-valgte valutaene i localstoragen og implementert funksjonalitet for at favoritt knappen lagrer valutaen i localstorage om staten er true.
Sessionstorage har vi benyttet for å beholde søk-queryen uansett om man navigerer til forskjellige faner på nettsiden.

React Router DOM:
I prosjektet benytter vi React Router DOM for å kunne navigere mellom de to sidene våre. I appen bruker vi Route og BrowserRoutwe til å opprette pathways og vise de to sidene våre som komponenter. I headeren benytter vi useNavigate til å kjapt bytte mellom sider ved å trykke på knapper og useLocation for å lettere implementere betingelser for knappens visningstilstand avhengig av hvilken pathway vi er på.

## Testing

Testingen er basert på Vitest. Vi har testet at komponentene endrer riktig innhold. Headerkomponenter er testet for navigering mellom hjemmesiden og favorite-siden. I HomepageCurrency har vi testet at favourote-knappen fungerer som den skal, altså å legge til valutaen med verdi, til local storage. Her har vi også testet dens "state" i local storage, altså at variabelen isFavourite er satt til true. FavouritepageCurrency er testet ved å se om knappen i komponenten fungerer. I tillegg til dette har vi tatt en Snapshot test av HomePage og FavouritePage.

## Forbedringer etter P1-1

Vi har tatt utgangspunkt i tilbakemeldinger fra medstudenter for å forbedre prosjektet:

- En mer strukturert mappestruktur, der styles, pages og components har nå hver sin mappe.
- Responsivt design er forbedret, og fungerer nå på alle skjermstørrelser.
- Vi fikk tilbakemelding på at vi hadde litt for få og omfattende issues i GitLab. Dette har vi tatt med oss videre til prosjekt 2.
- Resultatet vi får fra api'et har vi gitt en "type" ved å innføre en ny valuta-interface, dette gjør behandlingen av resultatet lettere.
- Det er nå mulig å sortere favoritter både alfabetisk og på tidspunkt lagt til.

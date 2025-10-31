# MY JOURNAL

# 🎯 Presentatie: Vergelijking van Techstacks — SvelteKit + Directus vs Vue + Sanity

## 🧱 Inleiding
In ons project maken wij gebruik van **SvelteKit** als front-end framework en **Directus** als headless CMS.  
Daarnaast hebben wij een **zelfonderzoek** uitgevoerd naar een alternatieve stack: **Vue.js** in combinatie met **Sanity.io**.  

Doel van deze vergelijking:
- Evalueren **waarom SvelteKit + Directus geschikt is** voor ons project.  
- Onderzoeken **wat de voor- en nadelen zijn** van Vue + Sanity als alternatief.  
- Een bewuste keuze kunnen verantwoorden op basis van **performance, ontwikkelervaring en schaalbaarheid**.

---

## ⚙️ Techstack 1: SvelteKit + Directus (onze keuze)

### 🔹 Wat is SvelteKit?
- Framework bovenop **Svelte**, een compiler die HTML, CSS en JS optimaliseert.
- Code wordt bij buildtijd gecompileerd naar pure JS zonder runtime.
- Zeer **snelle performance** (minder overhead dan React/Vue).
- **File-based routing** en SSR standaard ingebouwd.

### 🔹 Wat is Directus?
- **Open-source headless CMS + database wrapper**.
- Gebruikt een relationele database (bijv. PostgreSQL of MySQL) als backend.
- API-first: genereert automatisch REST + GraphQL endpoints.
- Geschikt voor **complexe datamodellen** en **role-based permissions**.

### 🔹 Waarom dit goed werkt
- Directus is ideaal als je **controle wilt over je data en database**.
- SvelteKit is **super performant** en biedt **SSR, routing en endpoints out of the box**.
- Geschikt voor **grotere, datagedreven applicaties**.
- Alles is **self-hosted** – meer vrijheid en privacy.

---

## ⚙️ Techstack 2: Vue + Sanity (zelfonderzoek)

### 🔹 Wat is Vue.js?
- Een progressief JavaScript-framework voor het bouwen van user interfaces.
- Werkt declaratief met **component-based architectuur**.
- Gebruikt **Vite** voor snelle build en hot reload.
- Sterk type-support via **TypeScript**.

### 🔹 Wat is Sanity.io?
- **Headless CMS** met een volledig aanpasbare content-studio.
- Data wordt beheerd via **GROQ** (Graph-Relational Object Queries).
- Content wordt realtime gesynchroniseerd.
- API-gebaseerd: makkelijk te koppelen aan elke frontend.
- Ondersteunt **real-time updates**, **images CDN** en **schema-based contentmodeling**.

### 🔹 Waarom dit een interessante optie is
- Vue is **stabiel en volwassen**, met een grote community.
- Sanity biedt een **krachtige, visuele CMS-omgeving** voor niet-technische gebruikers.
- Data is **direct toegankelijk via API** – geen backend of hosting nodig.
- Perfect voor **snelle prototypes en marketingwebsites**.

---

## ⚖️ Vergelijking per categorie

| Categorie | **SvelteKit + Directus (onze keuze)** | **Vue + Sanity (zelfonderzoek)** |
|------------|--------------------------------------|----------------------------------|
| 🧠 **Leerbaarheid** | Hogere leercurve, maar diepgaande controle. | Vue is gebruiksvriendelijker en heeft uitgebreide documentatie. |
| ⚡ **Performance** | SvelteKit compileert naar minimale JS — extreem snel. | Snelle frontend dankzij Vite + on-demand API calls. |
| 🧩 **Integratie** | Meer setup (database + CMS), maar flexibel en uitbreidbaar. | Zeer eenvoudige integratie met één client (`@sanity/client`). |
| 🧑‍💻 **Developer Experience** | Volledige controle over data, serverroutes en endpoints. | Snelle setup en iteratie met Vue DevTools en Sanity Studio. |
| 🧰 **Hosting & Setup** | Vereist eigen database en hostingomgeving. | Sanity host data en CMS in de cloud. |
| 👩‍💼 **Gebruiksvriendelijkheid voor editors** | Dashboard is functioneel, maar meer databasegericht. | Sanity Studio is visueel en intuïtief. |
| 🔒 **Beveiliging & controle** | Zelf volledige controle over data en permissies. | API-tokens en role-based access in de Sanity cloud. |
| 🌍 **SEO & SSR** | SSR standaard ingebouwd; sterk voor dynamische SEO. | SSR mogelijk via Nuxt of prerendering. |
| 🔮 **Schaalbaarheid** | Schaalt mee met de database en hostingconfiguratie. | Automatische schaalbaarheid via Sanity’s cloudinfrastructuur. |

---

## 💬 Conclusie

### ✅ Sterke punten van onze keuze (SvelteKit + Directus)
- Volledige **controle** over data, backend en hosting.  
- **Open-source** en uitbreidbaar naar complexe projecten.  
- **SSR standaard ingebouwd** voor optimale performance en SEO.  
- Geschikt voor **grotere applicaties of educatieve platforms**.

### ⚠️ Zwakke punten van SvelteKit + Directus
- Complexere setup (database + server vereist).  
- Iets minder gebruiksv


----------------------------------------------------------------------------------------
## Mentoring Feedback
Tekort ---------------------------- Teveel

- Je bent één keer per week aanwezig op het afgesproken moment
    Tekort -------------/-------------- Teveel
- Je stapt actief op eerstejaars studenten af om ze te helpen
    Tekort -----------------/---------- Teveel
- Je luistert, vat samen en vraagt door bij het helpen van studenten
    Tekort -----------------/---------- Teveel
- Je bereidt de workshops voor en helpt de studenten bij de opdracht die ze krijgen
    Tekort -------------/-------------- Teveel
- Je beantwoordt vragen over HTML, CSS en JS
    Tekort -----------------/---------- Teveel
- Je doet code/design reviews op leertaken
    Tekort -----------------/---------- Teveel
- Je geeft feedback in issues van eerstejaars
    Tekort -------------/-------------- Teveel
- Optioneel: Als je het leuk vindt, mag je zelf een workshop of presentatie geven

#### Verbeterpunten: 
- Meer feedback in issues
- Wat vaker aanwezig zijn of compenseren als ik niet aanwezig kan zijn op een mentoring dag


## We love Web - Spreekuren

13-06-2025 - Hidde de Vries

Ging over hoe we de wereld groener kunnen maken op werk?
Bij AI kijken ze ook hoe ze dat duurzamer kunnen doen

Groener maken tijdens het werk, 5 stappen;
1. Make smaller web pages, in 2011 waren websites 467kb zwaar en in 2025 waren websites 2678kb zwaar.
- Use web platform features instead of libraries
2. Support older devices
- Dont be the reason for people to upgrade their devices
3. Choose green hosting
- Zie GWF lists voor een lijst met groene hosting bedrijven.
4. Use only necessary features
5. Stylesheets

Tool voor compressie
- ecograder

--

14-2-2025 - Kilian Valkhof

- Oprichter van Polypane
    > Het is een developers browser ( gebruikt door tien duizenden mensen door heel de wereld)
    > Wordt gebruikt door grote bedrijven om programma's te bouwen.
    > Al 20 jaar bezig in zijn vak.

- Alles bouwt met vaart op basis van wat je hebt gedaan - Killian

- Zijn eerste site is 11 jaar oud, dit heeft hij gemaakt op Microsoft frontpage, zijn eerste persoonlijke website is hier op dus gemaakt.
    > Het renderen gebruikte net zoals word, niet erg optimaal dus.
    
- Veel vlieguren kunnen maken in zijn 16-30 jarige leeftijden, dit door veel websites te hebben kunnen maken voor duizenden mensen.
    > Termen zoals responsive design kwamen pas tevoorschijn toen de iphones waren gelanceerd.
    > Heeft in 2010 een file compresser gebouwt met python, wat vaak nog wordt gebruikt.

- Designen ging veel soepeler omdat er een tool uit kwam genaamd 'sketch' dit is een soort gelijk concept net als Figma.

- Heeft vaak tussendoor gewerkt aan polypane om een beeld te krijgen over wat hij precies nodig had om dit platform op te zetten. In 2017 was de eerste beta release van polypane.
    > Met de feedback die hij daarop kreeg heeft ie verder kunnen bouwen tijdens deze release.
    > Polypane was eerst gericht op de persoonlijke workflow van Killian dit heeft hij anders aangepakt omdat hij er op een gegeven moment van bewust was dat ieder een eigen manier van werken heeft.
    > In 2019 is hij er volledig mee bezig geweest om de definitieve 1.0 versie uit te brengen. 
    > Ervaringen van vorige bedrijven zijn in belang, dit heeft hem heel erg geholpen. Dus ervaring meenemen is altijd handig.
    > 14 mei 2019 was de orginele launch.
    
Één zin wat mij erg bij bleef van zijn spreek uur was "Alles bouwt met vaart op basis van wat je hebt gedaan - Killian". Ik heb van dit spreekuur geleerd dat stoppen geen optie moet zijn en dat consistentie erg belangrijk is als je wat wilt bereiken.
    
--

Dave Bitter

- Dave is een Senior Front-end Consultant bij iO. 
> Hij vertelde ons over zijn expertise in AI-gedreven voice interfaces, dit doet regelmatig bij internationale conferenties. Hij is een expert erkend door Google en weet alles over hoe kunstmatige intelligentie de   gebruikerservaring kan verbeteren. Daarnaast heeft hij veel ervaring met het toepassen van spraakgestuurde interfaces, ook tijdens deze lezing liet hij ons een spraakgestuurde AI interface zien, en vertelde hij hoe hij dit heeft kunnen maken.

Ik vond het erg indrukwekkend omdat AI natuurlijk tegenwoordig veel wordt gebruikt. Ik heb geleerd van Dave in dit spreekuur dat side projeten erg handig kunnen zijn voor je portfolio, dus dat we alvast dingen kunnen verzinnen en kunnen uitvoeren voor onze portfolio.

---------

14-3-2025
Hoe kunnen we goed werken in de studio?

Goed:
- Genoeg Laders
- Tafels zijn met deze opstelling chill
- Whiteboard is essentieel en handig
Fout:
- Vaak is de geur een reden voor hoofdpijn
- Aquarium koud 
- Langs de liften werken is een beetje rumoerig ( dit is niet persee constant )

House Rules
* Meer vrijheid met waar een student kan werken
* Duidelijke tijdsplanning

28-2-2025 - Vragenlijst / Zelf Test

1.Ik kan uitleggen wat NodeJS is en waarvoor het gebruikt wordt
    - 3 pnt, ik denk wel dat ik kan struikelen over mn woorden als ik het moet uitleggen, maar ik kan het wel toepassen.
    
2.Ik weet wat het doel van package.json isen heb hier aanpassingen ingemaakt
    - 3 pnt
    
3.Ik heb met npm packages geïnstalleerd en gebruikt in het bestand server.js
    - 3 pnt
    
4.Ik kanmet commando’s in de terminal een NodeJSproject stoppen en starten
    - 3 pnt
    
5.Ik weet waarom ik mijn NodeJS project regelmatig moet herstarten en kan dit uitleggen
    - 2 pnt
    
6.Ik heb een strategie voor debuggen inNodeJS
    - 3 pnt
    
7.Ik kan uitleggen wat Express.js doet en waarom het nodig is om met NodeJS een website te bouwen
    - 2 pnt
    
8.Ik weet wat routes zijn en kan zelf een nieuwe route aanmaken
    - 3 pnt
    
9.Ik weetwat request en response argumenten zijn in een functie voorhet laden van data
    - 3 pnt
    
10.Ik heb gebruik gemaakt van eenrequest parameter om specifiekedata teladen
    - 3 pnt
    
11.Ik kan uitleggen wat Liquid doet en waarom het nodig is om met Express.js een website te maken
    - 2 pnt
    
12.Ik weet hoe ik data naar Liquid verstuur om dit te gebruiken bij het renderenvan een pagina
    - 3 pnt
    
13.Ik weet hoe ik Liquid filters toe kan passen en waar ik kan vinden hoe die werken
    - 2 pnt
    
14.Ik heb een nieuwe route gemaakt en nieuwe data meegegeven aan een Liquid view
    - 3 pnt
    
15.Ik weet waar een foreach loop voor gebruikt wordt en pas het toe in een Liquid view om HTML te renderen
    - 3 pnt
    
16.Ik kan in Liquid een controle maken waarmee de avatar niet getoond wordt als deze niet in whois.fdnd.nl is ingevuld
    - 3 pnt
    
17.Ik heb een strategie voor debuggen in Liquid
    - 0 pnt
    
18.Ik kan data fetchen uit een REST API
    - 3 pnt
    
19.Ik snap het verschil tussen HTTP requests van de methodes GET en POST
    - 3 pnt
    
20.Ik kan data uit een REST API filteren of sorteren
    - 3 pnt
    
21.Ik snap wat het async keyword doet in JavaScript code
    - 1 pnt
    
22.Ik weetwat het doel is van een try/catch block en kanhet gebruiken bijhet parsenvan JSON
    - 1 pnt
    
23.Ik begrijphet verschil tussenclient-side JavaScript enserver-side JavaScript en wanneer ik welkehet handigst inkan zetten
    - 3 pnt
    
24.Ik kan formulier data die is ge-POST opslaan in een variabele op de server en gebruiken bij het renderen van een pagina
    - 3 pnt
    
25.Ik kan formulier data die is ge-POST door middelvan een POST of PATCHHTTP request opslaan in de REST API
    - 3 pnt




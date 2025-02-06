# Demowebbplats - Webbplatsoptimering med Parcel och Node.js

**Demowebbplats** är en enkel webbplats som skapats i enlighet med labororation 1 i kursen Frontend-baserad webbutveckling som använder **Parcel** för att minifiera och transpilera JavaScript, samt optimera grafikfiler för bättre prestanda. Det här projektet är uppbyggt med **Node.js** och är avsett för utvecklare som vill förbättra webbplatsens prestanda genom automatisk optimering av sina filer.

## Funktioner

- **Minifiering och transpiling av JavaScript**: Använder Parcel för att optimera och konvertera kod.
- **Optimering av grafik**: Bilder (PNG) optimeras för snabbare laddningstid.
- **Automatisk byggprocess**: Bygg och optimera projektet med enkla kommandon.

## Installation

För att komma igång med projektet, följ dessa steg:

### Förutsättningar

- **Node.js**: Se till att **Node.js** är installerat.
  
- **Parcel**: Parcel är en snabb, zero-config web bundler som används för att minifiera och transpila koden.

### Steg för installation

1. Klona detta repo:

    ```bash
    git clone https://github.com/amer1301/demowebbplats.git
    cd demowebbplats
    ```

2. Installera beroenden:

    ```bash
    npm install
    ```

3. Om du vill köra projektet i utvecklingsläge med live-server, kör:

    ```bash
    npm run dev
    ```

    Detta startar Parcel i utvecklingsläge, och serverar din webbplats på `http://localhost:1234`.

### Bygga projektet

För att skapa en produktionsversion av webbplatsen och optimera filer, kör:

```bash
npm run build

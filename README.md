# Berni néni infóórái – interaktív weblapok

Tomori Pál Általános Iskola · Digitális kultúra

Statikus weboldal-gyűjtemény (HTML/CSS/JS), telepítés nélkül működik. GitHub Pages-en is fut.

## Szerkezet

```
index.html                  főoldal (kategóriák, kereső)
js/oldalak.js               a főoldal adatai: kategóriák és az oldalak listája
js/fooldal.js               a főoldal megjelenítése
js/element-sdk-shim.js      kompatibilitási réteg (lásd lent)
tartalom/<kategória>/*.html az egyes weblapok
```

## GitHub Pages-en való közzététel

1. Hozz létre egy új repót a GitHubon (pl. `berni-neni-infoorai`).
2. Töltsd fel ide a mappa teljes tartalmát (a `index.html` a gyökérben legyen).
3. Repo → **Settings → Pages** → Source: *Deploy from a branch*, Branch: `main`, mappa: `/ (root)`.
4. Pár perc múlva a weblap a `https://<felhasznaloneved>.github.io/<repo-neve>/` címen érhető el.

## Új weblap felvétele

1. Másold a HTML-fájlt a `tartalom/<kategória>/` mappába (vagy hozz létre újat).
2. A `js/oldalak.js` fájlban az `OLDALAK` listához adj egy sort:

```js
{ kategoria: "irodai", cim: "Excel alapok", leiras: "Rövid leírás.", fajl: "tartalom/irodai/excel.html", ikon: "📗" },
```

3. Az aloldal elejére tedd be a visszalépő gombot: a `<body>` után illeszd be a főoldali linket (a relatív útvonal a mélységtől függ: `tartalom/<kategória>/` esetén `../../index.html`), vagy másold le a meglévő oldalakról a „← Főoldal” linket.
4. Új kategória: a `KATEGORIAK` listához egy új elem, `id`, `nev`, `leiras`, `szin` mezőkkel.

## Megjegyzések

- Az `element-sdk-shim.js` a régi oldalak `/_sdk/element_sdk.js` hivatkozását helyettesíti. Enélkül a szerkesztőkörnyezetből származó oldalak hibát dobhatnak.
- A külső képek és betűtípusok (Wikimedia, Unsplash, Google Fonts, Tailwind CDN stb.) internetkapcsolatot igényelnek. Ha valamelyik külső kép megszűnik, a kártya üres marad, a többi tartalom nem sérül.

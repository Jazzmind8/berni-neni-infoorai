/* Főoldal adatai. Új weblap felvételéhez adj egy sort az OLDALAK listához,
   és másold a fájlt a tartalom/<kategória>/ mappába. */
const KATEGORIAK = [
  {
    "id": "programozas",
    "nev": "Programozás és algoritmusok",
    "leiras": "Algoritmikus gondolkodás, folyamatábrák és játékos programozási feladatok.",
    "szin": "#2563eb"
  },
  {
    "id": "hardver",
    "nev": "Hardver és számítógépek",
    "leiras": "A számítógép alkatrészei, a processzor, a videókártya és a hálózatok.",
    "szin": "#0891b2"
  },
  {
    "id": "irodai",
    "nev": "Irodai programok és billentyűzet",
    "leiras": "PowerPoint, fájlkezelés és gépelés gyakorlása.",
    "szin": "#7c3aed"
  },
  {
    "id": "ido",
    "nev": "Idő, óra és naptár",
    "leiras": "Időzítők, órák és a naptár.",
    "szin": "#ea580c"
  },
  {
    "id": "zene",
    "nev": "Zene",
    "leiras": "Szolfézs és a kvintkör.",
    "szin": "#db2777"
  },
  {
    "id": "tortenelem",
    "nev": "Történelem és nyelv",
    "leiras": "Idővonalak és nyelvtan.",
    "szin": "#16a34a"
  },
  {
    "id": "egyeb",
    "nev": "Egyéb",
    "leiras": "Robotika, 3D grafika, zaj és egyéb témák.",
    "szin": "#64748b"
  }
];

const OLDALAK = [
  {
    "kategoria": "programozas",
    "cim": "Flowgorithm alapok",
    "leiras": "Folyamatábrás programozás alapjai, a Flowgorithm oktató oldala.",
    "fajl": "tartalom/programozas/flowgorithm.html",
    "ikon": "🔀"
  },
  {
    "kategoria": "programozas",
    "cim": "LEGO algoritmuskaland",
    "leiras": "Algoritmusos játék LEGO-s pályán.",
    "fajl": "tartalom/programozas/algoritmusjatek-lego.html",
    "ikon": "🧱"
  },
  {
    "kategoria": "programozas",
    "cim": "Minecraft kaland",
    "leiras": "Algoritmusos játék Minecraft-világban.",
    "fajl": "tartalom/programozas/algoritmusjatek-minecraft.html",
    "ikon": "🟩"
  },
  {
    "kategoria": "programozas",
    "cim": "Erdei csoda útja",
    "leiras": "Algoritmusos játék az erdőben.",
    "fajl": "tartalom/programozas/algoritmusjatek-erdei.html",
    "ikon": "🐿️"
  },
  {
    "kategoria": "programozas",
    "cim": "Űrhajós algoritmusjáték",
    "leiras": "Algoritmusos játék űrhajóval.",
    "fajl": "tartalom/programozas/algoritmusjatek-kalozos.html",
    "ikon": "🚀"
  },
  {
    "kategoria": "programozas",
    "cim": "Zombis algoritmusjáték",
    "leiras": "Algoritmusos játék zombikkal.",
    "fajl": "tartalom/programozas/algoritmusjatek-zombi.html",
    "ikon": "🧟"
  },
  {
    "kategoria": "hardver",
    "cim": "PC anatómia",
    "leiras": "A számítógép főbb alkatrészei.",
    "fajl": "tartalom/hardver/pc-anatomia.html",
    "ikon": "🖥️"
  },
  {
    "kategoria": "hardver",
    "cim": "A processzor",
    "leiras": "Interaktív bemutató: a processzor, a digitális világ agya.",
    "fajl": "tartalom/hardver/cpu.html",
    "ikon": "🧠"
  },
  {
    "kategoria": "hardver",
    "cim": "Videókártya",
    "leiras": "Interaktív bemutató: a videókártya, a gép grafikus erőműve.",
    "fajl": "tartalom/hardver/gpu.html",
    "ikon": "🎮"
  },
  {
    "kategoria": "hardver",
    "cim": "OSI modell",
    "leiras": "A hálózati rétegek áttekintése.",
    "fajl": "tartalom/hardver/osi-modell.html",
    "ikon": "🌐"
  },
  {
    "kategoria": "irodai",
    "cim": "PowerPoint oktatóanyag",
    "leiras": "Bemutatók készítése PowerPointban.",
    "fajl": "tartalom/irodai/powerpoint.html",
    "ikon": "📊"
  },
  {
    "kategoria": "irodai",
    "cim": "Fájlkiterjesztések világa",
    "leiras": "Mit jelentenek a fájlok végén álló kiterjesztések?",
    "fajl": "tartalom/irodai/fajlkiterjesztesek.html",
    "ikon": "🗂️"
  },
  {
    "kategoria": "irodai",
    "cim": "Módosító billentyűk",
    "leiras": "A Shift, Alt, AltGr és társaik használata.",
    "fajl": "tartalom/irodai/modosito-billentyuk.html",
    "ikon": "⌨️"
  },
  {
    "kategoria": "irodai",
    "cim": "Billentyűzetgyakorló",
    "leiras": "Vakon gépelés gyakorlása.",
    "fajl": "tartalom/irodai/billentyuzetgyakorlo.html",
    "ikon": "⌨️"
  },
  {
    "kategoria": "irodai",
    "cim": "Gépelés kaland",
    "leiras": "Gépelés játékos formában.",
    "fajl": "tartalom/irodai/gepeles-kaland.html",
    "ikon": "✍️"
  },
  {
    "kategoria": "ido",
    "cim": "Pomodoro időzítő",
    "leiras": "Munka- és szünetciklusok időzítése.",
    "fajl": "tartalom/ido/pomodoro.html",
    "ikon": "🍅"
  },
  {
    "kategoria": "ido",
    "cim": "Dolgozat időzítő",
    "leiras": "Időzítő dolgozatíráshoz.",
    "fajl": "tartalom/ido/dolgozat-idozito.html",
    "ikon": "⏱️"
  },
  {
    "kategoria": "ido",
    "cim": "Dolgozat időzítő (Tomori-változat)",
    "leiras": "Időzítő dolgozatíráshoz, a másik változat.",
    "fajl": "tartalom/ido/dolgozat-idozito-tomori.html",
    "ikon": "⏱️"
  },
  {
    "kategoria": "ido",
    "cim": "Meditációs időzítő",
    "leiras": "Nyugodt időzítő rövid gyakorlatokhoz.",
    "fajl": "tartalom/ido/meditacios-idozito.html",
    "ikon": "🧘"
  },
  {
    "kategoria": "ido",
    "cim": "NEOCLOCK",
    "leiras": "Óra stopperrel és időzítővel.",
    "fajl": "tartalom/ido/neoclock.html",
    "ikon": "🕒"
  },
  {
    "kategoria": "ido",
    "cim": "NEOCLOCK (2. változat)",
    "leiras": "Óra stopperrel és időzítővel, a másik változat.",
    "fajl": "tartalom/ido/neoclock-2.html",
    "ikon": "🕒"
  },
  {
    "kategoria": "ido",
    "cim": "Örök naptár",
    "leiras": "Bármely dátum napjának kiszámítása.",
    "fajl": "tartalom/ido/orok-naptar.html",
    "ikon": "📅"
  },
  {
    "kategoria": "zene",
    "cim": "Szolfézs gyakorló",
    "leiras": "Hangközök és hangok gyakorlása.",
    "fajl": "tartalom/zene/szolfezs.html",
    "ikon": "🎼"
  },
  {
    "kategoria": "zene",
    "cim": "Kvintkör",
    "leiras": "A kvintkör bemutatása.",
    "fajl": "tartalom/zene/kvintkor.html",
    "ikon": "🎵"
  },
  {
    "kategoria": "zene",
    "cim": "Kvintkör gyakorló",
    "leiras": "A kvintkör gyakorlása.",
    "fajl": "tartalom/zene/kvintkor-gyakorlo.html",
    "ikon": "🎵"
  },
  {
    "kategoria": "tortenelem",
    "cim": "Napóleoni hadjáratok",
    "leiras": "Interaktív idővonal a napóleoni korról.",
    "fajl": "tartalom/tortenelem/napoleon.html",
    "ikon": "📜"
  },
  {
    "kategoria": "tortenelem",
    "cim": "Ókori civilizációk idővonala",
    "leiras": "Az ókori civilizációk időrendben.",
    "fajl": "tartalom/tortenelem/okori-civilizaciok.html",
    "ikon": "🏛️"
  },
  {
    "kategoria": "tortenelem",
    "cim": "Angol nyelvtan",
    "leiras": "Középfokú angol nyelvtani összefoglaló.",
    "fajl": "tartalom/tortenelem/angol-nyelvtan.html",
    "ikon": "📖"
  },
  {
    "kategoria": "egyeb",
    "cim": "Robotika világa",
    "leiras": "Robotok a mindennapokban és a munkában.",
    "fajl": "tartalom/egyeb/robotika.html",
    "ikon": "🤖"
  },
  {
    "kategoria": "egyeb",
    "cim": "3D grafika világa",
    "leiras": "Bevezetés a 3D grafikába.",
    "fajl": "tartalom/egyeb/3d-grafika.html",
    "ikon": "🧊"
  },
  {
    "kategoria": "egyeb",
    "cim": "Zajszennyezés és hallásvédelem",
    "leiras": "A zaj hatásai és a hallás védelme.",
    "fajl": "tartalom/egyeb/zajszennyezes.html",
    "ikon": "🔇"
  },
  {
    "kategoria": "egyeb",
    "cim": "Ballagási képeslap",
    "leiras": "Ballagási képeslap készítése.",
    "fajl": "tartalom/egyeb/ballagas.html",
    "ikon": "🎓"
  }
];

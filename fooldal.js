/* Főoldal: kategóriánként csoportosított kártyák, kereséssel.
   Az adatok a js/oldalak.js fájlból jönnek (KATEGORIAK, OLDALAK). */
(function () {
  var tartalom = document.getElementById('tartalom');
  var kereso = document.getElementById('kereso');
  var ures = document.getElementById('ures');
  var db = document.getElementById('db');

  function elem(tag, osztaly, szoveg) {
    var e = document.createElement(tag);
    if (osztaly) e.className = osztaly;
    if (szoveg !== undefined) e.textContent = szoveg;
    return e;
  }

  function megjelenit(keresoSzo) {
    var s = (keresoSzo || '').trim().toLowerCase();
    var talalat = 0;
    tartalom.textContent = '';

    KATEGORIAK.forEach(function (kat) {
      var lista = OLDALAK.filter(function (o) {
        if (o.kategoria !== kat.id) return false;
        if (!s) return true;
        return (o.cim + ' ' + o.leiras).toLowerCase().indexOf(s) !== -1;
      });
      if (!lista.length) return;
      talalat += lista.length;

      var szekcio = elem('section', 'kategoria');
      szekcio.style.setProperty('--c', kat.szin);

      var fejlec = elem('div', 'kat-fejlec');
      fejlec.appendChild(elem('h2', '', kat.nev));
      fejlec.appendChild(elem('p', '', kat.leiras));
      szekcio.appendChild(fejlec);

      var racs = elem('div', 'racs');
      lista.forEach(function (o) {
        var kartya = elem('a', 'kartya');
        kartya.href = o.fajl;
        kartya.style.setProperty('--c', kat.szin);
        kartya.appendChild(elem('div', 'ikon', o.ikon));
        kartya.appendChild(elem('h3', '', o.cim));
        kartya.appendChild(elem('p', '', o.leiras));
        kartya.appendChild(elem('span', 'meg', 'Megnyitás →'));
        racs.appendChild(kartya);
      });
      szekcio.appendChild(racs);
      tartalom.appendChild(szekcio);
    });

    ures.classList.toggle('lathato', talalat === 0);
  }

  db.textContent = OLDALAK.length;
  kereso.addEventListener('input', function () { megjelenit(kereso.value); });
  megjelenit('');
})();

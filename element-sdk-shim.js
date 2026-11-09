/* Helyi kompatibilitási réteg.
 * Egyes oldalak egy szerkesztőkörnyezet window.elementSdk objektumát használják
 * a beállításokhoz (window.elementSdk.config, init, setConfig). Weblapként
 * (pl. GitHub Pages) ez nincs meg, ezért itt az alapértelmezett beállításokat
 * adjuk át, hiba nélkül.
 */
(function () {
  if (window.elementSdk) return;
  var handlers = null;
  window.elementSdk = {
    config: {},
    init: function (opts) {
      opts = opts || {};
      handlers = opts;
      window.elementSdk.config = Object.assign({}, opts.defaultConfig || {});
      setTimeout(function () {
        try { if (typeof opts.onConfigChange === 'function') opts.onConfigChange(window.elementSdk.config); }
        catch (e) { console.warn(e); }
      }, 0);
    },
    setConfig: function (partial) {
      Object.assign(window.elementSdk.config, partial || {});
      try { if (handlers && typeof handlers.onConfigChange === 'function') handlers.onConfigChange(window.elementSdk.config); }
      catch (e) { console.warn(e); }
    }
  };
})();

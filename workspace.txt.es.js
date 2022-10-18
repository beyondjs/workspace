define(["exports", "module", "@beyond-js/kernel@0.1.0/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = _exports.__beyond_pkg = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/kernel", "0.1.0"], ["@beyond-js/widgets", "0.0.10"], ["@beyond-js/backend", "0.0.10"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/inspect", "0.0.1"], ["@beyond-js/local", "0.0.1"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.2"], ["split.js", "1.6.5"], ["tippy.js", "6.3.7"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@0.0.1/workspace",
      "multibundle": true
    },
    "type": "txt"
  }, _amd_module.uri).package('es');

  ;

  __pkg.dependencies.update([]);

  const {
    module
  } = __pkg.bundle;
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 1576538583,
    creator: function (require, exports) {
      exports.txt = {
        "select": {
          "title": "Compilación",
          "start": {
            "title": "Selecciona una distribución para realizar la compilación"
          },
          "empty": "No hay distribuciones añadidas. Cree uno con la plataforma y las especificaciones que desea construir.",
          "actions": {
            "market": "Marketplace",
            "compile": "Compilar"
          }
        },
        "distribution": {
          "environment": "Entorno",
          "ts": "TS",
          "platform": "Plataforma",
          "ssr": "SSR",
          "ports": {
            "labels": {
              "title": "Ports",
              "http": "Http",
              "inspect": "Inspect",
              "bundles": "DevServer"
            },
            "title": "Puertos",
            "http": "Puerto Http",
            "inspect": "Puerto de Inspección ",
            "bundles": "Puerto DevServer"
          },
          "empty": {
            "title": "Distributions",
            "messages": {
              "execute": "Es necesario agregar una distribución con la plataforma en la que desees ejecutar el proyecto",
              "compile": "Es necesario agregar una distribución con la plataforma en la que desees compilar el proyecto"
            }
          }
        },
        "panels": {
          "tab": {
            "actions": {
              "splitRight": "Split Right",
              "splitDown": "Split Down",
              "close": "Close",
              "closeAll": "Cerrar las otras pestañas"
            },
            "labels": {
              "apps": "Proyectos",
              "navigator": "Navegador",
              "compile": "Compilador",
              "static": "Estaticos",
              "app": "Aplicación",
              "appConfig": "Configuración",
              "module": "Modulo",
              "settings": "Preferencias"
            }
          }
        },
        "footer": {
          "path": "pathname",
          "project": "Project",
          "projectEmpty": "No projects selected"
        },
        "early": {
          "title2": "Introduzca su nombre y código de acceso para que empieces con nosotros",
          "title": "Bienvenido a BeyondJS",
          "label": "Ingresa tu código de acceso temprano",
          "action": "Empezar",
          "error": "Código invalido, verifiquelo por favor",
          "message": "BeyondJS esta siento lanzado en etapas. Actualmente estamos ofreciendo un accceso temprano a aquellos que esten interesados en probarlo y brindarnos retroalimentación. ",
          "inputs": {
            "name": "Tú nombre",
            "code": "Código"
          }
        }
      };
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./txt",
    "from": "txt",
    "name": "txt"
  }];
  let txt; // Module exports

  _exports.txt = txt;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'txt') && (_exports.txt = txt = require ? require('./txt').txt : value);
  };

  const __beyond_pkg = __pkg;
  _exports.__beyond_pkg = __beyond_pkg;
  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
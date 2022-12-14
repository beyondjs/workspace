define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/image", "@beyond-js/ui@0.0.1/icon", "@beyond-js/ui@0.0.1/perfect-scrollbar"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.Sidenav = _exports.COMPONENTS = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondImage
  } = dependency_3;
  const {
    BeyondIcon
  } = dependency_4;
  const {
    BeyondScrollContainer
  } = dependency_5;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/layout-sidenav"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/image', dependency_3], ['@beyond-js/ui/icon', dependency_4], ['@beyond-js/ui/perfect-scrollbar', dependency_5]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /**********
  sidenav.jsx
  **********/

  class Sidenav extends React.Component {
    constructor(props) {
      super(props);
      this.updateState = () => this.setState({});
    }
    navigate(event) {
      const target = event.currentTarget;
      beyond.navigate(`/beyond/ui/${target.dataset.link}`);
    }
    render() {
      const components = Object.values(COMPONENTS);
      return /*#__PURE__*/React.createElement(BeyondScrollContainer, {
        className: "nav-beyond-ui"
      }, /*#__PURE__*/React.createElement("section", {
        className: "list-components"
      }, /*#__PURE__*/React.createElement("ul", null, components.map(component => {
        return /*#__PURE__*/React.createElement("li", {
          key: component.title
        }, /*#__PURE__*/React.createElement("h4", {
          onClick: this.navigate,
          "data-link": component.link
        }, component.title));
      }))));
    }
  }

  /***********
  JS PROCESSOR
  ***********/

  /******************
  FILE: components.js
  ******************/
  _exports.Sidenav = Sidenav;
  const COMPONENTS = {
    'icons': {
      'title': 'Icons',
      'description': 'Una gran variedad de iconos para identificar muchos apartados, con una f??cil integraci??n y edici??n.',
      'icon': 'attractions',
      'link': 'icons'
    },
    'iconsButtons': {
      'title': 'Buttons Icons',
      'description': 'Una gran variedad de iconos para identificar muchos apartados, con una f??cil integraci??n y edici??n.',
      'icon': 'attractions',
      'link': 'icons/buttons'
    },
    'modals': {
      'title': 'Modals',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'modals'
    },
    'select': {
      'title': 'Select',
      'description': 'Cada opci??n definida se pasa y se muestra en el cuadro de di??logo para Seleccionar.',
      'icon': 'attractions',
      'link': 'select'
    },
    'form': {
      'title': 'Forms',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'form'
    },
    'alerts': {
      'title': 'Alerts',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'alerts'
    },
    'empty': {
      'title': 'Empty',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'empty'
    },
    'image': {
      'title': 'Images',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'image'
    },
    'instruction': {
      'title': 'Instructions',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'instruction'
    },
    'list': {
      'title': 'Lists',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'list'
    },
    'loading': {
      'title': 'Loadings',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'loading'
    },
    'media': {
      'title': 'Media',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'media'
    },
    'overlay': {
      'title': 'Overlays',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'overlay'
    },
    'scroll': {
      'title': 'Scroll',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'scroll'
    },
    'picture': {
      'title': 'Pictures',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'picture'
    },
    'preloadText': {
      'title': 'Preload Text',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'preloadText'
    },
    'preload': {
      'title': 'Preload',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'preload'
    },
    'publication': {
      'title': 'Publications',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'publication'
    },
    'ripple': {
      'title': 'Ripple',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'ripple'
    },
    'spinner': {
      'title': 'Spinners',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'spinner'
    },
    'swiper': {
      'title': 'Swiper',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'swiper'
    },
    'toast': {
      'title': 'Toasts',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'toast'
    },
    'toolbar': {
      'title': 'Toolbar',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'toolbar'
    },
    'videoPlayer': {
      'title': 'Video Player',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'video-player'
    },
    'waves': {
      'title': 'Waves',
      'description': 'Muestra cuadros de di??logo que aparece encima del contenido de la aplicaci??n',
      'icon': 'attractions',
      'link': 'waves'
    }
  };

  /**********
  SCSS STYLES
  **********/
  _exports.COMPONENTS = COMPONENTS;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/layout-sidenav', '.nav-beyond-ui{height:435px;border-right:solid 1px gray;position:fixed;width:180px}.nav-beyond-ui .list-components ul{list-style:none;color:#fff;padding:12px 0;text-align:left}.nav-beyond-ui .list-components li{padding:5px 0}.nav-beyond-ui .list-components li h4{cursor:pointer;transition:.5s color}.nav-beyond-ui .list-components li h4:hover{color:#e36152}.nav-beyond-ui .list-components li h5{color:gray;padding-left:5px;cursor:pointer;transition:.5s color}.nav-beyond-ui .list-components li h5:hover{color:#e36152}');
  legacyStyles.appendToDOM();
  const ims = new Map();

  // Module exports
  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};
  const __beyond_pkg = __pkg;
  _exports.__beyond_pkg = __beyond_pkg;
  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);
    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;
  __pkg.initialise(ims);
});
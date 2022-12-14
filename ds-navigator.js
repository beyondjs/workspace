define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/icon", "@beyond-js/dashboard@1.0.2/core-components", "@beyond-js/dashboard@1.0.2/ds-contexts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Iframe = Iframe;
  _exports.NavigatorBoard = NavigatorBoard;
  _exports.NavigatorContext = void 0;
  _exports.OLDNavigatorBoard = OLDNavigatorBoard;
  _exports.useNavigatorContext = _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondIconButton
  } = dependency_3;
  const {
    DSSpinner
  } = dependency_4;
  const {
    useDSWorkspaceContext
  } = dependency_5;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.4"], ["@beyond-js/widgets", "0.1.1"], ["@beyond-js/backend", "0.1.2"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "1.0.2"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@1.0.2/ds-navigator"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/icon', dependency_3], ['@beyond-js/dashboard/core-components', dependency_4], ['@beyond-js/dashboard/ds-contexts', dependency_5]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***********
  JS PROCESSOR
  ***********/

  /*****************
  FILE: navigator.js
  *****************/

  class Navigator extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({
        mode: 'closed'
      });
      this.shadow = shadow;
      shadow.innerHTML = `<iframe height="500" width="500" src="http://localhost:8080"/>`;
    }
  }
  window.customElements.define('dashboard-navigator', Navigator);

  /***********
  __iframe.jsx
  ***********/

  function OLDNavigatorBoard() {
    const {
      application,
      toggleNavigator,
      urlNavigator
    } = useDSWorkspaceContext();
    const refIframe = React.useRef();
    const refResizer = React.useRef();
    const refContainer = React.useRef();
    const [resizing, setResizing] = React.useState();
    const input = React.useRef(null);
    const [url, setURL] = React.useState(urlNavigator ? urlNavigator.url : application.application.url);
    const [value, setValue] = React.useState(![undefined, ''].includes(urlNavigator?.route) ? urlNavigator?.route : '/');
    const [responsive, setResponsive] = React.useState();
    let placeholder = application.application.url;
    React.useEffect(() => {
      const resizer = refResizer.current;
      const container = refContainer.current;
      let w, x, h, panelWidth;
      const panels = document.querySelector('.panels__container');
      const calculateMove = event => {
        const moveW = event.clientX - x;
        container.style.width = `${w - moveW}px`;
        refIframe.current.style.width = `${w - moveW - 245}px`;
        panels.style.width = `${panelWidth + moveW}px`;
      };
      const stopResize = event => {
        setResizing(false);
        document.removeEventListener('mousemove', calculateMove);
        document.removeEventListener('mouseup', stopResize);
      };
      const resize = event => {
        event.preventDefault();
        const styles = window.getComputedStyle(container);
        const stylesPanel = window.getComputedStyle(panels);
        w = parseInt(styles.width, 10);
        h = parseInt(styles.height, 10);
        panelWidth = parseInt(stylesPanel.width, 10);
        setResizing(true);
        x = event.clientX;
        document.addEventListener('mousemove', calculateMove);
        document.addEventListener('mouseup', stopResize);
      };
      const clean = () => {
        panels.removeAttribute('style');
      };
      resizer.addEventListener('mousedown', resize);
      return clean;
    }, []);
    const close = () => toggleNavigator(false);
    const onChange = event => setValue(event.currentTarget.value !== '' ? event.currentTarget.value : '/');
    const toggleResponsive = () => setResponsive(!responsive);
    const onSearch = event => {
      event.preventDefault();
      const route = [undefined, ''].includes(input.current.value) ? event.currentTarget.value : '/';
      setValue(route);
      let url = `${application.application.url}${route}`;
      setURL(url);
    };
    const cls = `ds-navigator__container ${resizing ? ' is-resizing' : ''}`;
    const clsIframe = `ds-navigator__iframe ${responsive ? 'iframe--responsive' : ''}`;
    return /*#__PURE__*/React.createElement("div", {
      ref: refContainer,
      className: cls
    }, /*#__PURE__*/React.createElement("div", {
      ref: refResizer,
      className: "ds-navigator__resizer"
    }), /*#__PURE__*/React.createElement("section", {
      className: "ds-navigator__bar"
    }, /*#__PURE__*/React.createElement("form", {
      className: "ds-navigator__form",
      onSubmit: onSearch
    }, /*#__PURE__*/React.createElement(BeyondIconButton, {
      icon: "refresh",
      onClick: onSearch
    }), /*#__PURE__*/React.createElement("input", {
      placeholder: placeholder,
      onChange: onChange,
      value: value,
      type: "text",
      ref: input
    }), /*#__PURE__*/React.createElement(BeyondIconButton, {
      icon: "responsive",
      onClick: toggleResponsive
    }), /*#__PURE__*/React.createElement(BeyondIconButton, {
      icon: "close",
      onClick: close
    }))), /*#__PURE__*/React.createElement("div", {
      className: "ds-navigator__iframe__container"
    }, /*#__PURE__*/React.createElement("iframe", {
      src: url,
      ref: refIframe,
      frameBorder: "0",
      className: clsIframe
    }), /*#__PURE__*/React.createElement("div", {
      className: "ds-navigator__resizer__shadow"
    })));
  }

  /******
  bar.jsx
  ******/

  function NavigatorBar() {
    const {
      setURL,
      url,
      application,
      iframe,
      toggleResponsive
    } = useNavigatorContext();
    const input = React.useRef(null);
    const [value, setValue] = React.useState(url ? url.replace(application.application.url, '') : '/');
    let placeholder = application.application.url;
    const onSearch = event => {
      event.preventDefault();
      let url = `${application.application.url}${value}`;
      setURL(url);
    };
    const onChange = event => setValue(event.currentTarget.value !== '' ? event.currentTarget.value : '/');
    const refresh = event => {
      event.preventDefault();
      if (!iframe) return;
      iframe.src = iframe.src;
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "ds-navigator__bar"
    }, /*#__PURE__*/React.createElement("form", {
      className: "ds-navigator__form",
      onSubmit: onSearch
    }, /*#__PURE__*/React.createElement("nav", {
      className: "left-actions"
    }, /*#__PURE__*/React.createElement(BeyondIconButton, {
      icon: "refresh",
      onClick: refresh
    })), /*#__PURE__*/React.createElement("input", {
      placeholder: placeholder,
      onChange: onChange,
      value: value,
      type: "text",
      ref: input
    }), /*#__PURE__*/React.createElement("nav", {
      className: "right-actions"
    }, /*#__PURE__*/React.createElement(BeyondIconButton, {
      icon: "responsive",
      onClick: toggleResponsive
    }))));
  }

  /********
  board.jsx
  ********/

  const NavigatorContext = React.createContext();
  _exports.NavigatorContext = NavigatorContext;
  const useNavigatorContext = () => React.useContext(NavigatorContext);
  _exports.useNavigatorContext = useNavigatorContext;
  function NavigatorBoard({
    specs
  }) {
    const {
      workspace
    } = useDSWorkspaceContext();
    const [state, setState] = React.useState({});
    const [iframe, setIframe] = React.useState(null);
    const refContainer = React.useRef();
    const resizing = false;
    const cls = `ds-navigator__container ${resizing ? " is-resizing" : ""}`;
    React.useEffect(() => {
      let pkg;
      workspace.getApplication(specs.applicationId).then(application => {
        const url = specs?.url ? specs.url : application.application.url;
        const onChange = () => {
          setState({
            ...state,
            url,
            application,
            ready: application.ready
          });
        };
        pkg = application;
        pkg.bind("change", onChange);
        if (pkg.ready) onChange();
      });
      return () => pkg?.unbind("change", onChange);
    }, []);
    if (!state.ready) return /*#__PURE__*/React.createElement(Preload, null);
    return /*#__PURE__*/React.createElement(NavigatorContext.Provider, {
      value: {
        toggleResponsive: () => setState({
          ...state,
          responsive: !state.responsive
        }),
        setURL: newUrl => setState({
          ...state,
          url: newUrl
        }),
        responsive: state.responsive,
        url: state.url,
        iframe,
        setIframe,
        application: state.application
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: refContainer,
      className: cls
    }, /*#__PURE__*/React.createElement(NavigatorBar, null), /*#__PURE__*/React.createElement(Iframe, null)));
  }

  /***********
  fetching.jsx
  ***********/

  function IframeFetching() {
    return /*#__PURE__*/React.createElement("div", {
      className: "navigator__fetching-container"
    }, /*#__PURE__*/React.createElement(DSSpinner, null));
  }

  /*********
  iframe.jsx
  *********/

  function Iframe({
    specs
  }) {
    const {
      responsive,
      url,
      setIframe
    } = useNavigatorContext();
    const refIframe = React.useRef();
    const [fetching, setFetching] = React.useState(true);
    React.useEffect(() => {
      refIframe.current.addEventListener('load', () => {
        try {
          setFetching(false);
          setIframe(refIframe.current);
        } catch (e) {
          console.error("iframe error", e);
        }
      });
    }, [url]);
    const clsIframe = `ds-navigator__iframe ${responsive ? 'iframe--responsive' : ''}`;
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-navigator__iframe__container"
    }, fetching && /*#__PURE__*/React.createElement(IframeFetching, null), /*#__PURE__*/React.createElement("iframe", {
      src: url,
      ref: refIframe,
      frameBorder: "0",
      className: clsIframe
    }), /*#__PURE__*/React.createElement("div", {
      className: "ds-navigator__resizer__shadow"
    }));
  }

  /**********
  preload.jsx
  **********/

  function Preload() {
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-navigator__container is-fetching"
    }, /*#__PURE__*/React.createElement("section", {
      className: "ds-navigator__bar"
    }, /*#__PURE__*/React.createElement("form", {
      className: "ds-navigator__form"
    }, /*#__PURE__*/React.createElement(BeyondIconButton, {
      icon: "refresh",
      readOnly: true
    }), /*#__PURE__*/React.createElement("input", {
      placeholder: "localhost:port",
      readOnly: true
    }), /*#__PURE__*/React.createElement(BeyondIconButton, {
      icon: "responsive",
      readOnly: true
    }))), /*#__PURE__*/React.createElement("div", {
      className: "ds-navigator__iframe__container"
    }, /*#__PURE__*/React.createElement(IframeFetching, null)));
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/ds-navigator', '.ds-navigator__container.is-fetching .ds-navigator__bar .ds-navigator__form input{background:rgba(255,255,255,.1)}.ds-navigator__container .ds-navigator__bar{display:flex;align-items:center;width:100%;z-index:1000}.ds-navigator__container .ds-navigator__bar .ds-navigator__form{width:100%;display:grid;padding:5px 0;grid-gap:5px;grid-template-columns:auto 1fr auto}.ds-navigator__container .ds-navigator__bar .ds-navigator__form input{width:100%;padding:8px;color:#fff;outline:0;border:none;background:#000;box-shadow:none}.ds-navigator__container .ds-navigator__bar .ds-navigator__form .beyond-icon-button{background:#333}.ds-navigator__container .ds-navigator__bar .ds-navigator__form .beyond-icon-button svg{fill:#fff}.ds-navigator__container .navigator__fetching-container{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;align-self:center;justify-content:center;justify-items:center}.ds-navigator__container .navigator__fetching-container .ds-spinner__container{display:flex;align-self:center;justify-content:center;justify-items:center}.ds-navigator__container{display:grid;height:100%;width:100%;grid-template-rows:auto 1fr;position:relative;overflow-x:auto;grid-gap:0}.ds-navigator__container .ds-navigator__iframe__container{display:flex;align-items:center;justify-content:center;flex-basis:max-content;align-items:center}.ds-navigator__container .ds-navigator__iframe__container iframe{height:100%;width:100%}.ds-navigator__container .ds-navigator__iframe__container iframe.iframe--responsive{height:142mm;width:72.5mm}.ds-navigator__container .ds-navigator__iframe__container{align-items:center}.ds-navigator__container .ds-navigator__resizer{position:absolute;top:0;bottom:0;left:0;z-index:2;height:100%;width:15px;cursor:col-resize;background:#333}.ds-navigator__container .ds-navigator__resizer:hover{background:#343434}.ds-navigator__container.is-resizing .ds-navigator__resizer__shadow{display:block}.ds-navigator__container .ds-navigator__resizer__shadow{position:absolute;top:0;left:0;bottom:15px;right:0;display:none}');
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
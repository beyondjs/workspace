define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ToastContext = void 0;
  _exports.ToastContextProvider = ToastContextProvider;
  _exports.useToastContext = _exports.hmr = _exports.__beyond_pkg = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/toast"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /************
  container.jsx
  ************/

  class Container extends React.Component {
    constructor(props) {
      super(props);
      this._body = document.querySelector('body');
      this._container = document.createElement('div');
    }
    componentDidMount() {
      this._body.appendChild(this._container);
    }
    componentWillUnmount() {
      this._body.removeChild(this._container);
    }
    render() {
      return ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
        className: "beyond-element-toast-container"
      }, this.props.children), this._container);
    }
  }
  /**********
  context.jsx
  **********/

  const ToastContext = React.createContext();
  _exports.ToastContext = ToastContext;
  function ToastContextProvider({
    children
  }) {
    const TOAST_DURATION = 3000;
    const [toasts, setToasts] = React.useState([]);
    React.useEffect(() => {
      if (toasts.length) {
        const timer = setTimeout(() => setToasts(toasts => toasts.slice(1)), TOAST_DURATION);
        return () => clearTimeout(timer);
      }
    }, [toasts]);
    const add = React.useCallback(toast => {
      setToasts(toasts => [...toasts, toast]);
    }, [setToasts]);
    const toastsOutput = [];
    toasts.map((toast, id) => toastsOutput.push( /*#__PURE__*/React.createElement(Toast, {
      key: id
    }, toast)));
    return /*#__PURE__*/React.createElement(ToastContext.Provider, {
      value: {
        add: add
      }
    }, children, /*#__PURE__*/React.createElement(Container, null, toastsOutput));
  }
  const useToastContext = () => React.useContext(ToastContext);
  /********
  toast.jsx
  ********/
  _exports.useToastContext = useToastContext;
  const Toast = ({
    children
  }) => {
    return /*#__PURE__*/React.createElement("div", {
      className: `beyond-element-toast ${children.type ? children.type : 'info'}`
    }, children.message);
  };

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/toast', '.beyond-element-toast{position:relative;-webkit-box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 40px rgba(0,0,0,.1) inset;-moz-box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 40px rgba(0,0,0,.1) inset;box-shadow:0 1px 4px rgba(0,0,0,.3),0 0 40px rgba(0,0,0,.1) inset}.beyond-element-toast:after,.beyond-element-toast:before{content:"";position:absolute;z-index:-1;-webkit-box-shadow:0 0 20px rgba(0,0,0,.8);-moz-box-shadow:0 0 20px rgba(0,0,0,.8);box-shadow:0 0 20px rgba(0,0,0,.8);top:50%;bottom:0;left:10px;right:10px;-moz-border-radius:100px/10px;border-radius:100px/10px}.beyond-element-toast:after{right:10px;left:auto;-webkit-transform:skew(8deg) rotate(3deg);-moz-transform:skew(8deg) rotate(3deg);-ms-transform:skew(8deg) rotate(3deg);-o-transform:skew(8deg) rotate(3deg);transform:skew(8deg) rotate(3deg)}.beyond-element-toast-container{position:fixed;bottom:30px;left:30px}.beyond-element-toast-container .beyond-element-toast{padding:15px;width:200px;color:#fff;background:#e36152;margin-top:8px}.beyond-element-toast-container .beyond-element-toast.accent{background:#a2000a;color:#fff}.beyond-element-toast-container .beyond-element-toast.primary{background:#ff8056;border-radius:5px;color:#fff}.beyond-element-toast-container .beyond-element-toast.secondary{background:#121f36;color:#fff}.beyond-element-toast-container .beyond-element-toast.success{background:#6aac7d;color:#fff}.beyond-element-toast-container .beyond-element-toast.warning{background:#f7d994;color:#fff}.beyond-element-toast-container .beyond-element-toast.info{background:#4d66a9;color:#fff}.beyond-element-toast-container .beyond-element-toast.error{background:#d2281e;color:#fff}');
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
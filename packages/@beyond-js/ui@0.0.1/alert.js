define(["exports", "module", "@beyond-js/kernel@0.0.22/bundle", "react@16.14.0", "react-dom@16.14.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BeyondAlert = BeyondAlert;
  _exports.hmr = void 0;

  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "0.0.1"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };

  const {
    Bundle: __Bundle
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/alert"
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
  /********
  alert.jsx
  ********/

  function BeyondAlert(props) {
    const types = Object.freeze({
      success: 'alert-success',
      warning: 'alert-warning',
      error: 'alert-error',
      danger: 'alert-danger',
      info: 'alert-info'
    });
    const [closed, setClosed] = React.useState(false);
    let {
      type,
      title,
      message,
      className,
      icon,
      align,
      close,
      onClose
    } = props;

    const onClickClose = event => {
      const target = event.currentTarget;
      const parent = target.closest('.beyond-alert');
      parent.classList.add('hiding-component');
      window.setTimeout(() => {
        if (onClose) onClose();
        setClosed(true);
      }, 400);
    };

    if (!type) type = 'info';
    let cls = className ? `beyond-alert ${className}` : 'beyond-alert';
    cls += types.hasOwnProperty(type) ? ` ${types[type]}` : '';
    if (icon) cls += ' alert-icon';
    if (align) cls += ` alert-icon-${align}`;
    const output = [];
    if (title) output.push( /*#__PURE__*/React.createElement("h3", {
      key: "title"
    }, title));
    if (message) output.push( /*#__PURE__*/React.createElement("div", {
      key: "message"
    }, message));
    if (closed) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: cls
    }, icon && !align && /*#__PURE__*/React.createElement(DashboardIcon, {
      className: "alert-icon",
      name: icon
    }), /*#__PURE__*/React.createElement("div", {
      className: "beyond-alert_content"
    }, output, props.children), icon && align === 'right' && /*#__PURE__*/React.createElement(DashboardIcon, {
      className: "alert-icon",
      name: icon
    }), close && /*#__PURE__*/React.createElement(DSIconButton, {
      onClick: onClickClose,
      className: "beyond-alert__close-icon xs",
      icon: "close"
    }));
  }
  /**********
  SCSS STYLES
  **********/


  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/alert', '.beyondalert{padding:15px;color:#fff;margin:10px 0;margin-bottom:20px;display:grid;align-items:center;align-content:center;border-radius:2px;box-shadow:0 10px 13px -7px #000,0 2px 11px 3px transparent}.beyondalert.alert-icon,.beyondalert.alert-icon-left{grid-template-columns:auto 1fr}.beyondalert.alert-icon-right{grid-template-columns:1fr auto}._beyond-alert{border-radius:5px;margin:10px 0;padding:10px}._beyond-alert .alert-icon{padding:0 10px;display:flex}._beyond-alert h3{margin:0;text-transform:uppercase}._beyond-alert p{margin:0;text-transform:uppercase}._beyond-alert.info{background-color:gray}._beyond-alert.success{background:green}._beyond-alert.danger,._beyond-alert.error{background:red}._beyond-alert.warning{background:#ff0}');
  legacyStyles.appendToDOM();
  const ims = new Map(); // Module exports

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {};

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
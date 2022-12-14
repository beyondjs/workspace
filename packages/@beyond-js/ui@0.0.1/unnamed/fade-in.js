define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.default = _exports.__beyond_pkg = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/unnamed/fade-in"
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
  /**********
  fade-in.jsx
  **********/

  class FadeIn extends React.Component {
    constructor() {
      super();
      this.state = {
        maxIsVisible: 0
      };
    }
    get delay() {
      return this.props.delay || 50;
    }
    get transitionDuration() {
      return this.props.transitionDuration || 400;
    }
    componentDidMount() {
      const count = React.Children.count(this.props.children);
      let i = 0;
      this.interval = setInterval(() => {
        i++;
        if (i > count) clearInterval(this.interval);
        this.setState({
          maxIsVisible: i
        });
      }, this.delay);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }
    render() {
      const transitionDuration = this.transitionDuration;
      const WrapperTag = this.props.wrapperTag || "div";
      const ChildTag = this.props.childTag || "div";
      return /*#__PURE__*/React.createElement(WrapperTag, {
        className: this.props.className
      }, React.Children.map(this.props.children, (child, i) => {
        return /*#__PURE__*/React.createElement(ChildTag, {
          className: this.props.childClassName,
          style: {
            transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
            transform: this.state.maxIsVisible > i ? 'none' : 'translateY(20px)',
            opacity: this.state.maxIsVisible > i ? 1 : 0
          }
        }, child);
      }));
    }
  }
  _exports.default = FadeIn;
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
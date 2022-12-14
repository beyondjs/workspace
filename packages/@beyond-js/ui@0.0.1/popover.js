define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BeyondPopover = BeyondPopover;
  _exports.BeyondPopper = BeyondPopper;
  _exports.hmr = _exports.__beyond_pkg = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/popover"
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
  /***********
  JS PROCESSOR
  ***********/

  /***************
  FILE: control.js
  ***************/

  class Control {
    _events;
    _popper;
    get popper() {
      return this._popper;
    }
    _ready;
    get ready() {
      return this._ready;
    }
    constructor() {
      this._events = new Events({
        bind: this
      });
      this.load();
    }
    async load() {
      const url = `/libraries/beyond-ui/libs/popper/static/vendor/popper.min.js`;
      require(['@popperjs/core'], popper => {
        this._popper = popper;
        this._ready = true;
        this._events.trigger('change');
      });
    }
  }

  /**********
  popover.jsx
  **********/

  function BeyondPopover({
    children,
    target,
    className,
    options = {},
    placement = 'bottom'
  }) {
    const button = new React.useRef();
    const content = new React.useRef();
    const [ready, setReady] = React.useState();
    const [instance, setinstance] = React.useState();
    const [opened, setOpened] = React.useState(false);
    const close = () => {
      document.removeEventListener('click', close);
      content.current.removeAttribute('data-show');
      setOpened(false);
    };
    let control;
    const onOpen = () => {
      content.current.setAttribute('data-show', '');
      document.addEventListener('click', close);
      setOpened(true);
      instance?.update();
    };
    const toggle = event => {
      event.preventDefault();
      event.stopPropagation();
      const isOpened = opened;
      setOpened(!isOpened);
      isOpened ? close() : onOpen();
    };
    const hideEvents = ['mouseleave', 'blur'];
    React.useEffect(() => {
      control = new Control();
      const onChange = () => {
        setReady(control.ready);
        if (control.ready) {
          control.unbind('change', onChange);
          const specs = Object.assign({
            placement: placement
          }, options);
          setinstance(control.popper.createPopper(button.current, content.current, specs));
          content.current.addEventListener('blur', close);
          hideEvents.forEach(event => content.current.addEventListener(event, close));
        }
      };
      control.bind('change', onChange);
      if (control.ready) onChange();
      return () => {
        control.unbind('change', onChange);
        button?.current?.removeEventListener('blur', close);
        button?.current?.removeEventListener('mouseleave', close);
      };
    }, [opened]);
    if (!target) {
      throw Error('The target element must be a valid html element or react component');
    }
    if (!ready) return null;
    const cls = className ? `beyond-popover__content ${className}` : 'beyond-popover__content';
    const clsSpan = `beyond-popover__target ${opened ? ' target--opened' : ''}`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: clsSpan,
      ref: button,
      onClick: toggle
    }, target, /*#__PURE__*/React.createElement("div", {
      className: "popover__container"
    }, /*#__PURE__*/React.createElement("div", {
      className: cls,
      ref: content
    }, children))));
  }

  /*********
  popper.jsx
  *********/

  function BeyondPopper({
    opened,
    children,
    target,
    className,
    options = {},
    placement = 'bottom'
  }) {
    const button = new React.useRef();
    const content = new React.useRef();
    const [ready, setReady] = React.useState();
    const [instance, setinstance] = React.useState();
    const close = () => {
      document.removeEventListener('click', close);
      content.current.removeAttribute('data-show');
      setOpened(false);
    };
    let control;
    const onOpen = () => {
      content.current.setAttribute('data-show', '');
      document.addEventListener('click', close);
      setOpened(true);
      instance?.update();
    };
    const hideEvents = ['mouseleave', 'blur'];
    React.useState(() => {
      if (!content?.current) return;
      opened ? onOpen() : close();
    }, [opened]);
    React.useEffect(() => {
      control = new Control();
      const onChange = () => {
        setReady(control.ready);
        if (control.ready) {
          control.unbind('change', onChange);
          const specs = Object.assign({
            placement: placement
          }, options);
          setinstance(control.popper.createPopper(button.current, content.current, specs));
          content.current.addEventListener('blur', close);
          hideEvents.forEach(event => content.current.addEventListener(event, close));
        }
      };
      control.bind('change', onChange);
      if (control.ready) onChange();
      return () => {
        button.current.removeEventListener('blur', close);
        button.current.removeEventListener('mouseleave', close);
      };
    }, [opened]);
    if (!target) {
      throw Error('The target element must be a valid html element or react component');
    }
    if (!ready) return null;
    const cls = className ? `beyond-popover__content ${className}` : 'beyond-popover__content';
    return /*#__PURE__*/React.createElement("div", {
      className: "popover__container"
    }, /*#__PURE__*/React.createElement("div", {
      className: cls,
      ref: content
    }, children));
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/popover', '.beyond-popover__content{display:none;background:#121f36;color:#fff}.beyond-popover__content[data-show]{display:grid;position:absolute;top:0;left:0}.beyond-popover__content .popover__container{position:relative}');
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
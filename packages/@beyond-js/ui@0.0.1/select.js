define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/icon", "@beyond-js/ui@0.0.1/ripple"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.ListOptions = _exports.BeyondSelect = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondIcon
  } = dependency_3;
  const {
    BeyondWaves
  } = dependency_4;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/select"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/icon', dependency_3], ['@beyond-js/ui/ripple', dependency_4]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  /***************
  list-options.jsx
  ***************/

  /**
   * Represent the container of the option list
   */
  class ListOptions extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        'show': props.show ? props.show : false
      };
      this.open = this.open.bind(this);
      this.close = this.close.bind(this);
      this.onClickBackdrop = this.onClickBackdrop.bind(this);
      this.modal = React.createRef();
      this._container = document.createElement('div');
      this._body = document.getElementsByTagName('body')[0];
    }
    componentDidMount() {
      this._body.appendChild(this._container);
    }
    componentWillUnmount() {
      this._body.removeChild(this._container);
    }
    async close() {
      const {
        onClose
      } = this.props;
      // the body is capture to remove the overflow content while the modal is opened.
      document.querySelector('body').setAttribute('style', '');
      if (typeof onClose === "function" && !(await onClose())) return;
      this.setState({
        'show': false
      });
    }
    open() {
      document.querySelector('body').setAttribute('style', 'overflow:hidden');
      this.setState({
        'show': true
      });
    }
    onClickBackdrop(event) {
      if (event.target !== this.modal.current) return;
      this.close();
    }
    render() {
      const show = this.state.show || this.props.show;
      let cls = 'beyond-element-options ';
      cls += this.props.className ? this.props.className : '';
      if (show) cls += ' show-options';
      const output = [];
      if (show) {
        output.push( /*#__PURE__*/React.createElement("div", {
          key: "options-content",
          onClick: this.onClickContent,
          className: "options-content"
        }, this.props.children));
      }
      return ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
        ref: this.modal,
        onClick: this.onClickBackdrop,
        className: cls
      }, output), this._container);
    }
  }

  /**********
  options.jsx
  **********/

  /**
   * Represent a option of the options list.
   */
  _exports.ListOptions = ListOptions;
  const OptionItem = React.memo(({
    value,
    label,
    option,
    onClick
  }) => {
    if (typeof option === 'object') label = option[label];
    return /*#__PURE__*/React.createElement("div", {
      onClick: e => onClick(e, option),
      className: "option"
    }, label, /*#__PURE__*/React.createElement(BeyondWaves, null));
    u;
  });
  /*********
  select.jsx
  *********/

  class BeyondSelect extends React.Component {
    constructor(props) {
      super(props);
      this.modal = React.createRef();
      this.state = {};
      this.setSelect = this.setSelect.bind(this);
      this.open = this.open.bind(this);
    }
    open() {
      setTimeout(this.modal.current.open, 150);
    }
    get value() {
      return this.state.value;
    }
    setSelect(event, option) {
      const target = event.currentTarget;
      target.classList.add('selected');
      target.closest('.options-content').classList.add('exit');
      setTimeout(() => {
        this.modal.current.close();
        /**
         * if a onChange function is passed, is executed passing a object that's emulates
         * emulating the basic structure of
         * the javascript event object
         */
        const specs = {
          'target': {
            'value': option.id,
            'name': this.props.name
          },
          'currentTarget': {
            'value': option.id,
            'name': this.props.name
          }
        };
        this.props.onChange && this.props.onChange(specs);
      }, 350);
      this.setState({
        'value': option
      });
    }
    render() {
      const options = this.props.options;
      let optionValue = this.props.pk ? this.props.pk : 'id';
      let optionLabel = this.props.identifier ? this.props.identifier : 'label';
      //let optionSelect = this.state.value ? this.state.value : {};
      let optionSelect = !this.state.value && this.props.value ? this.props.value : this.state.value;
      optionSelect = typeof optionSelect === 'object' ? optionSelect[optionValue] : optionSelect;

      /**
       * Agregado por compatibilidad ya que originalmente se podian pasar como valor un objecto,
       * lo cual, para garantizar un comportamiento lo m??s similar a un select html com??n, debe evitarse.
       * El valor pasado debe siempre ser un valor primitivo.
       */

      if (optionSelect && typeof optionSelect !== 'object') {
        optionSelect = options.find(option => option[optionValue] === optionSelect);
      }
      const output = [];
      options.map((option, index) => {
        output.push( /*#__PURE__*/React.createElement(OptionItem, {
          key: index,
          label: optionLabel,
          onClick: this.setSelect,
          option: option
        }));
      });
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        onClick: this.open,
        className: "beyond-element-select select-options"
      }, optionSelect ? optionSelect[optionLabel] : "Seleccione...", /*#__PURE__*/React.createElement(BeyondIcon, {
        icon: "arrowDropDown"
      }), /*#__PURE__*/React.createElement(BeyondWaves, null)), /*#__PURE__*/React.createElement(ListOptions, {
        ref: this.modal
      }, output));
    }
  }

  /**********
  SCSS STYLES
  **********/
  _exports.BeyondSelect = BeyondSelect;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/select', '.beyond-element-options .options-content{position:relative;align-self:center;width:95%;max-height:90%;overflow-y:auto;border:1px solid #ff8056;align-items:center;background:#000;color:#ff8056;overflow:auto}.beyond-element-options .options-content:first-letter{text-transform:uppercase}.beyond-element-options .options-content.exit{transition:all 150ms ease-in;opacity:.3;height:0;top:0;position:absolute}.beyond-element-options .option{text-align:left;cursor:pointer;display:grid;align-items:center;position:relative;padding:20px;border-bottom:solid 1px #fff;font-size:16px}.beyond-element-options .option.selected{background:#a2000a;color:#fff}.beyond-element-options .option:first-letter{text-transform:uppercase}.beyond-element-options{display:none;position:absolute;top:0;left:0;bottom:0;right:0;z-index:1;overflow:auto;background-color:rgba(0,0,0,.4)}.beyond-element-options.show-options{display:flex;align-items:center;justify-content:center;z-index:99999}.select-options{border:solid 2px #fff;border-radius:12px;padding:12px;display:grid;grid-template-columns:95% 5%;width:100%;margin:auto;position:relative;font-size:14px;align-items:center}');
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
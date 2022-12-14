define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/ui@0.0.1/icon"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.BeyondImage = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    BeyondIconButton
  } = dependency_3;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/image"
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/ui/icon', dependency_3]]);
  const {
    module
  } = __pkg.bundle;
  const React = dependency_1;
  const ReactDOM = dependency_2;
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  /********
  image.jsx
  ********/

  class BeyondImage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        size: '200x200',
        loaded: false
      };
      this.reload = this.reload.bind(this);
      this.onLoad = this.onLoad.bind(this);
      this.handleError = this.handleError.bind(this);
      this.imageLoaded = this.imageLoaded.bind(this);
    }
    onLoad() {
      this.setState({
        loaded: true,
        error: false
      });
    }
    reload() {
      this.handleUpdate(false);
    }
    handleError(src) {
      this.setState({
        error: true,
        loaded: false
      });
    }
    imageLoaded(event) {
      this.setState({
        htmlLoaded: true
      });
    }
    getGraphSrc(url, size) {
      const index = url.indexOf('&');
      let params = '';
      let urlPicture = url;
      const appId = beyond.params.application.id;
      if (index >= 0) {
        urlPicture = url.substr(0, index);
        params = url.substr(index);
      }
      return `${urlPicture}?size=${size}&fit=cover${params}&application_id=${appId}`;
    }
    loadImage(url, size) {
      let urlPicture = url;
      let finalSrc = urlPicture;
      if (this.props.graphSrc) {
        finalSrc = this.getGraphSrc(this.props.graphSrc, size);
      }
      const image = new Image();
      image.onload = this.onLoad;
      image.onerror = this.handleError;
      image.src = finalSrc;
      this.image = image;
      this.setState({
        url: url,
        size: size,
        src: finalSrc
      });
    }
    componentDidUpdate() {
      const currentSrc = this.props.graphSrc || this.props.src;
      if (this.state.url !== currentSrc) {
        let size = this.props.size ? this.props.size : this.state.size;
        this.loadImage(currentSrc, size);
      }
    }
    componentDidMount() {
      const currentSrc = this.props.graphSrc || this.props.src;
      let size = this.props.size ? this.props.size : this.state.size;
      this.loadImage(currentSrc, size);
    }
    componentWillUnmount() {
      this.image.onload = undefined;
      this.image.onerror = undefined;
    }
    render() {
      let output;
      const {
        onClick,
        cover
      } = this.props;
      let data = {};
      Object.entries(this.props).map(item => {
        if (item[0].startsWith('data')) data[item[0]] = item[1];
      });
      let cls = this.props.className ? `beyond-element-image ${this.props.className}` : 'beyond-element-image ';
      if (cover) cls += " cover-image";
      if (this.state.error) {
        cls += ' beyond-element-image-error';
        if (this.props.reload) {
          output = /*#__PURE__*/React.createElement("div", {
            key: "error",
            "data-src": this.state.src
          }, /*#__PURE__*/React.createElement(BeyondIconButton, {
            icon: "refresh"
          }));
        }
      } else if (this.state.loaded) {
        output = /*#__PURE__*/React.createElement("img", {
          src: this.state.src,
          onLoad: this.imageLoaded
        });
      }
      if (!this.state.error && !this.state.loaded) {
        cls += ' beyond-element-image-preload ';
        output = /*#__PURE__*/React.createElement("div", null);
      }
      if (!this.state.htmlLoaded) cls += ' beyond-element-image-preload';
      return /*#__PURE__*/React.createElement("figure", _extends({
        "data-src": this.state.src,
        className: cls
      }, data, {
        onClick: onClick
      }), output, this.props.children);
    }
  }

  /**********
  SCSS STYLES
  **********/
  _exports.BeyondImage = BeyondImage;
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/image', '.beyond-element-image{position:relative}.beyond-element-image.beyond-element-image-error,.beyond-element-image.beyond-element-image-preload{background:var(--beyond-preload-background);display:block}.beyond-element-image.cover-image img{width:100%;height:100%;object-fit:cover}.beyond-element-image.contain img{object-fit:contain}.beyond-element-image.fill img{object-fit:fill}');
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
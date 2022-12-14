define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.__beyond_pkg = _exports.BeyondVideoPlayer = void 0;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/ui", "0.0.1"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/ui@0.0.1/video-player"
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
  vhtml.jsx
  ********/

  function Vhtml({
    src,
    poster
  }) {
    return /*#__PURE__*/React.createElement("video", {
      className: "graphs-element-video-player",
      muted: true,
      controls: true,
      poster: poster
    }, /*#__PURE__*/React.createElement("source", {
      src: src,
      muted: "muted",
      type: "video/mp4"
    }));
  }
  /***************
  video-player.jsx
  ***************/

  class BeyondVideoPlayer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      let {
        type,
        url,
        poster,
        autoplay
      } = this.props;
      if (type === 'youtube') {
        return /*#__PURE__*/React.createElement(Youtube, {
          id: this.props['video-id']
        });
      } else {
        return /*#__PURE__*/React.createElement(Vhtml, {
          src: url,
          poster: poster
        });
      }
    }
  }
  /**********
  youtube.jsx
  **********/
  _exports.BeyondVideoPlayer = BeyondVideoPlayer;
  function Youtube({
    id
  }) {
    if (!id) return /*#__PURE__*/React.createElement("div", {
      className: "beyond-element-video-player preload"
    });
    let src = `https://www.youtube.com/embed/${id}?enablejsapi=1`;
    return /*#__PURE__*/React.createElement("div", {
      className: "beyond-element-video-player youtube"
    }, /*#__PURE__*/React.createElement("iframe", {
      id: "player",
      type: "text/html",
      width: "640",
      height: "360",
      src: src,
      frameBorder: "0",
      allowFullScreen: true
    }));
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/ui/video-player', '.beyond-element-video-player{width:100%}.beyond-element-video-player.youtube{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden}.beyond-element-video-player.youtube embed,.beyond-element-video-player.youtube iframe,.beyond-element-video-player.youtube object{position:absolute;top:0;left:0;width:100%;height:100%}');
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
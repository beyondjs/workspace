define(["exports", "module", "@beyond-js/kernel@0.1.4/bundle", "react@16.14.0", "react-dom@16.14.0", "@beyond-js/inspect@0.0.1/reactive-model", "@beyond-js/dashboard@1.0.2/hooks", "@beyond-js/dashboard@1.0.2/models", "@beyond-js/dashboard@1.0.2/core-components", "@beyond-js/dashboard@1.0.2/ds-contexts", "@beyond-js/kernel@0.1.4/texts"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.DsNotificationContext = _exports.DSNotifications = void 0;
  _exports.NotificationPanel = NotificationPanel;
  _exports.useDsNotificationContext = _exports.hmr = _exports.__beyond_pkg = void 0;
  /*************
  LEGACY IMPORTS
  *************/

  const {
    ReactiveModel
  } = dependency_3;
  const {
    useBinder
  } = dependency_4;
  const {
    projectsFactory
  } = dependency_5;
  const {
    DSIcon
  } = dependency_6;
  const {
    useDSWorkspaceContext
  } = dependency_7;
  const {
    CurrentTexts
  } = dependency_8;
  const bimport = specifier => {
    const dependencies = new Map([["@beyond-js/inspect", "0.0.1"], ["@beyond-js/plm", "0.0.1"], ["@beyond-js/ui", "0.0.1"], ["@beyond-js/local", "0.1.2"], ["@beyond-js/kernel", "0.1.4"], ["@beyond-js/widgets", "0.1.1"], ["@beyond-js/backend", "0.1.2"], ["dayjs", "1.11.5"], ["emmet-monaco-es", "5.1.2"], ["monaco-editor", "0.33.0"], ["react", "16.14.0"], ["react-dom", "16.14.0"], ["react-select", "5.4.0"], ["react-split", "2.0.14"], ["socket.io-client", "4.5.4"], ["split.js", "1.6.5"], ["tippy.js", "6.2.5"], ["waves", "0.1.1"], ["@beyond-js/dashboard", "1.0.2"], ["@beyond-js/dashboard", "1.0.2"]]);
    return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
  };
  const {
    Bundle: __Bundle
  } = dependency_0;
  const __pkg = new __Bundle({
    "module": {
      "vspecifier": "@beyond-js/dashboard@1.0.2/ds-notifications",
      "multibundle": true
    },
    "type": "code"
  }, _amd_module.uri).package();
  ;
  __pkg.dependencies.update([['react', dependency_1], ['react-dom', dependency_2], ['@beyond-js/inspect/reactive-model', dependency_3], ['@beyond-js/dashboard/hooks', dependency_4], ['@beyond-js/dashboard/models', dependency_5], ['@beyond-js/dashboard/core-components', dependency_6], ['@beyond-js/dashboard/ds-contexts', dependency_7], ['@beyond-js/kernel/texts', dependency_8]]);
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
  /******
  box.jsx
  ******/

  function BoxNotifications({
    toggle
  }) {
    const cls = `ds-notification__list ${toggle ? 'is-opened' : ''}`;
    return /*#__PURE__*/React.createElement("div", {
      className: cls
    }, /*#__PURE__*/React.createElement(ProjectsPanel, null));
  }

  /**********
  control.jsx
  **********/

  const DsNotificationContext = React.createContext(null);
  _exports.DsNotificationContext = DsNotificationContext;
  const useDsNotificationContext = () => React.useContext(DsNotificationContext);
  _exports.useDsNotificationContext = useDsNotificationContext;
  function NotificationPanel() {
    const [toggle, setToggle] = React.useState(false);
    const {
      texts,
      ready,
      items
    } = DSNotifications;
    const [state, setState] = React.useState({
      texts,
      ready,
      items
    });
    const container = React.useRef();
    useBinder([DSNotifications], () => {
      const {
        ready,
        items,
        texts,
        unread
      } = DSNotifications;
      setState(state => ({
        ...state,
        ready,
        items,
        texts,
        unread
      }));
    });
    React.useEffect(() => {
      const outsideClick = event => {
        const target = event.target;
        const isSameNode = target.isSameNode(container?.current);
        const isContainer = container?.current?.contains(target);
        if (!isSameNode && !isContainer) {
          setToggle(false);
        }
      };
      window.addEventListener("click", outsideClick);
      return () => window.removeEventListener("click", outsideClick);
    }, []);
    if (!state?.ready) return null;
    const {
      unread
    } = state;
    const cls = ` ds-notification__button__container ${toggle ? 'is-opened' : ''} ${unread ? ' list--unread' : ''}`;
    return /*#__PURE__*/React.createElement(DsNotificationContext.Provider, {
      value: {
        ...state
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "ds-notification__container",
      ref: container,
      onClick: () => setToggle(!toggle)
    }, /*#__PURE__*/React.createElement("div", {
      className: cls
    }, /*#__PURE__*/React.createElement(DSIcon, {
      icon: "bell"
    }), state.unread && /*#__PURE__*/React.createElement("span", {
      className: "ds-notification__badge"
    })), /*#__PURE__*/React.createElement(BoxNotifications, {
      toggle: toggle
    })));
  }

  /********
  empty.jsx
  ********/

  const EmptyNotifications = () => {
    const {
      texts
    } = useDsNotificationContext();
    return /*#__PURE__*/React.createElement("div", {
      className: "empty__item"
    }, /*#__PURE__*/React.createElement("span", null, texts.empty));
  };

  /*******************
  item\application.jsx
  *******************/

  function ApplicationItem({
    item
  }) {
    return /*#__PURE__*/React.createElement("div", null, item.message, ";");
  }

  /**************
  item\bundle.jsx
  **************/

  function BundleItem({
    item
  }) {
    return /*#__PURE__*/React.createElement("div", null, item.message, ";");
  }

  /***************
  item\default.jsx
  ***************/

  function DefaultItem({
    item
  }) {
    return /*#__PURE__*/React.createElement("div", null, item.message, ";");
  }

  /******************
  item\diagnostic.jsx
  ******************/

  function DiagnosticItem({
    item,
    module
  }) {
    const {
      texts
    } = useDsNotificationContext();
    const message = item.message === 'TOTAL' ? texts.item.diagnostics.totalDependencies : item.message;
    const {
      workspace
    } = useDSWorkspaceContext();
    const onClick = event => {
      event.preventDefault();
      workspace.openBoard('module', {
        label: module.path,
        moduleId: module.id
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick
    }, /*#__PURE__*/React.createElement("div", {
      className: "file"
    }, item.file), item.message === 'TOTAL' && /*#__PURE__*/React.createElement("strong", null, item.total, " "), message);
  }

  /***************
  item\factory.jsx
  ***************/

  function FactoryItem({
    item,
    module
  }) {
    const TYPES = {
      application: ApplicationItem,
      module: ModuleItem,
      bundle: BundleItem,
      source: SourceItem,
      default: DefaultItem,
      diagnostics: DiagnosticItem
    };
    const Control = TYPES.hasOwnProperty(item.type) ? TYPES[item.type] : TYPES.default;
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-notification__list-item"
    }, /*#__PURE__*/React.createElement(Control, {
      item: item,
      module: module
    }));
  }

  /**************
  item\module.jsx
  **************/

  function ModuleItem({
    item,
    module
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, module?.name), item.message.replaceAll('\\', '/').replace(module?.path, ''));
  }

  /**************
  item\source.jsx
  **************/

  function SourceItem({
    item
  }) {
    return /*#__PURE__*/React.createElement("div", null, item.message);
  }

  /****************
  panels\module.jsx
  ****************/

  function ModuleNotifications({
    module
  }) {
    const output = [];
    const specs = {
      module
    };
    module.errors.forEach((item, i) => output.push( /*#__PURE__*/React.createElement(FactoryItem, _extends({
      item: item,
      key: `${item.id}.${i}`
    }, specs))));
    module.warnings.forEach((item, i) => output.push( /*#__PURE__*/React.createElement(FactoryItem, {
      item: item,
      key: `${item.id}.${i}`
    })));
    if (module.general) {
      module.general.forEach(general => {
        general.forEach((item, i) => {
          output.push( /*#__PURE__*/React.createElement(FactoryItem, _extends({}, specs, {
            item: item,
            key: `general-${item.id}.${i}`
          })));
        });
      });
    }
    if (module.dependencies) {
      module.dependencies.forEach((item, i) => output.push( /*#__PURE__*/React.createElement(FactoryItem, _extends({}, specs, {
        item: item,
        key: `dependencies-${item.id}.${i}`
      }))));
    }
    if (module.overwrites) {
      module.overwrites.forEach(overwrites => {
        overwrites.forEach(item => {
          output.push( /*#__PURE__*/React.createElement(FactoryItem, _extends({}, specs, {
            item: item,
            key: `module-${item.id}`
          })));
        });
      });
    }
    if (module.files) {
      module.files.forEach(files => {
        files.forEach(item => output.push( /*#__PURE__*/React.createElement(FactoryItem, _extends({}, specs, {
          item: item,
          key: `file-${item.id}`
        }))));
      });
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, output);
  }

  /*****************
  panels\project.jsx
  *****************/

  function ProjectNotifications({
    project
  }) {
    const {
      texts
    } = useDsNotificationContext();
    const {
      workspace
    } = useDSWorkspaceContext();
    const {
      application
    } = project;
    const output = [];
    const notifications = React.useRef(null);
    // project?.modules.forEach(module => {
    //     if (!module.id) return;
    //     output.push(<ModuleNotifications module={module} key={`module-${project.id}-${module.id}.${performance.now()}`}/>)
    // });

    const openApp = () => workspace.openApp(application.id);
    const clickOnApp = event => {
      event.preventDefault();
      event.stopPropagation();
      notifications.current.classList.toggle('project__notifications--opened');
    };
    return /*#__PURE__*/React.createElement("li", {
      onClick: clickOnApp
    }, /*#__PURE__*/React.createElement("header", {
      className: "project__header"
    }, /*#__PURE__*/React.createElement("span", {
      className: "item__name"
    }, application.name ?? texts.projects.noName), /*#__PURE__*/React.createElement("div", {
      className: "item__detail"
    }, /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, texts.projects.scanned), /*#__PURE__*/React.createElement("span", {
      className: "detail"
    }, project.processed, "/", project.total))));
  }

  /******************
  panels\projects.jsx
  ******************/

  function ProjectsPanel() {
    const model = DSNotifications;
    const {
      texts
    } = useDsNotificationContext();
    const output = [];
    model.projects.forEach(item => {
      const {
        application
      } = item;
      output.push( /*#__PURE__*/React.createElement(ProjectNotifications, {
        key: application.id,
        project: item
      }));
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "ds-resume ds-resume__panel ds-resume__panel--projects"
    }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("span", {
      className: "title"
    }, texts.projects.title)), /*#__PURE__*/React.createElement("ul", null, output));
  }

  /***********
  JS PROCESSOR
  ***********/

  /*************************
  FILE: notification\item.js
  *************************/

  class ItemNotificationModel extends ReactiveModel {
    _id;
    get id() {
      return this._id;
    }
    get data() {
      return this._data;
    }
    get type() {
      return "application";
    }
    constructor(data) {
      super();
      this._data = data;
      this._id = data.id;
    }
  }

  /*****************************
  FILE: listeners\application.js
  *****************************/

  class ApplicationListener extends ReactiveModel {
    #model;
    #maps = {
      errors: new Map(),
      warnings: new Map()
    };
    get errors() {
      return this.#maps.errors;
    }
    get warnings() {
      return this.#maps.warnings;
    }
    get name() {
      return this.#model.application?.name;
    }
    get id() {
      return this.#model.application.id;
    }
    get application() {
      return this.#model.application;
    }
    #processed;
    get processed() {
      return this.#model.moduleManager.processed;
    }
    get total() {
      return this.#model.moduleManager.total;
    }
    get manager() {
      return this.#model;
    }
    #modules = new Map();
    get modules() {
      return this.#modules;
    }
    constructor(app) {
      super();
      const model = projectsFactory.get(app.id);
      this.#model = model;
      model.bind('change', this.listener);
      model.moduleManager.bind('model.loaded', this.listener);
    }
    get items() {
      return Array.from(this.#maps.errors.values()).concat(Array.from(this.#maps.warnings.values()));
    }
    processModules() {
      this.#model?.moduleManager.models.forEach(item => {
        if (this.#modules.has(item.id)) return;
        this.#modules.set(item.id, new ModuleListener(item));
        this.triggerEvent();
      });
    }
    listener = () => {
      let change = false;
      this.processModules();
      if (this.#processed !== this.processed) {
        this.#processed = this.processed;
        change = true;
        this.processModules();
      }
      const clean = (type, id) => {
        const property = type === 'errors' ? this.#model.errors : this.#model.warnings;
        type = type === 'errors' ? 'errors' : 'warnings';
        const exists = property.find(error => error.id === id);
        if (exists) this.#maps[type].delete(id);
        change = true;
      };
      const set = (type, element) => {
        type = type === 'errors' ? 'errors' : 'warnings';
        if (this.#maps[type].has(element.id)) return;
        this.#maps[type].set(element.id, new ApplicationItemModel(element, this.#model));
        change = true;
      };
      Array.from(this.#maps.errors.keys()).forEach(id => clean('errors', id));
      this.#model.errors.forEach(error => set('errors', error));
      Array.from(this.#maps.warnings.keys()).forEach(id => clean('warnings', id));
      this.#model.warnings.forEach(warnings => set('warnings', warnings));
      if (change) {
        this.triggerEvent();
      }
    };
  }
  /************************
  FILE: listeners\module.js
  ************************/

  class ModuleListener extends ReactiveModel {
    #model;
    get model() {
      return this.#model;
    }
    #maps = {
      errors: new Map(),
      warnings: new Map()
    };
    get id() {
      return this.#model.am?.module?.id;
    }
    get errors() {
      return Array.from(this.#maps.errors.values());
    }
    get warnings() {
      return Array.from(this.#maps.warnings.values());
    }
    #dependencies = [];
    get dependencies() {
      return this.#dependencies;
    }
    get name() {
      return this.#model.am?.module.name;
    }
    #general = [];
    get general() {
      return this.#general;
    }
    #overwrites = [];
    get overwrites() {
      return this.#overwrites;
    }
    get path() {
      return `${this.model.am?.module?.path.replaceAll('\\', '/')}/`;
    }
    #files = [];
    get files() {
      return this.#files;
    }
    constructor(model) {
      super();
      this.#model = model;
      this.model.bind('change', this.#listen);
      this.model.bind('model.loaded', this.#listen);
      this.check();
    }
    #listen = () => {
      this.check();
    };
    cleanCompiler() {
      this.#dependencies = [];
      this.#general = [];
      this.#files = [];
      this.#overwrites = [];
    }
    check() {
      if (!this.#model.am || !this.#model.am.module) return;
      const {
        am: {
          module: {
            errors,
            warnings
          }
        },
        bundles
      } = this.#model;
      const elements = errors.map(item => item.id);
      const current = Array.from(this.#maps.errors.keys());
      current.forEach(item => {
        if (!elements.includes(item)) this.#maps.errors.delete(item);
      });
      if (errors) {
        errors.forEach(error => this.#maps.errors.set(error.id, error));
      }
      if (warnings) {
        warnings.forEach(warning => this.#maps.warnings.set(warning.id, warning));
      }
      this.cleanCompiler();
      const projectPath = this.model.am?.module?.path?.replaceAll('\\', '/');
      const module = this.model.am?.module;
      bundles?.items.forEach(bundle => {
        if (!bundle.compiler) {
          return;
        }
        if (!bundle.compiler.diagnostics) {
          return;
        }
        const {
          dependencies,
          general,
          files,
          overwrites
        } = bundle.compiler.diagnostics;
        if (dependencies.size) {
          dependencies.forEach((items, file) => {
            file = `${module.name}${file.replace(projectPath, '')}`;
            if (items.length === 1) {
              const item = {
                ...items[0]
              };
              item.file = file;
              return this.#dependencies.push(item);
            }
            this.dependencies.push({
              type: 'diagnostics',
              file,
              total: items.length,
              message: 'TOTAL'
            });
          });
        }
        if (general.length) this.#general.push(general);
        if (files.size) this.#files.push(files);
        if (overwrites.size) this.#overwrites.push(overwrites);
      });
      if (errors || warnings) {
        this.triggerEvent('new.notification');
      }
    }
  }

  /*************
  FILE: model.js
  *************/

  const DSNotifications = new class extends ReactiveModel {
    /**
     * Map con las notificaciones agrupadas para mostrar
     * los  keys son los ids de las notificaciones
     * @type {Map<any, any>}
     * @private
     */
    #notifications = new Map();
    get notifications() {
      return this.#notifications;
    }
    get ready() {
      return this.#texts?.ready;
    }
    #texts;
    get texts() {
      return this.#texts?.value;
    }
    #projects = new Map();
    get projects() {
      return this.#projects;
    }
    #modules = new Map();
    get modules() {
      return this.#modules;
    }
    #unread;
    get unread() {
      return this.#unread;
    }
    get items() {
      let items = [];
      this.#projects.forEach(app => {
        items = items.concat(app.items);
      });
      return items;
    }
    constructor() {
      super();
      const module = __pkg.bundle.module.specifier;
      this.#texts = new CurrentTexts(module, true);
      this.#texts.bind('change', this.triggerEvent);
      window.ns = this;
    }
    start(projects) {
      projects.forEach(app => {
        if (this.#projects.has(app.id)) return;
        const listener = new ApplicationListener(app);
        this.#projects.set(app.id, listener);
        listener.bind('change', this.triggerEvent);
      });
    }
    triggerError = () => {
      this.triggerEvent('new.notification');
    };
  }();

  /********************************
  FILE: notification\application.js
  ********************************/
  _exports.DSNotifications = DSNotifications;
  class ApplicationItemModel extends ItemNotificationModel {
    get message() {
      const message = this.data.message.replace(this.application.pathname, '');
      return message;
    }
    #application;
    get application() {
      return this.#application;
    }
    constructor(data, application) {
      super(data);
      this.#application = application;
    }
  }

  /**********
  SCSS STYLES
  **********/
  const legacyStyles = beyondLegacyStyles.register('@beyond-js/dashboard/ds-notifications.code', '.ds-notification__container .ds-notification__badge{position:absolute;top:10px;right:10px;width:10px;height:10px;background:#d2281e;color:#fff;display:flex;justify-content:center;align-items:center;border-radius:50%}.dashboard-layout .ds-toolbar .ds-notification__list{position:absolute;top:3.8rem;max-width:350px;right:0;background-color:#000;border:1px solid #121f36;overflow:hidden;z-index:9;display:none;width:100%;transition:.3s ease-in all;border-radius:5px}.dashboard-layout .ds-toolbar .ds-notification__list.is-opened{display:flex;flex-direction:column}.ds-notification__container .empty__item{display:grid;justify-items:center;color:#5e5f5c}.ds-notification__container .empty__item span{display:grid;padding:15px}.dashboard-layout .ds-toolbar .group-items-toolbar .ds-notification__container{height:100%}.dashboard-layout .ds-toolbar .group-items-toolbar .ds-notification__container .ds-notification__button__container{position:relative;display:flex;align-items:center;justify-content:center;justify-items:center;border:none;height:100%;outline:0;text-align:center;padding:0 10px 0 15px;cursor:pointer}.dashboard-layout .ds-toolbar .group-items-toolbar .ds-notification__container .ds-notification__button__container.is-opened{background:rgba(5,9,16,.8)}.dashboard-layout .ds-toolbar .group-items-toolbar .ds-notification__container .ds-notification__button__container .beyond-icon{fill:#FFFFFF;transition:all .3s ease-in}.dashboard-layout .ds-toolbar .group-items-toolbar .ds-notification__container .ds-notification__button__container.list--unread .beyond-icon{fill:var(--beyond-primary-accent-color)}.dashboard-layout .ds-toolbar .ds-notification__container .ds-notification__list-item{height:auto;text-decoration-line:none;display:flex;align-items:center;transition:background .5s;cursor:pointer;padding:15px;border-top:1px solid var(--beyond-secondary-light-color)}.dashboard-layout .ds-toolbar .ds-notification__container .ds-notification__list-item svg{height:3rem;width:3rem;fill:#D2281E}.dashboard-layout .ds-toolbar .ds-notification__container .ds-notification__list-item .error{fill:#D2281E}.dashboard-layout .ds-toolbar .ds-notification__container .ds-notification__list-item .warning{fill:var(--beyond-secondary-accent-color)}.dashboard-layout .ds-toolbar .ds-notification__container .ds-notification__list-item .icon-button{margin-right:.5rem}.dashboard-layout .ds-toolbar .ds-notification__container .ds-notification__list-item .icon-button:hover{filter:none}.dashboard-layout .ds-toolbar .ds-notification__container .ds-notification__list-item:hover{background:rgba(255,128,86,.3)}.dashboard-layout .ds-toolbar .ds-notification__container .ds-notification__list-item .icon-right{margin-left:auto}.dashboard-layout .ds-toolbar .ds-notification__container .ds-notification__list-item .item__title{text-transform:uppercase;font-size:.9rem}.dashboard-layout .ds-toolbar .ds-notification__container .ds-notification__list-item .item__information{display:flex;justify-content:space-between;width:90%;flex-direction:column;flex-wrap:wrap;padding-left:1rem}.dashboard-layout .ds-toolbar .ds-notification__container .ds-notification__list-item .item__data{display:flex;gap:10px;max-width:100%;overflow:hidden}.ds-notification__list ul{padding:0;list-style:none;margin:0}.ds-resume.ds-resume__panel{padding:15px}.ds-resume.ds-resume__panel header .title{padding:0;text-transform:uppercase;color:var(--beyond-primary-accent-color)}.ds-resume.ds-resume__panel.ds-resume__panel--projects li{display:grid}.ds-resume.ds-resume__panel.ds-resume__panel--projects li .project__header{display:flex;justify-content:space-between;padding:2px 0;cursor:pointer}.ds-resume.ds-resume__panel.ds-resume__panel--projects li .project__header:hover{color:var(--beyond-secondary-accent-color)}.ds-resume.ds-resume__panel.ds-resume__panel--projects li .project__notifications{overflow:hidden;height:0;transition:height .5s ease-in-out}.ds-resume.ds-resume__panel.ds-resume__panel--projects li .project__notifications.project__notifications--opened{height:auto}.ds-resume.ds-resume__panel.ds-resume__panel--projects li .item__detail .label{padding:0 10px}');
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
'use strict';



;define("emberapp/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("emberapp/app", ["exports", "ember-resolver", "ember-load-initializers", "emberapp/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("emberapp/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("emberapp/components/cube", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#unless this.started}}
    <div class="splash" {{on 'click' this.start}} >
      <img src="./svg/virus.svg" />
      <h3>corona vairus</h3>
      <p>Ordena las fichas para protegernos</p>
      <p>Toca la pantalla para comenzar</p>
    </div>
  {{else}}
    {{#if this.done}}
      <div class="splash" {{on 'click' this.start}} >
        <img src="./svg/world.svg" />
        <h3>quedate en casa</h3>
        <p>Toca la pantalla para volver a comenzar</p>
      </div>
    {{else}}
      <div class="cube">
        {{#each this.faces as |f|}}
          <CubeFace @face={{f}} @size={{this.size}} @checkStatus={{this.checkStatus}} />
        {{/each}}
        <div class="face bottom"/>
      </div>
    {{/if}}
  {{/unless}}
  
  
  */
  {
    id: "3mljg2CZ",
    block: "{\"symbols\":[\"f\"],\"statements\":[[5,[27,[26,4,\"BlockHead\"],[]],[[27,[24,0],[\"started\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"  \"],[9,\"div\",false],[23,\"class\",\"splash\",null],[3,0,0,[27,[26,2,\"ModifierHead\"],[]],[\"click\",[27,[24,0],[\"start\"]]],null],[10],[1,1,0,0,\"\\n    \"],[9,\"img\",true],[12,\"src\",\"./svg/virus.svg\",null],[10],[11],[1,1,0,0,\"\\n    \"],[9,\"h3\",true],[10],[1,1,0,0,\"corona vairus\"],[11],[1,1,0,0,\"\\n    \"],[9,\"p\",true],[10],[1,1,0,0,\"Ordena las fichas para protegernos\"],[11],[1,1,0,0,\"\\n    \"],[9,\"p\",true],[10],[1,1,0,0,\"Toca la pantalla para comenzar\"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[5,[27,[26,3,\"BlockHead\"],[]],[[27,[24,0],[\"done\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"div\",false],[23,\"class\",\"splash\",null],[3,0,0,[27,[26,2,\"ModifierHead\"],[]],[\"click\",[27,[24,0],[\"start\"]]],null],[10],[1,1,0,0,\"\\n      \"],[9,\"img\",true],[12,\"src\",\"./svg/world.svg\",null],[10],[11],[1,1,0,0,\"\\n      \"],[9,\"h3\",true],[10],[1,1,0,0,\"quedate en casa\"],[11],[1,1,0,0,\"\\n      \"],[9,\"p\",true],[10],[1,1,0,0,\"Toca la pantalla para volver a comenzar\"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"    \"],[9,\"div\",true],[12,\"class\",\"cube\",null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,1,\"BlockHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"faces\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"        \"],[7,\"cube-face\",[],[[\"@face\",\"@size\",\"@checkStatus\"],[[27,[24,1],[]],[27,[24,0],[\"size\"]],[27,[24,0],[\"checkStatus\"]]]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]],[1,1,0,0,\"      \"],[9,\"div\",true],[12,\"class\",\"face bottom\",null],[10],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\",\"on\",\"if\",\"unless\"]}",
    meta: {
      moduleName: "emberapp/components/cube.hbs"
    }
  });

  let Cube = (_dec = Ember.inject.service('audio'), (_class = (_temp = class Cube extends _component.default {
    constructor() {
      super(...arguments);

      _initializerDefineProperty(this, "audio", _descriptor, this);

      _initializerDefineProperty(this, "started", _descriptor2, this);

      _initializerDefineProperty(this, "done", _descriptor3, this);

      _defineProperty(this, "_status", new Array(3).fill(false));

      _defineProperty(this, "size", 2);

      _defineProperty(this, "faces", ['top', 'left', 'right']);

      this.size = this.args.size || 2;
    }

    start() {
      this.started = true;
      this.done = false;
      this._status = new Array(3).fill(false);
      this.audio.play('drag');
    }

    checkStatus(f, s) {
      const idx = this.faces.indexOf(f);
      this._status[idx] = s;

      const done = this._status.every(s => s);

      if (done) {
        this.audio.play('win');
        setTimeout(() => this.done = done, 2000);
      }
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "audio", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "started", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "done", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "start", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "start"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "checkStatus", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "checkStatus"), _class.prototype)), _class));
  _exports.default = Cube;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Cube);
});
;define("emberapp/components/cube_face", ["exports", "@glimmer/component", "@shopify/draggable"], function (_exports, _component, _draggable) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="face {{this.face}} {{if this.done 'done' ''}}" {{did-insert this.makeDraggable}} >
    {{#each this.tiles as |t|}}
      <Tile @tile={{t}} @size={{this.size}}/>
    {{/each}}
  </div>
  
  */
  {
    id: "PbVZjTF6",
    block: "{\"symbols\":[\"t\"],\"statements\":[[9,\"div\",false],[14,\"class\",[32,[\"face \",[27,[24,0],[\"face\"]],\" \",[31,33,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"done\"]],\"done\",\"\"],null]]],null],[3,0,0,[27,[26,1,\"ModifierHead\"],[]],[[27,[24,0],[\"makeDraggable\"]]],null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,3,\"BlockHead\"],[]],[[31,0,0,[27,[26,2,\"CallHead\"],[]],[[31,0,0,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"tiles\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"    \"],[7,\"tile\",[],[[\"@tile\",\"@size\"],[[27,[24,1],[]],[27,[24,0],[\"size\"]]]],null],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"if\",\"did-insert\",\"-track-array\",\"each\"]}",
    meta: {
      moduleName: "emberapp/components/cube_face.hbs"
    }
  });

  let CounterComponent = (_dec = Ember.inject.service('audio'), (_class = (_temp = class CounterComponent extends _component.default {
    constructor() {
      super(...arguments); //create tiles based on size

      _initializerDefineProperty(this, "audio", _descriptor, this);

      _initializerDefineProperty(this, "done", _descriptor2, this);

      this.size = this.args.size;
      this.face = this.args.face;
      const s = this.size;
      this.tiles = new Array(s * s).fill(0).map((t, i) => {
        return {
          pos: i,
          row: Math.floor(i / s),
          col: i % s
        };
      }); //shuffle

      while (this.tiles.any((e, i) => e.pos === i)) this.tiles = this.tiles.map(n => [Math.random(), n]).sort().map(n => n[1]);
    }

    makeDraggable(el) {
      const swappable = new _draggable.Swappable(el, {
        draggable: '.draggable',
        mirror: {
          appendTo: 'body',
          constrainDimensions: true
        },
        classes: {
          mirror: `mirror-${this.face}`
        }
      });
      swappable.on('drag:start', ev => {
        this.audio.play('drag');
      });
      swappable.on('drag:over', ev => {
        this.audio.play('dragEnter');
      });
      swappable.on('drag:stop', ev => {
        this.done = [...el.querySelectorAll('.draggable:not(.draggable--original)')].every((e, i) => e.tabIndex === i);
        this.args.checkStatus(this.face, this.done);
        this.audio.play('drop');
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "audio", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "done", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "makeDraggable", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "makeDraggable"), _class.prototype)), _class));
  _exports.default = CounterComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, CounterComponent);
});
;define("emberapp/components/tile", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="draggable" tabindex={{this.tabindex}} style="{{this.tileStyle}}"><div class="content"></div></div>
  
  */
  {
    id: "ULT+Nk/s",
    block: "{\"symbols\":[],\"statements\":[[9,\"div\",true],[12,\"class\",\"draggable\",null],[13,\"tabindex\",[27,[24,0],[\"tabindex\"]],null],[13,\"style\",[27,[24,0],[\"tileStyle\"]],null],[10],[9,\"div\",true],[12,\"class\",\"content\",null],[10],[11],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    meta: {
      moduleName: "emberapp/components/tile.hbs"
    }
  });

  class Tile extends _component.default {
    get tabindex() {
      return this.args.tile.pos;
    }

    get tileStyle() {
      const t = this.args.tile;
      const s = this.args.size;
      return Ember.String.htmlSafe(`--row:${t.row};--col:${t.col};--size:${s}`);
    }

  }

  _exports.default = Tile;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Tile);
});
;define("emberapp/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("emberapp/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("emberapp/helpers/app-version", ["exports", "emberapp/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("emberapp/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("emberapp/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("emberapp/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "emberapp/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("emberapp/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("emberapp/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("emberapp/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("emberapp/initializers/export-application-global", ["exports", "emberapp/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("emberapp/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("emberapp/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("emberapp/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("emberapp/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("emberapp/router", ["exports", "emberapp/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("emberapp/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("emberapp/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("emberapp/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("emberapp/services/audio", ["exports", "howler"], function (_exports, _howler) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  //sounds
  const sounds = {
    busy: false,
    drag: new _howler.Howl({
      src: ['./audio/cube-down.mp3'],
      volume: 0.4
    }),
    dragEnter: new _howler.Howl({
      src: ['./audio/cube-up.mp3']
    }),
    drop: new _howler.Howl({
      src: ['./audio/animation-down-1.mp3']
    }),
    win: new _howler.Howl({
      src: ['./audio/win.mp3']
    })
  };

  class AudioService extends Ember.Service {
    // play sound wrapper
    play(s) {
      if (!sounds.busy) {
        sounds.busy = true;
        sounds[s].play(); // prevent double trigger with a short timeout

        setTimeout(() => sounds.busy = false, 50);
      }
    }

  }

  _exports.default = AudioService;
});
;define("emberapp/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("emberapp/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "IeBMYhMx",
    "block": "{\"symbols\":[],\"statements\":[[7,\"cube\",[],[[\"@size\"],[\"2\"]],null],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "emberapp/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("emberapp/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("emberapp/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("emberapp/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("emberapp/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('emberapp/config/environment', [], function() {
  var prefix = 'emberapp';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("emberapp/app")["default"].create({"name":"emberapp","version":"0.0.0+eb9c9c70"});
          }
        
//# sourceMappingURL=emberapp.map

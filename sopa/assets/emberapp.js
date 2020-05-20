'use strict';



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
;define("emberapp/components/game", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#unless this.started}}
    <div class="splash" {{on 'click' this.start}} >
      <img src="./svg/intro.svg" />
      <h3>SOPA DE LETRAS</h3>
      <p>¡ABAJO LOS ESTEREOTIPOS! ¡ARRIBA LA IGUALDAD!</p>
      <p>TOCÁ LA PANTALLA PARA COMENZAR</p>
    </div>
  {{else}}
    {{#if this.done}}
      <div class="splash" {{on 'click' this.start}} >
        <img src="./svg/end.svg" />
        <h3>¡MUY BIEN!</h3>
        <p>TOCÁ LA PANTALLA PARA VOLVER A JUGAR</p>
      </div>
    {{else}}
      <div class="canvas" {{on 'pointermove' this.mouseMove}} {{on 'pointerup' this.mouseUp}} >
        <div class="puzzle" {{on 'pointerdown' this.mouseDown}} >
          {{#each this.puzzle as |row|}}
            <div class="row">
              {{#each row as |cell|}}
                <div class="cell">
                  <svg viewBox="0 0 10 10">
                    <text x="5" y="8">{{filterAcute cell}}</text>
                  </svg>
                </div>
              {{/each}}
            </div>
          {{/each}}
          <div class="marker" {{marker this.startPos this.markerDir this.markerLength this.cellSize }}></div>
          {{#each this.foundWords as |m|}}
            <div class="marker" {{marker m.start m.markerDir m.markerLength this.cellSize }}></div>
          {{/each}}
        </div>
        <div class="words">
          {{#each this.words as |w|}}
            <span class={{word this.foundWords w}}>{{w}}</span>
          {{/each}}
        </div>
        {{#if this.cellSize}}
          <button class="solve" {{on 'click' this.solve}} >RESOLVER</button>
        {{/if}}
      </div>
    {{/if}}
  {{/unless}}
  
  
  */
  {
    id: "bm7a1RZJ",
    block: "{\"symbols\":[\"w\",\"m\",\"row\",\"cell\"],\"statements\":[[5,[27,[26,7,\"BlockHead\"],[]],[[27,[24,0],[\"started\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"  \"],[9,\"div\",false],[23,\"class\",\"splash\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"click\",[27,[24,0],[\"start\"]]],null],[10],[1,1,0,0,\"\\n    \"],[9,\"img\",true],[12,\"src\",\"./svg/intro.svg\",null],[10],[11],[1,1,0,0,\"\\n    \"],[9,\"h3\",true],[10],[1,1,0,0,\"SOPA DE LETRAS\"],[11],[1,1,0,0,\"\\n    \"],[9,\"p\",true],[10],[1,1,0,0,\"\xA1ABAJO LOS ESTEREOTIPOS! \xA1ARRIBA LA IGUALDAD!\"],[11],[1,1,0,0,\"\\n    \"],[9,\"p\",true],[10],[1,1,0,0,\"TOC\xC1 LA PANTALLA PARA COMENZAR\"],[11],[1,1,0,0,\"\\n  \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[5,[27,[26,6,\"BlockHead\"],[]],[[27,[24,0],[\"done\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"div\",false],[23,\"class\",\"splash\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"click\",[27,[24,0],[\"start\"]]],null],[10],[1,1,0,0,\"\\n      \"],[9,\"img\",true],[12,\"src\",\"./svg/end.svg\",null],[10],[11],[1,1,0,0,\"\\n      \"],[9,\"h3\",true],[10],[1,1,0,0,\"\xA1MUY BIEN!\"],[11],[1,1,0,0,\"\\n      \"],[9,\"p\",true],[10],[1,1,0,0,\"TOC\xC1 LA PANTALLA PARA VOLVER A JUGAR\"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"    \"],[9,\"div\",false],[23,\"class\",\"canvas\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"pointermove\",[27,[24,0],[\"mouseMove\"]]],null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"pointerup\",[27,[24,0],[\"mouseUp\"]]],null],[10],[1,1,0,0,\"\\n      \"],[9,\"div\",false],[23,\"class\",\"puzzle\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"pointerdown\",[27,[24,0],[\"mouseDown\"]]],null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,5,\"BlockHead\"],[]],[[31,0,0,[27,[26,4,\"CallHead\"],[]],[[31,0,0,[27,[26,4,\"CallHead\"],[]],[[27,[24,0],[\"puzzle\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"          \"],[9,\"div\",true],[12,\"class\",\"row\",null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,5,\"BlockHead\"],[]],[[31,0,0,[27,[26,4,\"CallHead\"],[]],[[31,0,0,[27,[26,4,\"CallHead\"],[]],[[27,[24,3],[]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"              \"],[9,\"div\",true],[12,\"class\",\"cell\",null],[10],[1,1,0,0,\"\\n                \"],[9,\"svg\",true],[12,\"viewBox\",\"0 0 10 10\",null],[10],[1,1,0,0,\"\\n                  \"],[9,\"text\",true],[12,\"x\",\"5\",null],[12,\"y\",\"8\",null],[10],[1,0,0,0,[31,832,11,[27,[26,3,\"CallHead\"],[]],[[27,[24,4],[]]],null]],[11],[1,1,0,0,\"\\n                \"],[11],[1,1,0,0,\"\\n              \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[4]}]]],[1,1,0,0,\"          \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[3]}]]],[1,1,0,0,\"        \"],[9,\"div\",false],[23,\"class\",\"marker\",null],[3,0,0,[27,[26,2,\"ModifierHead\"],[]],[[27,[24,0],[\"startPos\"]],[27,[24,0],[\"markerDir\"]],[27,[24,0],[\"markerLength\"]],[27,[24,0],[\"cellSize\"]]],null],[10],[11],[1,1,0,0,\"\\n\"],[5,[27,[26,5,\"BlockHead\"],[]],[[31,0,0,[27,[26,4,\"CallHead\"],[]],[[31,0,0,[27,[26,4,\"CallHead\"],[]],[[27,[24,0],[\"foundWords\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"          \"],[9,\"div\",false],[23,\"class\",\"marker\",null],[3,0,0,[27,[26,2,\"ModifierHead\"],[]],[[27,[24,2],[\"start\"]],[27,[24,2],[\"markerDir\"]],[27,[24,2],[\"markerLength\"]],[27,[24,0],[\"cellSize\"]]],null],[10],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[2]}]]],[1,1,0,0,\"      \"],[11],[1,1,0,0,\"\\n      \"],[9,\"div\",true],[12,\"class\",\"words\",null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,5,\"BlockHead\"],[]],[[31,0,0,[27,[26,4,\"CallHead\"],[]],[[31,0,0,[27,[26,4,\"CallHead\"],[]],[[27,[24,0],[\"words\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"          \"],[9,\"span\",true],[13,\"class\",[31,1323,4,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[\"foundWords\"]],[27,[24,1],[]]],null],null],[10],[1,0,0,0,[27,[24,1],[]]],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]],[1,1,0,0,\"      \"],[11],[1,1,0,0,\"\\n\"],[5,[27,[26,6,\"BlockHead\"],[]],[[27,[24,0],[\"cellSize\"]]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"        \"],[9,\"button\",false],[23,\"class\",\"solve\",null],[3,0,0,[27,[26,0,\"ModifierHead\"],[]],[\"click\",[27,[24,0],[\"solve\"]]],null],[10],[1,1,0,0,\"RESOLVER\"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"on\",\"word\",\"marker\",\"filterAcute\",\"-track-array\",\"each\",\"if\",\"unless\"]}",
    meta: {
      moduleName: "emberapp/components/game.hbs"
    }
  });

  let Game = (_dec = Ember.inject.service('audio'), (_class = (_temp = class Game extends _component.default {
    constructor() {
      super(...arguments); //disable context menu

      _initializerDefineProperty(this, "audio", _descriptor, this);

      _initializerDefineProperty(this, "started", _descriptor2, this);

      _initializerDefineProperty(this, "done", _descriptor3, this);

      _initializerDefineProperty(this, "startPos", _descriptor4, this);

      _initializerDefineProperty(this, "markerDir", _descriptor5, this);

      _initializerDefineProperty(this, "markerLength", _descriptor6, this);

      _initializerDefineProperty(this, "cellSize", _descriptor7, this);

      _initializerDefineProperty(this, "puzzle", _descriptor8, this);

      _defineProperty(this, "marking", false);

      _initializerDefineProperty(this, "foundWords", _descriptor9, this);

      _defineProperty(this, "words", ['derechos', 'mujeres', 'oportunidades', 'igualdad', 'discriminar', 'género', 'estereotipos']);

      document.oncontextmenu = ev => {
        ev.preventDefault();
      };
    }

    start() {
      this.started = true;
      this.done = false;
      const settings = {
        orientations: ['horizontal', 'vertical', 'diagonal']
      };
      this.puzzle = wordfind.newPuzzle(this.words, settings);
      this.foundWords = [];
    }

    solve() {
      const solution = wordfind.solve(this.puzzle, this.words);
      let foundWords = [];
      solution.found.forEach(w => {
        const dir = {
          'horizontal': 0,
          'diagonal': 1,
          'vertical': 2
        }[w.orientation];
        foundWords.push({
          word: w.word,
          start: {
            i: w.x,
            j: w.y
          },
          markerDir: dir,
          markerLength: w.overlap
        });
      });
      this.foundWords = foundWords;
      setTimeout(() => this.done = true, 5000);
    }

    getIJ(ev) {
      const p = this.puzzleEl;
      const x = ev.x - p.offsetLeft;
      const y = ev.y - p.offsetTop;
      const w = p.clientWidth;
      const l = this.puzzle.length;
      this.cellSize = w / l;
      const i = Math.floor(x / w * l);
      const j = Math.floor(y / w * l); //clamp i and j

      return [Math.max(0, Math.min(i, l - 1)), Math.max(0, Math.min(j, l - 1))];
    }

    mouseDown(ev) {
      if (this.done) {
        this.start();
      } else {
        this.audio.play('down');
        this.puzzleEl = ev.target.closest('.puzzle');
        const [i, j] = this.getIJ(ev);
        this.startPos = {
          i: i,
          j: j
        };
        this.marking = true;
      }
    }

    mouseMove(ev) {
      if (this.marking) {
        const [i, j] = this.getIJ(ev);
        const s = this.startPos;
        const di = i - s.i;
        const dj = j - s.j; // calculate direction, clamping the angle between di and dj

        this.markerDir = Math.round(Math.atan2(dj, di) / (Math.PI / 4));
        const diag = Math.abs(this.markerDir) % 2; // calculate length of marker

        this.markerLength = (diag ? Math.min : Math.max)(Math.abs(di), Math.abs(dj)) + 1;
      }
    }

    mouseUp(ev) {
      if (this.marking) {
        this.audio.play('up');
        const s = this.startPos;
        let l = this.markerLength;
        let i = s.i,
            j = s.j;
        let word = '';

        while (l--) {
          word += this.puzzle[j][i];

          switch (this.markerDir) {
            case 0:
              i++;
              break;

            case 1:
              i++;
              j++;
              break;

            case 2:
              j++;
              break;

            case 3:
              i--;
              j++;
              break;

            case 4:
              i--;
              break;

            case -3:
              i--;
              j--;
              break;

            case -2:
              j--;
              break;

            case -1:
              i++;
              j--;
              break;
          }
        }

        this.checkWord(word);
        this.startPos = null;
        this.markerDir = 0;
        this.markerLength = 0;
        this.marking = false;
      }
    }

    checkWord(w) {
      [w, w.split('').reverse().join('')].forEach(word => {
        if (this.words.any(w => w === word)) {
          if (!this.foundWords.any(m => m.word === word)) {
            this.foundWords = [...this.foundWords, {
              word,
              start: this.startPos,
              markerDir: this.markerDir,
              markerLength: this.markerLength
            }];

            if (this.foundWords.length === this.words.length) {
              this.audio.play('win');
              setTimeout(() => this.done = true, 2000);
            }
          }
        }
      });
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
    initializer: function () {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "startPos", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "markerDir", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "markerLength", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "cellSize", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "puzzle", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "foundWords", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "start", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "start"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "solve", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "solve"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "mouseDown", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "mouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "mouseMove", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "mouseMove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "mouseUp", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "mouseUp"), _class.prototype)), _class));
  _exports.default = Game;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Game);
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
;define("emberapp/helpers/filterAcute", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function word(params
  /*, hash*/
  ) {
    // only é for this case is needed
    return params[0].replace('é', 'e');
  });

  _exports.default = _default;
});
;define("emberapp/helpers/word", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function word(params
  /*, hash*/
  ) {
    return params[0].any(m => m.word === params[1]) ? 'found' : '';
  });

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
;define("emberapp/modifiers/marker", ["exports", "ember-modifier"], function (_exports, _emberModifier) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _emberModifier.modifier)((element, params, hash) => {
    const a = params[0]; // get direction

    const d = params[1]; // get length of marker

    const l = params[2];
    const s = params[3];
    const diag = Math.abs(d) % 2; //calculate width of marker

    const w = (diag ? Math.sqrt(2 * l * l) - 0.3 : l) * s;
    element.setAttribute('style', !a ? '' : `top: ${s * a.j}px; left: ${s * a.i}px;height:${s}px;width:${w}px;transform:rotate(${d * 45}deg);transform-origin:${s / 2}px;`);
  });

  _exports.default = _default;
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
;define("emberapp/services/audio", ["exports", "howler"], function (_exports, _howler) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  //sounds
  const sounds = {
    busy: false,
    down: new _howler.Howl({
      src: ['./audio/down.mp3'],
      volume: 0.4
    }),
    up: new _howler.Howl({
      src: ['./audio/up.mp3']
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
      return;

      if (!sounds.busy) {
        sounds.busy = true;
        sounds[s].play(); // prevent double trigger with a short timeout

        setTimeout(() => sounds.busy = false, 50);
      }
    }

  }

  _exports.default = AudioService;
});
;define("emberapp/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "fosBydN+",
    "block": "{\"symbols\":[],\"statements\":[[9,\"div\",true],[12,\"id\",\"canvas\",null],[10],[1,1,0,0,\"\\n  \"],[7,\"game\",[],[[],[]],null],[1,1,0,0,\"\\n\"],[11],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "emberapp/templates/application.hbs"
    }
  });

  _exports.default = _default;
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
            require("emberapp/app")["default"].create({"name":"emberapp","version":"0.0.0+fd72926c"});
          }
        
//# sourceMappingURL=emberapp.map

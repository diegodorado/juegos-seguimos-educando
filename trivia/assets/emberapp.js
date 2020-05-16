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

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{#unless started}}
    {{#if (eq index 0)}}
      <div class="splash" {{on 'click' next}} >
        <img src="./svg/intro.svg" />
        <h3>Derechos Civiles y Políticos</h3>
        <p>¿Cuánto sabemos de la historia de nuestros derechos?</p>
        <p>TOCA LA PANTALLA PARA COMENZAR</p>
      </div>
    {{/if}}
    {{#if (eq index 1)}}
      <div class="splash" {{on 'click' next}} >
        <p class="text">
          Este test nos permitirá poner a prueba cuánto sabemos acerca de la historia del marco legal que regula la Argentina en relación a los derechos de las mujeres.
          <br/>
          <br/>
          Conocerlos tiene que ver con entender la importancia del orden constitucional y la vida democrática, e implica saber defender los derechos humanos y respetar la propia identidad y la de los otros.
        </p>
        <img style="width:40%" src="./svg/next.svg" />
      </div>
    {{/if}}
    {{#if (eq index 2)}}
      <div class="splash" {{on 'click' next}} >
        <p class="text">
          Seleccionen la respuesta correcta. Cuando lo hayan hecho, podrán ver algunas aclaraciones sobre cada ley y derecho.
          <br/>
          <br/>
          Si prestan atención notarán cómo ha sido la evolución del reconocimiento de algunos derechos de las mujeres, quienes históricamente han estado en desventaja respecto de los varones, y de otros derechos vinculados a las familias.
        </p>
        <img style="width:40%" src="./svg/next.svg" />
      </div>
    {{/if}}
  {{else}}
    {{#if done}}
      <div class="splash" {{on 'click' start}} >
        <img src="./svg/end.svg" />
        <h3>¡Terminaste!</h3>
        <p>TOCA LA PANTALLA PARA VOLVER A JUGAR</p>
      </div>
    {{else}}
      {{#if showText}}
        <div class="splash" {{on 'click' next}} >
          <p class="text">{{current.text}}</p>
          <img style="width:40%" src="./svg/next.svg" />
        </div>
      {{else}}
        <div class="question {{if answered 'answered' ''}}">
          <h4>{{current.question}}</h4>
          <div class="answers">
            {{#each current.answers as |a|}}
              <span class="{{if (eq a guess) 'guess' ''}} {{if (eq a current.answer) 'correct' ''}}" {{on 'click' (fn answer a)}}>{{a}}</span>
            {{/each}}
          </div>
        </div>
      {{/if}}
    {{/if}}
  {{/unless}}
  
  
  */
  {
    id: "sl5snxh0",
    block: "{\"symbols\":[\"a\"],\"statements\":[[5,[27,[26,16,\"BlockHead\"],[]],[[27,[26,15,\"Expression\"],[]]],null,[[\"default\",\"else\"],[{\"statements\":[[5,[27,[26,2,\"BlockHead\"],[]],[[31,29,2,[27,[26,1,\"CallHead\"],[]],[[27,[26,14,\"Expression\"],[]],0],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"div\",false],[23,\"class\",\"splash\",null],[3,0,0,[27,[26,6,\"ModifierHead\"],[]],[\"click\",[27,[26,10,\"Expression\"],[]]],null],[10],[1,1,0,0,\"\\n      \"],[9,\"img\",true],[12,\"src\",\"./svg/intro.svg\",null],[10],[11],[1,1,0,0,\"\\n      \"],[9,\"h3\",true],[10],[1,1,0,0,\"Derechos Civiles y Pol\xEDticos\"],[11],[1,1,0,0,\"\\n      \"],[9,\"p\",true],[10],[1,1,0,0,\"\xBFCu\xE1nto sabemos de la historia de nuestros derechos?\"],[11],[1,1,0,0,\"\\n      \"],[9,\"p\",true],[10],[1,1,0,0,\"TOCA LA PANTALLA PARA COMENZAR\"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[5,[27,[26,2,\"BlockHead\"],[]],[[31,309,2,[27,[26,1,\"CallHead\"],[]],[[27,[26,14,\"Expression\"],[]],1],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"div\",false],[23,\"class\",\"splash\",null],[3,0,0,[27,[26,6,\"ModifierHead\"],[]],[\"click\",[27,[26,10,\"Expression\"],[]]],null],[10],[1,1,0,0,\"\\n      \"],[9,\"p\",true],[12,\"class\",\"text\",null],[10],[1,1,0,0,\"\\n        Este test nos permitir\xE1 poner a prueba cu\xE1nto sabemos acerca de la historia del marco legal que regula la Argentina en relaci\xF3n a los derechos de las mujeres.\\n        \"],[9,\"br\",true],[10],[11],[1,1,0,0,\"\\n        \"],[9,\"br\",true],[10],[11],[1,1,0,0,\"\\n        Conocerlos tiene que ver con entender la importancia del orden constitucional y la vida democr\xE1tica, e implica saber defender los derechos humanos y respetar la propia identidad y la de los otros.\\n      \"],[11],[1,1,0,0,\"\\n      \"],[9,\"img\",true],[12,\"style\",\"width:40%\",null],[12,\"src\",\"./svg/next.svg\",null],[10],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]],[5,[27,[26,2,\"BlockHead\"],[]],[[31,886,2,[27,[26,1,\"CallHead\"],[]],[[27,[26,14,\"Expression\"],[]],2],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"div\",false],[23,\"class\",\"splash\",null],[3,0,0,[27,[26,6,\"ModifierHead\"],[]],[\"click\",[27,[26,10,\"Expression\"],[]]],null],[10],[1,1,0,0,\"\\n      \"],[9,\"p\",true],[12,\"class\",\"text\",null],[10],[1,1,0,0,\"\\n        Seleccionen la respuesta correcta. Cuando lo hayan hecho, podr\xE1n ver algunas aclaraciones sobre cada ley y derecho.\\n        \"],[9,\"br\",true],[10],[11],[1,1,0,0,\"\\n        \"],[9,\"br\",true],[10],[11],[1,1,0,0,\"\\n        Si prestan atenci\xF3n notar\xE1n c\xF3mo ha sido la evoluci\xF3n del reconocimiento de algunos derechos de las mujeres, quienes hist\xF3ricamente han estado en desventaja respecto de los varones, y de otros derechos vinculados a las familias.\\n      \"],[11],[1,1,0,0,\"\\n      \"],[9,\"img\",true],[12,\"style\",\"width:40%\",null],[12,\"src\",\"./svg/next.svg\",null],[10],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]},{\"statements\":[[5,[27,[26,2,\"BlockHead\"],[]],[[27,[26,13,\"Expression\"],[]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"div\",false],[23,\"class\",\"splash\",null],[3,0,0,[27,[26,6,\"ModifierHead\"],[]],[\"click\",[27,[26,12,\"Expression\"],[]]],null],[10],[1,1,0,0,\"\\n      \"],[9,\"img\",true],[12,\"src\",\"./svg/end.svg\",null],[10],[11],[1,1,0,0,\"\\n      \"],[9,\"h3\",true],[10],[1,1,0,0,\"\xA1Terminaste!\"],[11],[1,1,0,0,\"\\n      \"],[9,\"p\",true],[10],[1,1,0,0,\"TOCA LA PANTALLA PARA VOLVER A JUGAR\"],[11],[1,1,0,0,\"\\n    \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[5,[27,[26,2,\"BlockHead\"],[]],[[27,[26,11,\"Expression\"],[]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"      \"],[9,\"div\",false],[23,\"class\",\"splash\",null],[3,0,0,[27,[26,6,\"ModifierHead\"],[]],[\"click\",[27,[26,10,\"Expression\"],[]]],null],[10],[1,1,0,0,\"\\n        \"],[9,\"p\",true],[12,\"class\",\"text\",null],[10],[1,0,0,0,[27,[26,0,\"Expression\"],[\"text\"]]],[11],[1,1,0,0,\"\\n        \"],[9,\"img\",true],[12,\"style\",\"width:40%\",null],[12,\"src\",\"./svg/next.svg\",null],[10],[11],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"      \"],[9,\"div\",true],[13,\"class\",[32,[\"question \",[31,1872,2,[27,[26,2,\"CallHead\"],[]],[[27,[26,7,\"Expression\"],[]],\"answered\",\"\"],null]]],null],[10],[1,1,0,0,\"\\n        \"],[9,\"h4\",true],[10],[1,0,0,0,[27,[26,0,\"Expression\"],[\"question\"]]],[11],[1,1,0,0,\"\\n        \"],[9,\"div\",true],[12,\"class\",\"answers\",null],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,9,\"BlockHead\"],[]],[[31,0,0,[27,[26,8,\"CallHead\"],[]],[[31,0,0,[27,[26,8,\"CallHead\"],[]],[[27,[26,0,\"Expression\"],[\"answers\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"            \"],[9,\"span\",false],[14,\"class\",[32,[[31,2040,2,[27,[26,2,\"CallHead\"],[]],[[31,2044,2,[27,[26,1,\"CallHead\"],[]],[[27,[24,1],[]],[27,[26,3,\"Expression\"],[]]],null],\"guess\",\"\"],null],\" \",[31,2071,2,[27,[26,2,\"CallHead\"],[]],[[31,2075,2,[27,[26,1,\"CallHead\"],[]],[[27,[24,1],[]],[27,[26,0,\"Expression\"],[\"answer\"]]],null],\"correct\",\"\"],null]]],null],[3,0,0,[27,[26,6,\"ModifierHead\"],[]],[\"click\",[31,2126,2,[27,[26,5,\"CallHead\"],[]],[[27,[26,4,\"Expression\"],[]],[27,[24,1],[]]],null]],null],[10],[1,0,0,0,[27,[24,1],[]]],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[1]}]]],[1,1,0,0,\"        \"],[11],[1,1,0,0,\"\\n      \"],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[1,1,0,0,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"current\",\"eq\",\"if\",\"guess\",\"answer\",\"fn\",\"on\",\"answered\",\"-track-array\",\"each\",\"next\",\"showText\",\"start\",\"done\",\"index\",\"started\",\"unless\"]}",
    meta: {
      moduleName: "emberapp/components/game.hbs"
    }
  });

  const trivia = [{
    question: "En Argentina, ¿a partir de qué año las mujeres pudieron empezar a administrar sus herencias y bienes personales, dejando de depender jurídicamente de un varón, sea éste su padre, esposo o hermano?",
    answers: [1926, 1912, 1983],
    text: "En Argentina, una de las primeras leyes orientada a favorecer a las mujeres fue la Ley de Ampliación de la Capacidad Civil de la Mujer, promulgada en 1926. Se necesitó de esta norma llegar para considerar a las mujeres como personas jurídicas. Esto las habilitaba a iniciar pleitos y a administrar herencias y bienes personales sin autorización de un varón. Además generaba el marco legal para que las mujeres pudieran estudiar y ejercer una profesión.",
    links: ["http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=232934"]
  }, {
    question: "¿En qué año se sancionó la Ley 26.150, de Educación Sexual Integral (ESI) en Argentina?",
    answers: [2006, 2009, 2018],
    text: "La Ley 26.150 se sancionó en 2006 y establece como derecho el acceso al conocimiento científico de todos y todas las estudiantes sobre sexualidad desde una dimensión integral. En 2008 se establecieron los lineamientos curriculares de ESI. En 2018 el Consejo Federal de Educación firmó la Resolución 340/18 de aprobación e implementación de Núcleos de Aprendizaje Prioritarios para Educación Sexual Integral",
    links: ["https://www.argentina.gob.ar/sites/default/files/ley26150.pdf", "https://www.argentina.gob.ar/sites/default/files/esi-lineamientos_2018-_web.pdf", "https://www.argentina.gob.ar/sites/default/files/res_cfe_340_18_0.pdf"]
  }, {
    question: "En Argentina, ¿desde qué año la cantidad de candidatas mujeres y varones debe ser equitativa en las elecciones legislativas nacionales?",
    answers: [2017, 1991, 2007],
    text: "En el año 2017 se sancionó la Ley 27.412 de Paridad de Género, la cual establece que las listas de candidaturas a cargos legislativos nacionales deben ser realizadas ubicando de manera intercalada a mujeres y varones desde el/la primer/a candidato/a titular hasta el/la último/a candidato/a suplente. En el año 1991 se había sancionado la Ley 24.012, de Cupo Legislativo. Esta establecía la obligatoriedad de que al menos el 30% de las listas de candidatos/as y los cargos (de ser electos/as) fueran ocupadas por mujeres.",
    links: ["http://servicios.infoleg.gob.ar/infolegInternet/anexos/300000-304999/304794/norma.htm", "http://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/411/norma.htm"]
  }, {
    question: "¿En qué año se sancionó en Argentina la Ley de Identidad de Género?",
    answers: [2012, 1966, 1969],
    text: "La Ley 26.743 se sancionó en 2012 y establece el derecho a la identidad de género de las personas. En 1969 se sanciona la Ley 18.248, de Nombre, la cual si bien ha tenido modificaciones a lo largo de los años.",
    links: ["https://www.argentina.gob.ar/sites/default/files/ley-26.743-identidad-de-genero_0.pdf"]
  }, {
    question: "En Argentina, ¿a partir de qué año es legal el matrimonio entre las personas con independencia de su sexo?",
    answers: [2015, 2002, 2010],
    text: "La Ley 26.618, de Matrimonio igualitario se sancionó en el año 2010. En 2002 se había sancionado en la Ciudad Autónoma de Buenos Aires la Ley 1.004 de Unión Civil.",
    links: ["https://www.argentina.gob.ar/sites/default/files/ury93484_0.pdf", "https://www.buenosaires.gob.ar/registro-civil/normativa/ley-no-1004"]
  }, {
    question: "¿En qué año se sancionó en Argentina la Ley que garantiza la distribución gratuita de métodos anticonceptivos en el sistema de salud público?",
    answers: [2003, 1986, 2014],
    text: "La Ley 25.673, de Salud Sexual y Procreación Responsable se sancionó en el año 2003. Previamente, en la década de los años ‘60 el uso de las pastillas anticonceptivas como método de planificación familiar estaba obstaculizada por una serie de resoluciones y recién con la llegada de la democracia en 1983 comenzó a facilitarse su uso.",
    links: ["https://www.argentina.gob.ar/sites/default/files/ley_25673_ssr_1.pdf"]
  }, {
    question: "¿A partir de qué año es legal el divorcio en Argentina?",
    answers: [1987, 1926, 1983],
    text: "El divorcio –y por ende la posibilidad de volver a casarse- no fue legal en Argentina hasta la sanción de la Ley 23.515, de Divorcio Vincular, en el año 1987.",
    links: ["http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=21776"]
  }, {
    question: "En Argentina, ¿a partir de qué año se les reconoció a las mujeres el derecho a votar?",
    answers: [1947, 1912, 1951],
    text: "La Ley Sáenz Peña de 1912 (Ley 8.871) universalizó el voto, pero sólo para los varones. Las mujeres aun no podían votar. Recién en 1947 se promulgó la Ley 13.010, que habilitó el sufragio femenino, pero votaron por primera vez en el año 1951, ya que antes de esa fecha no hubo elecciones.",
    links: ["http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do;jsessionid=9DDD83BFE3E77C32B0CBBFB301155670?id=310143", "http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=47353"]
  }];

  const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
  };

  let Game = (_dec = Ember.inject.service('audio'), (_class = (_temp = class Game extends _component.default {
    constructor() {
      super(...arguments); //preload svg

      _initializerDefineProperty(this, "audio", _descriptor, this);

      _initializerDefineProperty(this, "trivia", _descriptor2, this);

      _initializerDefineProperty(this, "started", _descriptor3, this);

      _initializerDefineProperty(this, "done", _descriptor4, this);

      _initializerDefineProperty(this, "index", _descriptor5, this);

      _initializerDefineProperty(this, "guess", _descriptor6, this);

      _initializerDefineProperty(this, "answered", _descriptor7, this);

      _initializerDefineProperty(this, "showText", _descriptor8, this);

      const svgs = ['intro', 'next', 'end'];
      svgs.forEach(s => new Image().src = `svg/${s}.svg`);
    }

    start() {
      //shuffle everything
      this.trivia = shuffle(trivia).map(qq => {
        const q = Object.assign({}, qq);
        q.answer = q.answers[0];
        q.answers = shuffle(q.answers);
        return q;
      });
      this.index = 0;
      this.started = true;
      this.done = false;
      this.answered = false;
      this.showText = false; //this.audio.play('drag')
    }

    answer(a) {
      if (!this.answered) {
        this.guess = a;
        this.answered = true;
        setTimeout(() => {
          this.showText = true;
          this.answered = false;
          this.guess = 0;
        }, 2000);
      }
    }

    next() {
      if (this.started) {
        this.showText = false;
        if (this.index === this.trivia.length - 1) this.done = true;
      } else {
        if (this.index === 2) this.start();
      }

      this.index++;
    }

    get current() {
      return this.trivia[this.index];
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "audio", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "trivia", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "started", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "done", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "index", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "guess", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "answered", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "showText", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "start", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "start"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "answer", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "answer"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "next", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "next"), _class.prototype)), _class));
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
;define("emberapp/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
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
;define("emberapp/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("emberapp/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("emberapp/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("emberapp/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("emberapp/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("emberapp/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("emberapp/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("emberapp/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("emberapp/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define("emberapp/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("emberapp/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("emberapp/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
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
            require("emberapp/app")["default"].create({"name":"emberapp","version":"0.0.0+ba8cbd17"});
          }
        
//# sourceMappingURL=emberapp.map

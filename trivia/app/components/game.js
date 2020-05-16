import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';


const trivia = [
  {
    question:"En Argentina, ¿a partir de qué año las mujeres pudieron empezar a administrar sus herencias y bienes personales, dejando de depender jurídicamente de un varón, sea éste su padre, esposo o hermano?",
    answers:[1926,1912,1983],
    text:"En Argentina, una de las primeras leyes orientada a favorecer a las mujeres fue la Ley de Ampliación de la Capacidad Civil de la Mujer, promulgada en 1926. Se necesitó de esta norma llegar para considerar a las mujeres como personas jurídicas. Esto las habilitaba a iniciar pleitos y a administrar herencias y bienes personales sin autorización de un varón. Además generaba el marco legal para que las mujeres pudieran estudiar y ejercer una profesión.",
    links:["http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=232934"]
  },
  {
    question:"¿En qué año se sancionó la Ley 26.150, de Educación Sexual Integral (ESI) en Argentina?",
    answers:[2006,2009,2018],
    text:"La Ley 26.150 se sancionó en 2006 y establece como derecho el acceso al conocimiento científico de todos y todas las estudiantes sobre sexualidad desde una dimensión integral. En 2008 se establecieron los lineamientos curriculares de ESI. En 2018 el Consejo Federal de Educación firmó la Resolución 340/18 de aprobación e implementación de Núcleos de Aprendizaje Prioritarios para Educación Sexual Integral",
    links:["https://www.argentina.gob.ar/sites/default/files/ley26150.pdf","https://www.argentina.gob.ar/sites/default/files/esi-lineamientos_2018-_web.pdf","https://www.argentina.gob.ar/sites/default/files/res_cfe_340_18_0.pdf"]
  },
  {
    question:"En Argentina, ¿desde qué año la cantidad de candidatas mujeres y varones debe ser equitativa en las elecciones legislativas nacionales?",
    answers:[2017,1991,2007],
    text:"En el año 2017 se sancionó la Ley 27.412 de Paridad de Género, la cual establece que las listas de candidaturas a cargos legislativos nacionales deben ser realizadas ubicando de manera intercalada a mujeres y varones desde el/la primer/a candidato/a titular hasta el/la último/a candidato/a suplente. En el año 1991 se había sancionado la Ley 24.012, de Cupo Legislativo. Esta establecía la obligatoriedad de que al menos el 30% de las listas de candidatos/as y los cargos (de ser electos/as) fueran ocupadas por mujeres.",
    links:["http://servicios.infoleg.gob.ar/infolegInternet/anexos/300000-304999/304794/norma.htm","http://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/411/norma.htm"]
  },
  {
    question:"¿En qué año se sancionó en Argentina la Ley de Identidad de Género?",
    answers:[2012,1966,1969],
    text:"La Ley 26.743 se sancionó en 2012 y establece el derecho a la identidad de género de las personas. En 1969 se sanciona la Ley 18.248, de Nombre, la cual si bien ha tenido modificaciones a lo largo de los años.",
    links:["https://www.argentina.gob.ar/sites/default/files/ley-26.743-identidad-de-genero_0.pdf"]
  },
  {
    question:"En Argentina, ¿a partir de qué año es legal el matrimonio entre las personas con independencia de su sexo?",
    answers:[2015,2002,2010],
    text:"La Ley 26.618, de Matrimonio igualitario se sancionó en el año 2010. En 2002 se había sancionado en la Ciudad Autónoma de Buenos Aires la Ley 1.004 de Unión Civil.",
    links:["https://www.argentina.gob.ar/sites/default/files/ury93484_0.pdf","https://www.buenosaires.gob.ar/registro-civil/normativa/ley-no-1004"]
  },
  {
    question:"¿En qué año se sancionó en Argentina la Ley que garantiza la distribución gratuita de métodos anticonceptivos en el sistema de salud público?",
    answers:[2003,1986,2014],
    text:"La Ley 25.673, de Salud Sexual y Procreación Responsable se sancionó en el año 2003. Previamente, en la década de los años ‘60 el uso de las pastillas anticonceptivas como método de planificación familiar estaba obstaculizada por una serie de resoluciones y recién con la llegada de la democracia en 1983 comenzó a facilitarse su uso.",
    links:["https://www.argentina.gob.ar/sites/default/files/ley_25673_ssr_1.pdf"]
  },
  {
    question:"¿A partir de qué año es legal el divorcio en Argentina?",
    answers:[1987,1926,1983],
    text:"El divorcio –y por ende la posibilidad de volver a casarse- no fue legal en Argentina hasta la sanción de la Ley 23.515, de Divorcio Vincular, en el año 1987.",
    links:["http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=21776"]
  },
  {
    question:"En Argentina, ¿a partir de qué año se les reconoció a las mujeres el derecho a votar?",
    answers:[1947,1912,1951],
    text:"La Ley Sáenz Peña de 1912 (Ley 8.871) universalizó el voto, pero sólo para los varones. Las mujeres aun no podían votar. Recién en 1947 se promulgó la Ley 13.010, que habilitó el sufragio femenino, pero votaron por primera vez en el año 1951, ya que antes de esa fecha no hubo elecciones.",
    links:["http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do;jsessionid=9DDD83BFE3E77C32B0CBBFB301155670?id=310143","http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=47353"]
  }
]


const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


export default class Game  extends Component {

  @inject('audio') audio

  @tracked trivia
  @tracked started = false
  @tracked done = false
  @tracked index = 0
  @tracked guess = 0
  @tracked answered
  @tracked showText = false

  constructor() {
    super(...arguments)
    //preload svg
    const svgs = ['intro','next','end']
    svgs.forEach(s =>  (new Image()).src = `svg/${s}.svg`) 
  }

  @action
  start(){
    //shuffle everything
    this.trivia = shuffle(trivia).map(qq => {
      const q = Object.assign({}, qq)
      q.answer = q.answers[0]
      q.answers = shuffle(q.answers)
      return q
    })
    this.index = 0
    this.started = true
    this.done = false
    this.answered = false
    this.showText = false
    //this.audio.play('drag')
  }

  @action
  answer(a){
    if(!this.answered){
      this.guess = a
      this.answered = true

      setTimeout( () => {
        this.showText = true
        this.answered = false
        this.guess = 0
      }, 2000)
    }
  }
  
  @action
  next(){
    if(this.started){
      this.showText = false
      if(this.index===this.trivia.length-1)
        this.done = true
    }
    else{
      if(this.index===2)
        this.start()
    }
    this.index++
  }
  
  get current(){
    return this.trivia[this.index]
  }

}

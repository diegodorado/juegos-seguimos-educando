import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import {Swappable, Plugins} from '@shopify/draggable';

export default class Game  extends Component {

  @inject('audio') audio

  @tracked started = false
  @tracked done = false

  facts = ['El rey de España es apresado por Francia.',
           'Los ciudadanos no quieren obedecer a un rey preso.',
           'Los ciudadanos piden un Cabildo Abierto.',
           'El virrey acepta realizar el Cabildo Abierto.',
           'Se envían invitaciones para los participantes.',
           'Los ciudadanos debaten en el Cabildo Abierto.',
           'Se decide que el virrey deje de gobernar.',
           'Se forma la Junta de Gobierno.',
           'El pueblo festeja su libertad.']




  constructor() {
    super(...arguments)
    //preload svg
    //const svgs = [...this.emotions, 'intro','next','end']
    //svgs.forEach(s =>  (new Image()).src = `svg/${s}.svg`) 
  }

  @action
  start(){
    this.started = true
    this.done = false
    this.audio.play('drag')
  }

  @action
  onWin(){
    this.audio.play('win')
    setTimeout( () => {
      this.done = true
    }, 3000)
  }
  
}

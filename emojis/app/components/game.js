import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import {Swappable, Plugins} from '@shopify/draggable';

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


export default class Game  extends Component {

  @inject('audio') audio

  @tracked started = false
  @tracked guessed = false
  @tracked done = false
  @tracked index = 0
  @tracked demotions

  emotions = ['alegria','miedo','tristeza','duda','enojo']

  constructor() {
    super(...arguments)
    //preload svg
    const svgs = [...this.emotions, 'intro','next','end']
    svgs.forEach(s =>  (new Image()).src = `svg/${s}.svg`) 
  }

  @action
  start(){
    //shuffle everything
    this.demotions = shuffle(this.emotions).map(e=>{
      let l = e.split('')
      while(e===l.join(''))
        l = shuffle(l)
      console.log(l)
      return {name:e, letters: l}
    })
    this.index = 0
    this.started = true
    this.done = false
    this.audio.play('drag')
  }

  @action
  onWin(){
    this.audio.play('win')
    setTimeout( () => {
      if(this.index===this.demotions.length-1)
        this.done = true
      else
        this.guessed = true
    }, 2000)
  }
  
  @action
  next(){
    this.audio.play('drop')
    this.guessed = false
    this.index++
  }
  
  get emotion(){
    return this.demotions[this.index]
  }

}

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import {Swappable, Plugins} from '@shopify/draggable';

export default class Game  extends Component {

  @inject('audio') audio

  @tracked done = false

  constructor() {
    super(...arguments)
  }

  @action
  makeDraggable(el) {

    const swappable = new Swappable(el, {
      draggable: '.draggable',
      mirror: {
        appendTo: 'body',
        constrainDimensions: true,
      },
      delay: 0,
    })

    swappable.on('drag:start', (ev) => {
      this.audio.play('drag')
    })

    swappable.on('drag:over', (ev) => {
      this.audio.play('dragEnter')
    })

    swappable.on('drag:stop', (ev) => {
      setTimeout( () => {
        const word = Array.from(el.getElementsByClassName('draggable')).map(s => s.innerText).join('').toLowerCase()
        const win = (word===this.args.name)
        if(win){
          this.args.onWin()
          this.done = true
        }
      }, 100)
      this.audio.play('drop')
    })
  }
     
}

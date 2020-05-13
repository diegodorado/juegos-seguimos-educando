import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import {Swappable, Plugins} from '@shopify/draggable';
import { inject } from '@ember/service';

export default class CounterComponent extends Component {

  @inject('audio') audio

  @tracked done = false
  
  constructor() {
    super(...arguments)
    //create tiles based on size
    this.size = this.args.size
    this.face = this.args.face
    const s = this.size
    this.tiles = new Array(s*s).fill(0).map((t,i) => {
      return {
        pos: i,
        row: Math.floor(i/s),
        col: i%s
      }
    })
    //shuffle
    while(this.tiles.any((e,i)=> e.pos === i))
      this.tiles = this.tiles.map(n =>[Math.random(), n]).sort().map(n => n[1] )
  }

  @action
  makeDraggable(el) {

    const swappable = new Swappable(el, {
      draggable: '.draggable',
      mirror: {
        appendTo: 'body',
        constrainDimensions: true,
      },
      classes: {
        mirror: `mirror-${this.face}`,
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
      this.done = [... el.querySelectorAll('.draggable:not(.draggable--original)')]
        .every((e,i) => e.tabIndex===i)
      this.args.checkStatus(this.face, this.done)
      this.audio.play('drop')
    })

  }

}

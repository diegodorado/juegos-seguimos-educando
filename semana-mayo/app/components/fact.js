import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';
//import {Sortable, Plugins} from '@shopify/draggable';
import {Swappable, Plugins} from '@shopify/draggable';

const shuffle = (b) => {
  const a = [...b]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default class Fact  extends Component {

  @inject('audio') audio
  @tracked facts

  constructor() {
    super(...arguments)
    const f = this.args.facts
    //shuffle everything
    this.facts = shuffle(f)
    while(this.facts.any((x,i) => x===f[i])){
      this.facts = shuffle(f)
    }
  }

  @action
  makeDraggable(el) {

    const checkOrder = () =>{
      let win = true
      Array.from(el.getElementsByClassName('draggable')).forEach((e,i) => {
        if(this.args.facts[i]===e.textContent){
          e.classList.add('correct')
        }else{
          e.classList.remove('correct')
          win =false
        }
      })
      if(win){
        this.args.onWin()
      }
    }

    const s = new Swappable(el, {
      draggable: '.draggable',
      delay: 0,
    })

    // why??
    checkOrder()

    s.on('drag:start', (ev) => {
      this.audio.play('drag')
    })

    s.on('drag:over', (ev) => {
      this.audio.play('dragEnter')
    })

    s.on('drag:stop', (ev) => {
      setTimeout( () => {
        checkOrder()
      }, 100)
      this.audio.play('drop')
    })
  }
     
}

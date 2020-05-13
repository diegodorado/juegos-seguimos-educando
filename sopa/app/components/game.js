import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';
import { htmlSafe } from '@ember/string';


export default class Cube  extends Component {

  @inject('audio') audio

  @tracked started = true
  @tracked done
  size = 2
  @tracked mouseDownPos
  @tracked mousePos
  @tracked cellSize
  marking = false
  @tracked markers = []

  words = [
    'Derechos',
    'Mujeres',
    'Oportunidades',
    'Igualdad',
    'Discriminar',
    'Género',
    'Estereotipos'
  ]


  constructor() {
    super(...arguments)
    this.size = this.args.size || 2
    //preload svg

    this.puzzle = wordfind.newPuzzle(this.words,{})
  }

  @action
  start(){
    this.started = true
    this.done = false
  }

  @action
  mouseDown(i, j, ev){
    this.mouseDownPos = {i:i, j:j}
    this.marking =  true
    const r = ev.target.closest(".row")
    this.cellSize = r.clientWidth / r.childElementCount
  }

  @action
  mouseMove(i, j, ev){
    if(this.marking)
      this.mousePos = {i:i, j:j}
  }

  @action
  mouseUp(ev){
    const s = this.mouseDownPos
    const e = this.mousePos
    let i =s.i, j = s.j
    let word = this.puzzle[j][i]
    while(i!==e.i || j!==e.j){
      if(i>e.i) i--
      if(i<e.i) i++
      if(j>e.j) j--
      if(j<e.j) j++
      word += this.puzzle[j][i]
    }
    console.log(word)
    if(this.words.any( w => w===word))
      this.markers = [...this.markers,{word,start:s, end: e}]
    this.mouseDownPos = null
    this.mousePos = null
    this.marking = false
  }

  @action
  checkStatus(f,s){
    if(done){
      this.audio.play('win')
      setTimeout( () => this.done = done, 2000)
    }
  }

}

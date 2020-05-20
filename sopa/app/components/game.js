import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class Game  extends Component {

  @inject('audio') audio

  @tracked started = false
  @tracked done = false
  @tracked startPos
  @tracked markerDir
  @tracked markerLength
  @tracked cellSize
  @tracked puzzle
  marking = false
  @tracked foundWords = []

  words = [
    'derechos',
    'mujeres',
    'oportunidades',
    'igualdad',
    'discriminar',
    'género',
    'estereotipos'
  ]

  constructor() {
    super(...arguments)
    //disable context menu
    document.oncontextmenu = (ev) =>{
      ev.preventDefault()
    }
  }

  @action
  start(){
    this.started = true
    this.done = false
    const settings = {orientations: ['horizontal','vertical','diagonal']}
    this.puzzle = wordfind.newPuzzle(this.words,settings)
    this.foundWords = []
  }

  @action
  solve(){
    const solution = wordfind.solve(this.puzzle,this.words)
    let foundWords = []
    solution.found.forEach( w => {
      const dir = {'horizontal':0,'diagonal':1,'vertical':2}[w.orientation]
      foundWords.push({word: w.word,start:{i:w.x,j:w.y}, markerDir: dir, markerLength: w.overlap})
    })
    this.foundWords = foundWords
    setTimeout( () => this.done = true, 5000)
  }

  getIJ(ev){
    const p = this.puzzleEl
    const x = ev.x - p.offsetLeft
    const y = ev.y - p.offsetTop
    const w = p.clientWidth
    const l = this.puzzle.length
    this.cellSize = w / l
    const i = Math.floor(x/w*l)
    const j = Math.floor(y/w*l)
    //clamp i and j
    return [Math.max(0,Math.min(i,l-1)),Math.max(0,Math.min(j,l-1))]
  }

  @action
  mouseDown(ev){
    if(this.done){
      this.start()
    }else{
      this.audio.play('down')
      this.puzzleEl = ev.target.closest('.puzzle')
      const [i,j] = this.getIJ(ev)
      this.startPos = {i:i, j:j}
      this.marking =  true
    }
  }

  @action
  mouseMove(ev){
    if(this.marking){
      const [i,j] = this.getIJ(ev)
      const s = this.startPos
      const di = i-s.i
      const dj = j-s.j
      // calculate direction, clamping the angle between di and dj
      this.markerDir = Math.round(Math.atan2(dj,di)/(Math.PI/4))
      const diag = Math.abs(this.markerDir)%2
      // calculate length of marker
      this.markerLength = (diag ? Math.min : Math.max)(Math.abs(di),Math.abs(dj)) +  1
    }
  }

  @action
  mouseUp(ev){
    if(this.marking){
      this.audio.play('up')
      const s = this.startPos
      let l = this.markerLength
      let i =s.i, j = s.j
      let word = ''
      while(l--){
        word += this.puzzle[j][i]
        switch(this.markerDir){
          case  0: i++;     break;
          case  1: i++;j++; break;
          case  2: j++;     break;
          case  3: i--;j++; break;
          case  4: i--;     break;
          case -3: i--;j--; break;
          case -2: j--;     break;
          case -1: i++;j--; break;
        }
      }
      this.checkWord(word)
      this.startPos = null
      this.markerDir  = 0
      this.markerLength = 0
      this.marking = false
    }
  }

  checkWord(w){
    [w,w.split('').reverse().join('')].forEach(word =>{
      if(this.words.any( w => w===word)){
        if(!this.foundWords.any( m => m.word===word)){
          this.foundWords = [...this.foundWords,{word,start:this.startPos, markerDir: this.markerDir, markerLength: this.markerLength}]
          if(this.foundWords.length === this.words.length){
            this.audio.play('win')
            setTimeout( () => this.done = true, 2000)
          }
        }
      }
    })
  }

}

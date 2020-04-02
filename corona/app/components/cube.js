import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject } from '@ember/service';

const svgs = ['virus','world','top','left','right']

export default class Cube  extends Component {

  @inject('audio') audio

  @tracked started = false
  @tracked done

  faces = ['top','left','right']
  _status = new Array(3).fill(false)
  size = 2

  constructor() {
    super(...arguments)
    this.size = this.args.size || 2
    //preload svg
    svgs.forEach(s =>  (new Image()).src = `svg/${s}.svg`) 
  }

  @action
  start(){
    this.started = true
    this.done = false
    this._status = new Array(3).fill(false)
    this.audio.play('drag')
  }

  @action
  checkStatus(f,s){
    const idx = this.faces.indexOf(f)
    this._status[idx] = s
    const done = this._status.every(s=>s)
    if(done){
      this.audio.play('win')
      setTimeout( () => this.done = done, 2000)
    }
  }

}

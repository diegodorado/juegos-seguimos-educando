import Service from '@ember/service';
import {Howl} from 'howler'

//sounds
const sounds = {
  busy: false,
  drag: new Howl({src:['./audio/cube-down.mp3'],volume: 0.4}),
  dragEnter: new Howl({src:['./audio/cube-up.mp3']}),
  drop: new Howl({src:['./audio/animation-down-1.mp3']}),
  win: new Howl({src:['./audio/win.mp3']}),
}

export default class AudioService extends Service {
  // play sound wrapper
  play(s){
    if (!sounds.busy){
      sounds.busy = true
      sounds[s].play()
      // prevent double trigger with a short timeout
      setTimeout(() => sounds.busy = false, 50)
    }
  }
}

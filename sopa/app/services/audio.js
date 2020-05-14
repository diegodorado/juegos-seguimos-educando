import Service from '@ember/service';
import {Howl} from 'howler'

//sounds
const sounds = {
  busy: false,
  down: new Howl({src:['./audio/down.mp3'],volume: 0.4}),
  up: new Howl({src:['./audio/up.mp3']}),
  drop: new Howl({src:['./audio/animation-down-1.mp3']}),
  win: new Howl({src:['./audio/win.mp3']}),
}

export default class AudioService extends Service {
  // play sound wrapper
  play(s){
    return
    if (!sounds.busy){
      sounds.busy = true
      sounds[s].play()
      // prevent double trigger with a short timeout
      setTimeout(() => sounds.busy = false, 50)
    }
  }
}

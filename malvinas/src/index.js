import './styles/index.sass'
import interact from 'interactjs'
import {Howl} from 'howler'

const SIZE = 2

//creates all dom elements dinamically
const app = document.querySelector('#root')
const draggables = document.createElement('div')
const droppables = document.createElement('div')
droppables.className = 'puzzle'
const title = document.createElement('h1')
title.innerText = 'ARMAR EL ROMPECABEZAS COLOCANDO LAS PIEZAS DONDE CORRESPONDEN.'

const winBox = document.createElement('div')
winBox.className = 'win-box'
winBox.style = 'display:none'
const winTitle = document.createElement('h2')
winTitle.innerText = '¡Muy bien! Completaste el mapa'
const replayBtn = document.createElement('button')
replayBtn.innerText = 'Jugar de nuevo'
replayBtn.addEventListener('click', () => window.location.reload())
winBox.append(winTitle)
winBox.append(replayBtn)

app.append(title)
app.append(droppables)
app.append(draggables)
app.append(winBox)

//sounds
const sounds = {
  busy: false,
  drag: new Howl({src:['./assets/audio/cube-down.mp3'],volume: 0.4}),
  dragEnter: new Howl({src:['./assets/audio/cube-up.mp3']}),
  drop: new Howl({src:['./assets/audio/animation-down-1.mp3']}),
  win: new Howl({src:['./assets/audio/win.mp3']}),
}
// play sound wrapper
const play = (s) => {
  if (!sounds.busy){
    sounds.busy = true
    sounds[s].play()
    // prevent double trigger with a short timeout
    setTimeout(() => sounds.busy = false, 50)
  }
}


const placements = new Array(SIZE*SIZE).fill(-1)

droppables.style.gridTemplateColumns = `repeat(${SIZE}, 1fr)`

for (let i=0;i<SIZE;i++){
  for (let j=0;j<SIZE;j++){
    const tile = document.createElement('div')
    tile.className = 'draggable tile'
    tile.style.backgroundSize = `${SIZE*100}%  ${SIZE*100}% `
    tile.style.backgroundPositionX = `${-j*100}%`
    tile.style.backgroundPositionY = `${-i*100}%`
    draggables.append(tile)

    const place = tile.cloneNode()
    place.className = 'dropzone tile'
    droppables.append(place)

    // remember tile index
    place.index = tile.index = (i*SIZE+j)
  }
}


// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.25,

  ondropactivate: function (ev) {
    ev.target.classList.add('drop-active')
  },

  ondragenter: function (ev) {
    var draggableElement = ev.relatedTarget
    var dropzoneElement = ev.target
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can-drop')
    play('dragEnter')
  },

  ondragleave: function (ev) {
    ev.target.classList.remove('drop-target')
    ev.relatedTarget.classList.remove('can-drop')
  },

  ondrop: function (ev) {
    placeOver(ev.target,ev.relatedTarget)
    ev.relatedTarget.classList.remove('can-drop')
    placements[ev.target.index] = ev.relatedTarget.index
    play('drop')
    checkForWin()
  },

  ondropdeactivate: function (ev) {
    ev.target.classList.remove('drop-active')
    ev.target.classList.remove('drop-target')
  },

  checker: (dragEvent,         // related dragmove or dragend
                     event,             // Touch, Pointer or Mouse Event
                     dropped,           // bool default checker result
                     dropzone,          // dropzone Interactable
                     dropElement,       // dropzone element
                     draggable,         // draggable Interactable
                     draggableElement) => {// draggable element

    // return dropped && (placements[dropElement.index] === -1)
    return dropped && (draggableElement.index===dropElement.index)
  }

})

let zIndex = 300

interact('.draggable').draggable({
  inertia: true,
  listeners: { 
    start: (ev) =>{
      ev.target.style.zIndex = `${zIndex++}`
      winBox.style = 'display:none'
      placements.forEach( (x,i) => {
        if(x===ev.target.index)
          placements[i] = -1
      })
      play('drag')
    },
    move: (ev) =>{
      ev.target.style.top = `${ev.client.y-ev.target.offsetHeight/2}px`
      ev.target.style.left = `${ev.client.x-ev.target.offsetWidth/2}px`
    }
  }
})

const getOffset = (el) => {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const checkForWin = () => {
  // js magic
  const won = placements.map((x,i) => x===i).every(x => x)
  if(won){
    setTimeout(() => {
      winBox.style = ''
      play('win')
    },250)
  }
}

const debounce = (func, wait, immediate) => {
    var timeout;
    return () => {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const resized = () =>{
  //adjust tiles width and position
  const w = droppables.children[0].offsetWidth
  const h = droppables.children[0].offsetHeight
  for(let i=0;i<draggables.children.length;i++){
    draggables.children[i].style.width = `${w}px`
    //todo: place randomly
    const rw = w+Math.random()*(window.innerWidth-w*2)
    const rh = h+Math.random()*(window.innerHeight-h*2)
    draggables.children[i].style.top = `${rh}px`
    draggables.children[i].style.left = `${rw}px`
  }

  // re position placed draggables
  for(let i=0;i<droppables.children.length;i++){
    if(placements[i]!== -1){
      placeOver(droppables.children[i], draggables.children[placements[i]])
    }
  }

}

const placeOver = (src, tgt) =>{
  const offset = getOffset(src)
  tgt.style.top = `${offset.top}px`
  tgt.style.left = `${offset.left}px`
}

window.addEventListener('resize', debounce(resized,10, false), false)

window.addEventListener('orientationchange',resized, false)

resized()


import './styles/index.sass'
import interact from 'interactjs'
import {Howl} from 'howler'

const ROWS = 3
const COLUMNS = 2
const MAP_WIDTH = 636
const MAP_HEIGHT = 451
const TILE_WIDTH = MAP_WIDTH / COLUMNS
const TILE_HEIGHT = MAP_HEIGHT / ROWS

//creates all dom elements dinamically
const app = document.querySelector('#root')
const draggables = document.createElement('div')
const droppables = document.createElement('div')
droppables.className = 'puzzle'
droppables.style.width = `${MAP_WIDTH}px`

app.append(draggables)
app.append(droppables)

//sounds
const sounds = {
  busy: false,
  drag: new Howl({src:['./assets/audio/cube-down.mp3'],volume: 0.4}),
  dragEnter: new Howl({src:['./assets/audio/cube-up.mp3']}),
  drop: new Howl({src:['./assets/audio/animation-down-1.mp3']}),
}

const play = (s) => {
  if (!sounds.busy){
    sounds.busy = true
    sounds[s].play()
    //sounds[s].on('end', () => sounds.busy = false)
    // prevent double trigger with a short timeout
    setTimeout(() => sounds.busy = false, 50)
  }
}


const placements = new Array(ROWS*COLUMNS).fill(-1)

for (let i=0;i<ROWS;i++){
  for (let j=0;j<COLUMNS;j++){
    const tile = document.createElement('div')
    tile.className = 'draggable tile'
    tile.style.width = `${TILE_WIDTH}px`
    tile.style.height = `${TILE_HEIGHT}px`
    tile.style.backgroundPositionX = `${-j*TILE_WIDTH}px`
    tile.style.backgroundPositionY = `${-i*TILE_HEIGHT}px`
    draggables.append(tile)

    const place = tile.cloneNode()
    place.className = 'dropzone tile'
    droppables.append(place)

    // remember tile index
    place.index = tile.index = (i*COLUMNS+j)

    //todo: place randomly
    tile.style.top = `${(i*COLUMNS+j)*TILE_HEIGHT}px`
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
    const offset = getOffset(ev.target)
    ev.relatedTarget.style.top = `${offset.top}px`
    ev.relatedTarget.style.left = `${offset.left}px`
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

    return dropped && (placements[dropElement.index] === -1)
  }

})

interact('.draggable').draggable({
  inertia: true,
  listeners: { 
    start: (ev) =>{
      placements.forEach( (x,i) => {
        if(x===ev.target.index)
          placements[i] = -1
      })
      play('drag')
    },
    move: (ev) =>{
      ev.target.style.top = `${ev.client.y-TILE_HEIGHT/2}px`
      ev.target.style.left = `${ev.client.x-TILE_WIDTH/2}px`
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
  console.log(won,placements)
}

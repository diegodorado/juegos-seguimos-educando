import './styles/index.sass'
import interact from 'interactjs'

const ROWS = 2
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

    //todo: place randomly
    tile.style.top = `${(i*ROWS+j)*TILE_HEIGHT}px`
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
  },

  ondropdeactivate: function (ev) {
    ev.target.classList.remove('drop-active')
    ev.target.classList.remove('drop-target')
  }

})

interact('.draggable').draggable({
  inertia: true,
  listeners: { 
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

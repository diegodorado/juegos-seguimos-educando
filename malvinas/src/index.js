import './styles/index.sass'

import interact from 'interactjs'

//creates all dom elements dinamically
const app = document.querySelector('#root')
const draggables = document.createElement('div')
const droppables = document.createElement('div')

app.append(draggables)
app.append(droppables)

const ROWS = 2
const COLUMNS = 2
for (let i=0;i<ROWS;i++){
  for (let j=0;j<COLUMNS;j++){
    const tile = document.createElement('div')
    tile.className = 'draggable'
    draggables.append(tile)

    const place = document.createElement('div')
    place.className = 'dropzone'
    droppables.append(place)
  }
}


// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.25,

  // listen for drop related events:
  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can-drop')
    draggableElement.textContent = 'Dragged in'
  },

  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.classList.remove('can-drop')
    event.relatedTarget.textContent = 'Dragged out'
  },

  ondrop: function (event) {
    event.relatedTarget.textContent = 'Dropped'
  },

  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }

})

interact('.draggable')
  .draggable({
    inertia: true,
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener }
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

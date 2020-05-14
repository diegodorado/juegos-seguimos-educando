import { modifier } from 'ember-modifier';

export default modifier( (element, params, hash) => {
  const a = params[0]
  // get direction
  const d = params[1]
  // get length of marker
  const l = params[2]
  const s = params[3]
  const diag = Math.abs(d)%2
  //calculate width of marker
  const w = (diag ? Math.sqrt(2*l*l)-0.3 : l)*s
  element.setAttribute('style', !a ? '' : `top: ${s * a.j}px; left: ${s*a.i}px;height:${s}px;width:${w}px;transform:rotate(${d*45}deg);transform-origin:${s/2}px;`)
})

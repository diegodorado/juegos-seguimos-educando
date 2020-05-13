import { modifier } from 'ember-modifier';

export default modifier( (element, params, hash) => {
  const a = params[0]
  const b = params[1]
  const s = params[2]
  if(!a || !b){
    element.setAttribute('style', ``)
    return
  }

  const di = b.i-a.i
  const dj = b.j-a.j
  // calculate direction, clamping the angle between di and dj
  const dir = Math.round(Math.atan2(dj,di)/(Math.PI/4))
  // calculate length of marker
  const l = Math.min(Math.abs(di),Math.abs(dj)) + 1
  const w = (Math.abs(dir)%2 ? Math.sqrt(2*l*l)-0.3 : l)*s
  element.setAttribute('style', `top: ${s * a.j}px; left: ${s*a.i}px;height:${s}px;width:${w}px;transform:rotate(${dir*45}deg);transform-origin:${s/2}px;`)
})

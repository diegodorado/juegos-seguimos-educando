import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Tile  extends Component {

  get tabindex() {
    return this.args.tile.pos
  }

  get tileStyle() {
    const t = this.args.tile
    const s = this.args.size
    return Ember.String.htmlSafe(`--row:${t.row};--col:${t.col};--size:${s}`)
  }

}

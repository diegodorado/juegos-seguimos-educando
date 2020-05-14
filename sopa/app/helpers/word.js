import { helper } from '@ember/component/helper';

export default helper(function word(params/*, hash*/) {
  return params[0].any(m => m.word === params[1]) ? 'found' : ''
});

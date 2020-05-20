import { helper } from '@ember/component/helper';

export default helper(function word(params/*, hash*/) {
  // only é for this case is needed
  return params[0].replace('é','e')
});

import { helper } from '@ember/component/helper';

export default helper(function formatDate(params/*, hash*/) {
  return new Date(params[0]).toLocaleString()
});

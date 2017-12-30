import { helper } from '@ember/component/helper';
import config from '../config/environment';

export function assetPath([url]) {
  console.log(config.rootURL);
  return `${config.rootURL}assets/${url}`;
}

export default helper(assetPath);

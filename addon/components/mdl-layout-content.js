import { BaseLayoutDescendant } from './base-layout-descendant';
import layout from '../templates/components/mdl-layout-content';

export default BaseLayoutDescendant.extend({
  layout,

  tagName: 'main',

  classNames: ['mdl-layout__content']
});

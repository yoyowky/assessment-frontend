import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  publisher: alias('model.publisher'),
  products: Ember.computed.alias('model.products'),
  actions: {
    clickButton(element) {
      Ember.Logger.info('A button has been clicked: ', element)
    },
  },
});

import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage: false,
  actions: {
    messageFormShow() {
      this.set('addNewMessage', true);
    },

    saveMessage() {
      var params = {
        message: this.get('message'),
      };
      this.set('addNewMessage', false);
      this.sendAction('saveMessage', params);
    }
  }
});

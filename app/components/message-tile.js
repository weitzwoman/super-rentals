import Ember from 'ember';

export default Ember.Component.extend({
  showMessages: false,
  actions: {
    delete(message) {
      if (confirm('Are you sure you want to delete this awesome message?')) {
        this.sendAction('destroyMessage', message);
      }
    },
    messageShow: function() {
      this.set('showMessages', true);
    },
    messageHide: function() {
      this.set('showMessages', false);
    }
  }
});

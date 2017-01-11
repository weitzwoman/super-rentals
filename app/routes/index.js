import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      messages: this.store.findAll('message'),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    // destoryRental(rental) {
    //   rental.destroyRecord();
    //   this.transitionTo('index'):
    // },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      this.transitionTo('index');
    },

    saveMessage(params) {
      var newMessage = this.store.createRecord('message', params);
      newMessage.save();
      this.transitionTo('index');
    },
    destroyMessage(message) {
      message.destroyRecord();
      this.transitionTo('index');
    }
  }
});

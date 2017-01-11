import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
      var params = {
        rating: this.get('rating'),
        author: this.get('author'),
        content: this.get('content')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    }
  }
});

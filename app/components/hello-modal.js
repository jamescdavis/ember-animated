import Ember from "ember";
// BEGIN-SNIPPET hello-modal
export default Ember.Component.extend({
  classNames: ['hello-modal'],
  actions: {
    gotIt: function() {
      this.sendAction('dismiss');
    }
  }
});
// END-SNIPPET

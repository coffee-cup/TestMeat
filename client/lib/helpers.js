// global functions that are useful to be called within templates

helpers = {
  timeAgo: function(date) {
    return moment(date).format('h:mm MMM Do');
  }
};
Helpers.addScope('H', helpers);

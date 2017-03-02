const UserSearch = require('./user_search');
const Follow = require('./follow_toggle');
$(() => {
  let followToggles = $(".follow-toggle");
  followToggles.each((i, toggle) => {
    new Follow($(toggle));
  });
  let user_search = $("nav.user-search");
  user_search.each((i, search) => {
    new UserSearch($(user_search));
  });
});

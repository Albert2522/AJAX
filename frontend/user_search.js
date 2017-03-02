const APIUtil = require('./api_util');
const FollowToggle = require('./follow_toggle');

class UserSearch {
  constructor($el) {
    this.el = $el;
    this.input = $el.find('input');
    this.ul = $el.find('ul');
    this.el.on('propertychange input', this.handleInput.bind(this));
  }



  handleInput(e) {
    let that = this;
    let input = $(e.target).val();
    let input2 = { "query": input };
    // console.log(isJSON(input2));
    // console.log(input2);
    APIUtil.searchUsers(input2, function (data) {
      console.log(data);
      that.ul.empty();
      for (var i in data) {
        let $li = $(`<li> <a href="http://localhost:3000/users/${data[i].id}">${data[i].username}</a></li>`);
        let $button = $(`<button class="follow-toggle" data-user-id=${data[i].id}
         data-initial-follow-state=${data[i].followed ? "followed" : "unfollowed" }></button>`);
         $li.append('               ');
         $li.append($button);
        that.ul.append($li);
        new FollowToggle($button);
      }
    });
  }
}

module.exports = UserSearch;

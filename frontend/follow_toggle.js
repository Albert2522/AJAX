const APIUtil = require('./api_util');

class FollowToggle {
  constructor ($el) {
    this.el = $el;
    this.user_id = this.el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render() {
    if(this.followState === "following" || this.followState === "unfollowing") {
      this.el.prop('disabled', true);
    } else {
      this.el.prop('disabled', false);
    }
    this.el.text(this.followState);
  }

  handleClick() {
    let that = this;
    let promise;
    this.el.click((e) => {
      e.preventDefault();
      if(that.followState === "followed") {
        that.followState = "unfollowing";
        that.render();
        APIUtil.unfollowUser(that.user_id).then(() => {
          that.followState = "unfollowed";
          that.render();
        });
      } else {
        that.followState = "following";
        that.render();
        APIUtil.followUser(that.user_id).then(() => {
          that.followState = "followed";
          that.render();
        });
      }
    });
  }
}

module.exports = FollowToggle;

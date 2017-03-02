const APIUtil = require("./api_util");

class TweetCompose {
  constructor($el) {
    this.el = $el;
    this.el.on("submit", APIUtil.createTweet(this.submit()));
  }

  submit() {
    return this.el.serializeJSON();
  }
}

module.exports = TweetCompose;

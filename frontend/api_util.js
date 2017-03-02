const APIUtil = {
  followUser: id => (
    $.ajax({
      url: `http://localhost:3000/users/${id}/follow`,
      method: "POST",
      dataType: 'json',
      success: function() {
        console.log("followed");
      }
      })
  ),

  unfollowUser: id => (
    $.ajax({
      url: `http://localhost:3000/users/${id}/follow`,
      method: "DELETE",
      dataType: 'json',
      success: function() {
        console.log("unfollowed");
      }
      })
  ),

  searchUsers: (queryVal, success) => (
    $.ajax({
      url: `http://localhost:3000/users/search`,
      method: "GET",
      dataType: 'json',
      data: queryVal,
      success: success
    })
  ),

  creatTweet:  (data) => (
    $.ajax({
      url: `http://localhost:3000/tweets`,
      method: "POST",
      dataType: "json",
      data: data,
      success: function (data1) {
        console.log(data1);
      }
    })
  )
};

module.exports = APIUtil;

function saveUserInfo(token) {
    if (token && token.accessToken) {
      localStorage.setItem("userToken", token.accessToken);
      window.location.reload();
    } else
      alert('User authorization: Token error');
  }
  
  function auth() {
    SE.authenticate({
      scope: ['write_access', 'private_info'],
      success: function(data) { saveUserInfo(data) },
      error: function(data) { alert("User authorization: Access denied") }
    });
  }
  
  function initAPI() {
    SE.init({
      clientId: 19438,
      key: 'KaWLnDpxcoaBkGJyGeUg4A((',
      channelUrl: `https://${window.location.hostname}/`,
      complete: auth
    });
  }
  
  window.onload = function () {
    let checker = document.querySelector('#user-login');
  
    if (checker) {
      checker.onclick = function (e) {
        initAPI();
      };
    }
  }
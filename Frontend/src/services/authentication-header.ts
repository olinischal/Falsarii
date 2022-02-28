const AuthHeader = () => {
    const userStr = localStorage.getItem("user");
    let user;
    if (userStr)
      user = JSON.parse(userStr);
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return { 
          Authorization: 'No access token captured'
      };
    }
  }

  export default AuthHeader;
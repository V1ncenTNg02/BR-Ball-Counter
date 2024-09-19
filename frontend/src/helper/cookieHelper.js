const setCookie = (cookieName, value, hours) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + 1000 * 60 * 60 * hours);
  document.cookie = `${cookieName}=${value}; expires=${expires.toUTCString()}`
}

const checkCookie = (cookieName) => {
  if (document.cookie.split(";").some((cookie) => cookie.trim().startsWith(`${cookieName}`))){
    return true;
  }
  return false;
}

const getCookie = (cookieName) => {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");
  for(let i = 0; i<cookies.length; i++){
    let c = cookies[i];
    while(c.charAt(0) === ' '){
      c = c.substring(1);
    }
    if(c.indexOf(name) === 0){
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export {setCookie, checkCookie, getCookie};
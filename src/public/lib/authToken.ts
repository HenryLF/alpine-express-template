import Cookies from "js-cookie";

export function setAuthToken(token: string) {
  if (!navigator.cookieEnabled) return;
  Cookies.set("website-auth-token", token, { expires: 1, path: "" });
}

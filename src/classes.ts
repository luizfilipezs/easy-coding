/**
 * Basic cookie handler for setting and reading cookies
 */
export class Cookies {
  /**
   * Allows to set a cookie
   * @param {string} cname Cookie name
   * @param {string} cvalue Cookie value
   * @param {string} exdays Cookie duration in days
   */
  public static set(cookieName: string, value: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);

    const expires = 'expires=' + d.toUTCString();
    document.cookie = `${cookieName}=${value};${expires};path=/`;
  }

  /**
   * Returns cookie value
   * @param {string} cname Cookie name
   * @returns {string} Value for the given cookie name
   */
  public static get(cookieName: string) {
    const name = cookieName + '=';
    const ca = document.cookie.split(';');

    for (let c of ca) {
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }

    return '';
  }
}

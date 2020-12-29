/**
 * Cookie handler.
 */
export class Cookies {
  /**
   * Sets a cookie.
   *
   * @param {string} name Cookie name.
   * @param {string} value Cookie value.
   * @param {string} exdays Cookie duration in days.
   */
  public static set(name: string, value: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);

    const expires = 'expires=' + d.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  /**
   * Returns the cookie value.
   *
   * @param {string} name Cookie name.
   *
   * @returns {string} Value for the given cookie name.
   */
  public static get(name: string) {
    name += '=';
    const ca = document.cookie.split(';');

    for (let c of ca) {
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }

    return '';
  }
}

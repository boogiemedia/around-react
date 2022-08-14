class Api {
  constructor(options) {
    this._url = options.baseUrl;

    this._token = options.token;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }

    // if the server returns an error, reject the promise

    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: { authorization: this._token },
    }).then(this._getResponseData);
  }
  addLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId} `, {
      method: "PUT",

      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    }).then(this._getResponseData);
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId} `, {
      method: "DELETE",

      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
    }).then(this._getResponseData);
  }

  //.......................End of cards api`s...................

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: { authorization: this._token },
    }).then(this._getResponseData);
  }

  //..................End of getting Api...................................................................................................
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  token: "3b0591f5-8d80-48af-bfb2-1499d5045304",
  "Content-Type": "application/json",
});

class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._id = options.headers.authorization;
    }

    _checkResponse(res) {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
                headers: {
                    authorization: `${this._id}`
                }
        })
        .then(res => this._checkResponse(res))
        .then((result) => {
            return result
        })
        .catch(err => console.log(err))
    }

    getUserData() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `${this._id}`
            }
        })
        .then(res => this._checkResponse(res))
        .then((result) => {
            return result
        })
        .catch(err => console.log(err))
    }

    getUserId() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `${this._id}`
            }
        })
        .then(res => this._checkResponse(res))
        .then((result) => {
            return result._id
        })
        .catch(err => console.log(err))
    }

    sendUserData(nameProfile, infoProfile) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
              authorization: `${this._id}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: `${nameProfile}`,
              about: `${infoProfile}`
            })
        })
        .then(res => this._checkResponse(res))
    }

    sendNewCard(newCard) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
              authorization: `${this._id}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              link: `${newCard.link}`,
              name: `${newCard.name}`
            })
        })
        .then(res => this._checkResponse(res))
    }

    sendNewAvatar(avatarUrl) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
              authorization: `${this._id}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              avatar: `${avatarUrl}`
            })
        })
        .then(res => this._checkResponse(res))
    }

    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
              authorization: `${this._id}`,
              'Content-Type': 'application/json'
            }
        })
        .then(res => this._checkResponse(res))
    }

    changeLikeCard(cardId, isLike) {
        if(isLike) {
            return fetch(`${this._url}/cards/${cardId}/likes`, {
                method: "PUT",
                headers: {
                    authorization: `${this._id}`
                }
            })
            .then(res => this._checkResponse(res))
            .catch(err => console.log(err))
        } else {
            return fetch(`${this._url}/cards/${cardId}/likes`, {
                method: "DELETE",
                headers: {
                    authorization: `${this._id}`
                }
            })
            .then(res => this._checkResponse(res))
            .catch(err => console.log(err))
        }
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-58',
    headers: {
      authorization: '3ff37044-95e4-4bd3-b490-b086237c1a77',
      'Content-Type': 'application/json'
    }
  });

export default api
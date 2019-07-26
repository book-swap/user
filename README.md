<p align="center">
  <img src="https://user-images.githubusercontent.com/28015011/59379922-95bbcb00-8d60-11e9-85c9-ebbae607a599.png" alt="Bookswap User"/>
</p>

<p align="center">User service for BookSwap.</p>

<p align="center">
<a href="https://david-dm.org/book-swap/user"><img src="https://img.shields.io/david/book-swap/user.svg" alt="Dependencies Status"></a>
<a href="https://snyk.io/test/github/book-swap/user?targetFile=package.json"><img src="https://img.shields.io/snyk/vulnerabilities/github/book-swap/user.svg" alt="Known Vulnerabilities"></a>
</p>

## Installation
1. Clone the repository.
2. Run docker with the docker-compose from [`config`](https://github.com/book-swap/config).

## Headers needed
Use the [authorization service](https://github.com/book-swap/auth) to get a JWT token. Pass that JWT token as a `Bearer` token in your headers.

## Routes

### `GET /user/me`

### `PATCH /user/me`
  * **firstName**
  * **lastName**
  * **city**
  * **county**
  
### `DELETE /user/me`

### `GET /user/:userId`
* Gets another user's profile


## License
BookSwap is licensed under the [MIT license](https://github.com/book-swap/user/blob/master/LICENSE).

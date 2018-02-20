# try-await - tryAwait - module



## Example

```js
const axios = require('axios')
const tryAwait = require('./index')

const URL = 'https://reqres.in/api/users/2'

const cbTry = (res) => console.log('Sucesso: ', res.data)
const cbCatch = (err) => console.log('ERROOO: ', err)

const callback = ({
  try: cbTry
, catch: cbCatch
})

const getUser = (user) => axios({ method: 'get', url: URL + user })

tryAwait( axios({ method: 'get', url: URL }), callback )

```
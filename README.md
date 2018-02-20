# try-await - tryAwait - module

I created this atomic module to help me work more cleanly with the async/await flow.

Article explaining how I did this in pt-br: https://medium.com/@osuissa/javascript-encapsulando-o-try-catch-do-async-await-fabb73392189

## Example

```js

const axios = require('axios')
const tryAwait = require('try-await')

const URL = 'https://reqres.in/api/users/'

const cbTry = (res) => console.log('Sucesso: ', res.data)
const cbCatch = (err) => console.log('ERROOO: ', err)

const callback = ({
  try: cbTry
, catch: cbCatch
})

const getUser = (user) => axios({ method: 'get', url: URL + user })

tryAwait( getUser(2), callback )

```
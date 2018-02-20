module.exports = async ( untilGetResult, callback ) => {
  try {
    return callback.try( await untilGetResult )
  } catch ( error ) {
    return callback.catch( error )
  }
}

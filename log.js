
/**
 * Observe a list of async streams.
 */
//eslint-disable-next-line no-console
export function log( stream, prefix = 'VALUE:', logger = console.log ) {
  return stream.map( async s => {
    logger( prefix, await s )
    return true
  })
}

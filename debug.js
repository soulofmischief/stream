
/**
 * Observe a list of async streams.
 */
export function debug( stream, prefix = 'DEBUG:' ) {
  return stream.map( async s => {
    //eslint-disable-next-line no-console
    console.debug( prefix, await s )
    return true
  })
}

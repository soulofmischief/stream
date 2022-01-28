import stream from 'mithril/stream.js'


/**
 * Observe a list of async streams.
 */
export function scrollOnUpdate( element, options, ...streams ) {
  return stream.merge( streams ).map( async streams => {
    await Promise.all( streams )
    element.scroll( options )
    return true
  })
}

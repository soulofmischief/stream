import m from 'mithril'
import stream from 'mithril/stream.js'


/**
 * Observe a list of async streams.
 */
export function observeStream( ...streams ) {
  return stream.merge( streams ).map( async streams => {
    await Promise.all( streams )
    m.redraw()
    return true
  })
}

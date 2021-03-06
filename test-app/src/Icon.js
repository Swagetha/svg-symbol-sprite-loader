// @flow
import React from 'react'

import javascript from './media/javascript.svg'
import bootstrap from './media/bootstrap.svg'
import nodejs from './media/nodejs.svg'

/**
 * Example Icon component which is also responsible for importing all of the icons
 * used in an application. Using a single file to declare all icons used has the
 * advantages of:
 *
 * 1. Enabling a quick overview of all the icons being used in an app.
 * 2. Providing a simple, familiar process for including icons.
 * 3. Can declare flow types for intellisense of available icon ids
 * 4. Is concise and uses only a single component declaration.
 *
 * Some of the disadvantages are:
 *
 * 1. Apps with LOTS of icons may find this doesn't scale well.
 * 2. When using an imported library component it would be more difficult to warn
 *    when an id that hasn't been imported is used.
 */

// Map of imported icons simplifies warning when a component that hasn't been
// imported is used in an app.
const iconSet = {
  javascript,
  bootstrap,
  nodejs,
}

// Provide a typing for the component to make selecting the component id easier
type props = {
  id: 'javascript' | 'bootstrap' | 'nodejs',
  className?: string,
}

/**
 * Application icons component, note that VSCode includes links in docs, so you
 * could link to a page!
 */
const Icon = ({ id, className }: props) => {
  if (!iconSet[id]) console.warn('Invalid Icon: ', id)

  return (
    <svg className={className}>
      <use xlinkHref={`#${id}`} href={`#${id}`} />
    </svg>
  )
}
Icon.defaultProps = {
  className: null,
}

export default Icon

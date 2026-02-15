/**
 * @typedef {Object} DropdownItemPropTypes
 * @property {string} value
 * @property {string} title
 * @property {function} onclick
 * @property {string} href
 * @property {DropdownItemPropTypes[]} dropdown
 */

/**
 * @typedef {Object} ButtonDropdownLinkProps
 * @property {string} value - button text
 * @property {string} href - button link
 * @property {function} onclick - click event handler
 * @property {DropdownItemPropTypes[]} dropdown - array of dropdown items
 */

/**
 * @typedef {Object} SidebarConfigPropTypes
 * @property {string} img - URL da imagem do logo
 * @property {string} title - título da sidebar
 * @property {Array<ButtonDropdownLinkProps>} items - array de itens de menu
 */

// Mark the file as a module for type compatibility
export {}

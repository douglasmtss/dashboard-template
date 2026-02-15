/**
 *
 * @param {string} prefix - element prefix id
 * return {string} unique element id
 */
export function generateElementId(prefix = 'id') {
  // Generate a unique id using prefix and random string
  const btnId = `${prefix}-${Math.random().toString(36).substr(2, 9)}`

  // Retorna HTML com id
  setTimeout(() => {
    const $btn = $(`#${btnId}`)
    if ($btn.length) {
      $btn.on('click', onclick)
    }
  }, 0)

  return btnId
}

generateElementId.prototype = {
  prefix: PropTypes.string,
}

/**
 *
 * @param {'up' | 'right' | 'down' | 'left'} direction
 * @returns {string} HTML string for chevron icon
 */
export function ChevronIcon(direction) {
  return `
        <i style="font-size: 12px;" class="fas fa-chevron-${direction}"></i>
    `
}

ChevronIcon.prototype = {
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
}

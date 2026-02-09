/**
 * 
 * @param {'up' | 'right' | 'down' | 'left'} direction 
 * @returns 
 */
export function ChevronIcon(direction) {
    return `
        <i style="font-size: 12px;" class="fas fa-chevron-${direction}"></i>
    `;
}

ChevronIcon.prototype = {
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};
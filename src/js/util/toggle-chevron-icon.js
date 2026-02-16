/**
 *
 * @param {jQuery} $element
 * returns {void} toggles chevron icon direction between right and down
 */
export function toggleChevronIcon($element) {
    $element.find('i').toggleClass('fa-chevron-right').toggleClass('fa-chevron-down')
}

// generate proptypes for toggleChevronIcon function
toggleChevronIcon.propTypes = {
    $element: jQuery,
}

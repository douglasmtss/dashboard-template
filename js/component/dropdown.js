/**
 * 
 * @param {import('../type/types.js').DropdownItemPropTypes[]} dropdown - array of dropdown items
 * @returns {string} HTML string for dropdown menu
 */
export const DropdownComponent = (dropdown) => {
    if (!dropdown || dropdown?.length === 0) return '';

    const itemsHTML = dropdown.map(item => {
        const title = item?.title ? `<h6>${item.title}</h6>` : '';
        return `
            <ul>
                ${title}
                <li>
                    <a
                        href="${item?.href || '#'}"
                    >
                        ${item?.value ?? ''}
                    </a>
                </li>
            </ul>
        `;
    }).join('');

    const container = $('<div>').html(`
        <div class="custom-dropdown-menu menu-opened">
            ${itemsHTML}
        </div>
    `).html();

    return container;
};

DropdownComponent.prototype = {
    dropdown: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        onclick: PropTypes.func,
        href: PropTypes.string,
    })),
}
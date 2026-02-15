import { renderButtonDropdownLink } from './button-dropdown-link.js'

/**
 * 
 * @param {import('../type/types.js').DropdownItemPropTypes[]} dropdown - array of dropdown items
 * @returns {string} HTML string for dropdown menu
 */
export const DropdownComponent = (dropdown) => {
    if (!dropdown || dropdown?.length === 0) return '';

    return dropdown.map(item => {
        const title = item?.title ? `<h6>${item.title}</h6>` : '';

        if (item?.dropdown) {
            return $(renderButtonDropdownLink(item)).html();
        }

        return `
            <ul>
                ${title}
                <li>
                    <a
                        href="${item?.href || '#'}"
                        onclick="${item?.onclick ? item.onclick : ''}"
                    >
                        ${item?.value ?? ''}
                    </a>
                </li>
            </ul>
        `;

    }).join('');
};

DropdownComponent.prototype = {
    dropdown: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        onclick: PropTypes.func,
        href: PropTypes.string,
    })),
}
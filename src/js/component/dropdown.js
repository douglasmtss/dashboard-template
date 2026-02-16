import { dropdownState } from '../util/constants.js'
import { renderButtonDropdownLink } from './button-dropdown-link.js'

/**
 *
 * @param {import('../type/types.js').DropdownItemPropTypes[]} dropdown - array of dropdown items
 * @param {string} componentClassPrefix - CSS class prefix for dropdown component
 * @param {boolean} hasDropdown - indicates if the dropdown has items
 * @returns {string} HTML string for dropdown menu
 */
export const DropdownComponent = (dropdown, componentMenuClassPrefix, hasDropdown) => {
    if (!dropdown || dropdown?.length === 0) return ''

    const html = $('<ul>').append(
        dropdown
            .map(item => {
                const title = item?.title ? `<h6>${item.title}</h6>` : ''

                if (item?.isHeader) {
                    return $('<div>').append(renderButtonDropdownLink(item)).html()
                }

                return `
                    ${title}
                    <li>
                        <a
                            href="${item?.href || '#'}"
                            onclick="${item?.onclick ? item.onclick : ''}"
                        >
                            ${item?.value?.trim() ?? ''}
                        </a>
                    </li>
            `
            })
            .join('')
            ?.trim() || '',
    )

    return `
        <div class="${componentMenuClassPrefix} ${hasDropdown ? dropdownState.dropdownMenu.closed : ''}">
        ${html.html()}
        </div>
    `
}

DropdownComponent.prototype = {
    dropdown: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            onclick: PropTypes.func,
            href: PropTypes.string,
        }),
    ),
}

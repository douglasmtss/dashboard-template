import { dropdownState } from '../util/constants.js'
import { generateElementId } from '../util/generate-element-id.js'
import { toggleChevronIcon } from '../util/toggle-chevron-icon.js'
import { ChevronIcon } from './chevron-icon.js'
import { DropdownComponent } from './dropdown.js'

/**
 * @param {import('../type/types.js').ButtonDropdownLinkProps} props - properties for button-dropdown-link component
 * @returns {string} HTML string for button-dropdown-link component
 */
export function renderButtonDropdownLink(props) {
    const { value, onclick, href, dropdown } = props

    const componentClassPrefix = 'button-dropdown-link'
    const componentMenuClassPrefix = 'custom-dropdown-menu'
    const hasDropdown = dropdown && dropdown.length > 0

    const buttonId = generateElementId(componentClassPrefix)
    const icon = hasDropdown ? ChevronIcon('right') : ''

    /**
     *
     * @param {Event} event - click event
     */
    function toggleDropdown(event) {
        event.stopPropagation()

        if (hasDropdown) {
            const $parent = $(event.currentTarget).parent()

            /**
             * button-dropdown-link-container
             */
            if ($parent.hasClass(`${componentClassPrefix}-container`)) {
                $parent.toggleClass(dropdownState.dropdown.opened).toggleClass(dropdownState.dropdown.closed)
                $parent
                    .siblings(`.${componentMenuClassPrefix}`)
                    .toggleClass(dropdownState.dropdownMenu.opened)
                    .toggleClass(dropdownState.dropdownMenu.closed)
            }

            /**
             * custom-dropdown-menu
             */
            if ($parent.hasClass(componentMenuClassPrefix)) {
                $parent.toggleClass(dropdownState.dropdownMenu.opened).toggleClass(dropdownState.dropdownMenu.closed)
            }

            toggleChevronIcon($(event.currentTarget))
        }

        onclick()
    }

    return $(`
        <div class="${componentClassPrefix}-container ${hasDropdown ? dropdownState.dropdown.closed : ''}">
            <button
                class="${componentClassPrefix}"
                id="${buttonId}"
                type="button"
                aria-expanded="false"
            >
                ${icon}
                <a href="${href}">${value}</a>
            </button>
        </div>

        ${DropdownComponent(dropdown, componentMenuClassPrefix, hasDropdown)}
    `).on('click', `.${componentClassPrefix}`, toggleDropdown)
}

const DropdownItemPropTypes = {
    value: PropTypes.string,
    href: PropTypes.string,
    onclick: PropTypes.func,
}

const DropdownPropTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(DropdownItemPropTypes)),
}

renderButtonDropdownLink.propTypes = {
    value: PropTypes.string,
    onclick: PropTypes.func,
    dropdown: PropTypes.arrayOf(PropTypes.shape(DropdownPropTypes)),
}

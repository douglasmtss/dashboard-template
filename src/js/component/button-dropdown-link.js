import { generateElementId } from "../util/generate-element-id.js";
import { ChevronIcon } from "./chevron-icon.js";
import { DropdownComponent } from './dropdown.js';

/**
 * @param {import('../type/types.js').ButtonDropdownLinkProps} props - properties for button-dropdown-link component
 * @returns {string} HTML string for button-dropdown-link component
 */
export function renderButtonDropdownLink(props) {
    const { value, onclick, href, dropdown, } = props;

    let state = {
        dropdown: {
            opened: 'dropdown-opened',
            closed: 'dropdown-closed',
        },
        dropdownMenu: {
            opened: 'menu-opened',
            closed: 'menu-closed',
        }
    }

    const componentClassPrefix = 'button-dropdown-link';
    const hasDropdown = dropdown && dropdown.length > 0;

    const buttonId = generateElementId(componentClassPrefix);
    const icon = hasDropdown ? ChevronIcon('right') : '';

    /**
     * 
     * @param {Event} event - click event
     */
    function toggleDropdown(event) {
        event.stopPropagation();

        if (hasDropdown) {
            /**
             * button-dropdown-link-container
             */
            const $buttonContainer = $(event.currentTarget).closest(`.${componentClassPrefix}-container`);
            if ($buttonContainer.length) {
                // Toggle dropdown state in container element
                $buttonContainer.toggleClass(state.dropdown.opened).toggleClass(state.dropdown.closed);

            }
            
            /**
             * custom-dropdown-menu
            */
           const $dropdownMenu = $buttonContainer.siblings('.custom-dropdown-menu');

            if ($dropdownMenu.length) {
                $dropdownMenu.toggleClass(state.dropdownMenu.opened).toggleClass(state.dropdownMenu.closed);
            }

            // Toggle chevron icon direction
            $(event.currentTarget).find('i').toggleClass('fa-chevron-right').toggleClass('fa-chevron-down');
        }

        onclick();
    }

    return $(`
        <div class="${componentClassPrefix}-container ${hasDropdown ? state.dropdown.closed : ''}">
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
        <div class="custom-dropdown-menu ${hasDropdown ? state.dropdownMenu.closed : ''}">
            ${DropdownComponent(dropdown)}
        </div>
    `).on('click', `.${componentClassPrefix}`, toggleDropdown);
}

const DropdownItemPropTypes = {
    value: PropTypes.string,
    href: PropTypes.string,
    onclick: PropTypes.func,
    href: PropTypes.string,
};

const DropdownPropTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(DropdownItemPropTypes)),
};

renderButtonDropdownLink.propTypes = {
    value: PropTypes.string,
    onclick: PropTypes.func,
    dropdown: PropTypes.arrayOf(DropdownPropTypes),
};
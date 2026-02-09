import { generateElementId } from "../util/generate-element-id.js";
import { ChevronIcon } from "./chevron-icon.js";
import { DropdownComponent } from './dropdown.js';

jQuery.fn.animateAuto = function (prop, speed, callback) {
    var elem, height, width;
    return this.each(function (i, el) {
        el = jQuery(el), elem = el.clone().css({ "height": "auto", "width": "auto" }).appendTo("body");
        height = elem.css("height"),
            width = elem.css("width"),
            elem.remove();

        if (prop === "height")
            el.animate({ "height": height }, speed, callback);
        else if (prop === "width")
            el.animate({ "width": width }, speed, callback);
        else if (prop === "both")
            el.animate({ "width": width, "height": height }, speed, callback);
    });
}

/**
 * @param {import('../type/types.js').ButtonDropdownLinkProps} props - properties for button-dropdown-link component
 * @returns {string} HTML string for button-dropdown-link component
 */
export function renderButtonDropdownLink(props) {
    const { value, onclick, dropdown, } = props;

    const componentClassPrefix = 'button-dropdown-link';
    const hasDropdown = dropdown && dropdown.length > 0;
    const dropdownState = {
        opened: 'dropdown-opened',
        closed: 'dropdown-closed',
    }

    const buttonId = generateElementId(componentClassPrefix);
    const icon = hasDropdown ? ChevronIcon('right') : '';

    function toggleDropdown(e) {
        e.stopPropagation();
        if (hasDropdown) {
            // Toggle dropdown state in container element
            const container = $(e.currentTarget).closest(`.${componentClassPrefix}-container`);
            container.toggleClass(dropdownState.opened).toggleClass(dropdownState.closed);

            // Toggle icon direction based on dropdown state
            const isOpen = container.hasClass(dropdownState.opened);
            const newIconDirection = isOpen ? 'down' : 'right';
            $(`#${buttonId}`).find('i').attr('class', `fas fa-chevron-${newIconDirection}`);

          
            if (isOpen && container.find('.custom-dropdown-menu').length === 0) {
                container.append(DropdownComponent(dropdown));
                return;
            }

            container.find('.custom-dropdown-menu').toggleClass('menu-opened').toggleClass('menu-closed');
        }

        onclick();
    }

    return $(`
        <div class="${componentClassPrefix}-container ${hasDropdown ? dropdownState.closed : ''}">
            <button
                class="${componentClassPrefix}"
                id="${buttonId}"
                type="button"
                aria-expanded="false"
            >
                ${icon}
                <p>${value}</p>
            </button>
        </div>
    `).on('click', `.${componentClassPrefix}`, toggleDropdown);
}

const DropdownItemPropTypes = {
    value: PropTypes.string,
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
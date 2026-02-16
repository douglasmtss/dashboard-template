import { generateElementId } from '../util/generate-element-id.js'
import { renderButtonDropdownLink } from '../component/button-dropdown-link.js'

/**
 *
 * @param {jQuery} $container
 * @param {import('../type/types.js').SidebarConfigPropTypes} sidebarConfig
 * @returns
 */
export function renderSidebar($container, sidebarConfig) {
    if (!$container || $container?.length === 0) {
        console.error('Sidebar container not found')
        return
    }

    const container = $container[0] // Get the DOM element from jQuery object

    container.innerHTML = `
        <div class="p-3 flex-column gap-4">
            <img src=${sidebarConfig.img} class="img-fluid mb-3" alt="Logo">
            <h5>${sidebarConfig.title}</h5>
            <ul class="nav flex-column gap-3">
                <!-- Menu items should be dynamically inserted here -->
            </ul>
        </div>
    `

    sidebarConfig.items.forEach((item, index) => {
        const itemId = generateElementId(`sidebar-item-${index}`)
        const itemHTML = `
            <li class="nav-item">
                <div id="${itemId}"></div>
            </li>
        `

        container.querySelector('.nav').insertAdjacentHTML('beforeend', itemHTML)

        $(`#${itemId}`, container).html(
            renderButtonDropdownLink({
                value: item.value,
                onclick: item.onclick,
                dropdown: item.dropdown,
            }),
        )
    })
}

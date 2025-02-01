import Alpine from 'alpinejs'
import AlpineCollapse from '@alpinejs/collapse'
import AlpineAnchor from '@alpinejs/anchor'
import AlpineResize from '@alpinejs/resize'
import kuiPlugin, { kuiLayout } from '@kui-dashboard/alpinejs-plugin'

Alpine.plugin(AlpineCollapse)
Alpine.plugin(AlpineAnchor)
Alpine.plugin(AlpineResize)
Alpine.plugin(kuiLayout)
Alpine.plugin(kuiPlugin)

export default Alpine

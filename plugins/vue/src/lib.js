import * as components from './components'

export { Button as KuiButton } from './components'

function install(Vue) {
    for (const component in components) {
        Vue.component(`Kui${component}`, components[component])
    }
}

export default install

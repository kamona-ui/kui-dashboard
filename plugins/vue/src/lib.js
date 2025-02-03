import * as components from './components'

export { Button as KuiButton } from './components'
export { Input as KuiInput } from './components'
export { Checkbox as KuiCheckbox } from './components'
export { DatePicker as KuiDatePicker } from './components'
export { Label as KuiLabel } from './components'

function install(Vue) {
    for (const component in components) {
        Vue.component(`Kui${component}`, components[component])
    }
}

export default install

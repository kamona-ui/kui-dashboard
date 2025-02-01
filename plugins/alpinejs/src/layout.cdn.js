import { layout } from '.'

document.addEventListener('alpine:init', () => {
    window.Alpine.plugin(layout)
})

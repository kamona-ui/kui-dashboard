import plugin from '.'

document.addEventListener('alpine:init', () => {
    window.Alpine.plugin(plugin)
})

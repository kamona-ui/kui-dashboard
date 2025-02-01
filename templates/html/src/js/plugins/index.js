import tabs from './tabs'
import toast from './toast'
import layout from './layout'
import dropdown from './dropdown'
import disclosure from './disclosure'
import perfectScroll from './perfectScroll'

export default function (Alpine) {
    tabs(Alpine)
    toast(Alpine)
    layout(Alpine)
    dropdown(Alpine)
    disclosure(Alpine)
    perfectScroll(Alpine)
}

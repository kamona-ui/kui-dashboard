import _layout from './plugins/layout'
import dropdown from './plugins/dropdown'
import accordion from './plugins/accordion'
import disclosure from './plugins/disclosure'
import perfectScroll from './plugins/perfectScroll'

export function layout(Alpine) {
    _layout(Alpine)
}

export default function (Alpine) {
    dropdown(Alpine)
    accordion(Alpine)
    disclosure(Alpine)
    perfectScroll(Alpine)
}

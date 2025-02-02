const baseSizes = ['sm', 'base', 'lg']
const baseShapes = ['square', 'rounded', 'pill', 'circle']
const baseVariants = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
    'white',
    'black',
]
const basePositions = ['tr', 'tl', 'br', 'bl']

const sizeProp = ({ defaultSizes = 'base', sizes = baseSizes } = {}) => ({
    type: String,
    default: defaultSizes,
    validator(value) {
        return sizes.includes(value)
    },
})

const shapeProp = ({ defaultShape = 'rounded', shapes = baseShapes } = {}) => ({
    type: String,
    default: defaultShape,
    validator(value) {
        return shapes.includes(value)
    },
})

const positionProp = ({
    defaultShape = 'tr',
    positions = basePositions,
} = {}) => ({
    type: String,
    default: defaultShape,
    validator(value) {
        return positions.includes(value)
    },
})

const variantProp = ({
    defaultVariant = 'primary',
    variants = baseVariants,
} = {}) => ({
    type: String,
    default: defaultVariant,
    validator(value) {
        return variants.includes(value)
    },
})

export {
    baseSizes as sizes,
    baseShapes as shapes,
    baseVariants as variants,
    basePositions as positions,
    sizeProp,
    shapeProp,
    variantProp,
    positionProp,
}

import { defineComponent, toRefs, useAttrs, resolveComponent } from 'vue'
import { sizeProp, variantProp, variants } from '@/support'
import { twMerge } from 'tailwind-merge'

export const baseButtonProps = {
    variant: variantProp({ variants: [...variants, 'link', 'transparent'] }),
    size: sizeProp(),
    outline: {
        type: Boolean,
        default: false,
    },
}

const colorClasses = {
    primary: {
        default: 'focus:ring-primary',
        filled: {
            normal: 'bg-primary text-white hover:bg-primary-dark',
            active: 'bg-primary-dark',
        },
        outline: {
            normal: 'border border-primary text-primary hover:bg-primary-light hover:text-white',
            active: 'bg-primary-lighter',
        },
    },
    success: {
        default: 'focus:ring-success',
        filled: {
            normal: 'bg-success text-white hover:bg-success-dark',
            active: 'bg-success-dark',
        },
        outline: {
            normal: 'border border-success text-success hover:bg-success-light hover:text-white',
            active: 'bg-success-lighter',
        },
    },
    info: {
        default: 'focus:ring-info',
        filled: {
            normal: 'bg-info text-white hover:bg-info-dark',
            active: 'bg-info-dark',
        },
        outline: {
            normal: 'border border-info text-info hover:bg-info-light hover:text-white',
            active: 'bg-info-lighter',
        },
    },
    warning: {
        default: 'focus:ring-warning',
        filled: {
            normal: 'bg-warning text-white hover:bg-warning-dark',
            active: 'bg-warning-dark',
        },
        outline: {
            normal: 'border border-warning text-warning hover:bg-warning-light hover:text-white',
            active: 'bg-warning-lighter',
        },
    },
    danger: {
        default: 'focus:ring-danger',
        filled: {
            normal: 'bg-danger text-white hover:bg-danger-dark',
            active: 'bg-danger-dark',
        },
        outline: {
            normal: 'border border-danger text-danger hover:bg-danger-light hover:text-white',
            active: 'bg-danger-lighter',
        },
    },
    white: {
        default: 'focus:ring-white',
        filled: {
            normal: 'bg-white text-gray-700 hover:bg-gray-200',
        },
        outline: {
            normal: 'border border-white text-white hover:bg-white hover:text-gray-800',
        },
    },
    black: {
        default: 'focus:ring-black',
        filled: {
            normal: 'bg-black text-gray-300 hover:text-white hover:bg-gray-800',
            active: 'bg-gray-800',
        },
        outline: {
            normal: 'border border-black text-black hover:bg-black hover:text-white',
            active: 'bg-black',
        },
    },
    link: {
        default:
            'focus:ring-blue-500 underline text-blue-600 hover:text-blue-500',
        filled: {
            normal: '',
            active: '',
        },
        outline: {
            normal: 'border border-blue-500',
            active: '',
        },
    },
    transparent: {
        default: 'focus:ring-primary text-gray-700 dark:text-gray-300',
        filled: {
            normal: 'hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-dark-1',
            active: '',
        },
        outline: {
            normal: 'hover:text-gray-800',
            active: '',
        },
    },
}

export default defineComponent({
    props: {
        ...baseButtonProps,
        type: {
            type: String,
            default: 'button',
        },
        squared: {
            type: Boolean,
            default: false,
        },
        pill: {
            type: Boolean,
            default: false,
        },
        href: {
            type: String || undefined,
            default: undefined,
        },
        to: {
            type: [String, Object, undefined],
            default: undefined,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        srText: {
            type: String || undefined,
            default: undefined,
        },
        text: {
            type: String || undefined,
            default: undefined,
        },
        icon: {
            type: String || undefined,
            default: undefined,
        },
        startIcon: {
            type: String || undefined,
            default: undefined,
        },
        endIcon: {
            type: String || undefined,
            default: undefined,
        },
        external: {
            type: Boolean,
            default: false,
        },
        block: {
            type: Boolean,
            default: false,
        },
        active: {
            type: Boolean,
            default: false,
        },
    },

    emits: ['click'],

    setup(props, { slots, emit, attrs }) {
        const {
            type,
            variant,
            size,
            squared,
            pill,
            href,
            to,
            srText,
            external,
            outline,
            block,
        } = props

        const { disabled, text, startIcon, endIcon, icon, active } =
            toRefs(props)

        const isLink = href || to ? true : false
        const LinkComponent = href
            ? href && !external
                ? resolveComponent('Link')
                : 'a'
            : to && !external
              ? resolveComponent('router-link')
              : 'a'
        const Tag = isLink ? LinkComponent : 'button'

        const baseClasses =
            'inline-flex items-center justify-center gap-1 transition-colors font-medium select-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-2'

        const classes = twMerge(
            baseClasses,
            block && 'w-full',
            colorClasses[variant]['default'],
            active.value
                ? colorClasses[variant][outline ? 'outline' : 'filled'][
                      'active'
                  ]
                : colorClasses[variant][outline ? 'outline' : 'filled'][
                      'normal'
                  ],
            !squared && !pill && 'rounded-md',
            pill && 'rounded-full',
            href && disabled.value && 'pointer-events-none opacity-50',
            size == 'sm' && (icon.value ? 'p-1.5' : 'px-2.5 py-1.5 text-sm'),
            size == 'base' && (icon.value ? 'p-2' : 'px-4 py-2'),
            size == 'lg' && (icon.value ? 'p-3' : 'px-5 py-2 text-xl'),
            useAttrs().class,
        )

        const iconSizeClasses = [
            {
                'w-5 h-5': size == 'sm',
                'w-6 h-6': size == 'base',
                'w-7 h-7': size == 'lg',
            },
        ]

        const handleClick = (e) => {
            if (disabled.value) {
                e.preventDefault()
                e.stopPropagation()
                return
            }
            emit('click', e)
        }

        const InnerNodes = () => (
            <>
                {srText && <span class="sr-only">{srText}</span>}
                {icon.value && (
                    <span
                        aria-hidden="true"
                        class={['iconify', icon.value, iconSizeClasses]}
                    ></span>
                )}
                {startIcon.value && (
                    <span
                        aria-hidden="true"
                        class={['iconify', startIcon.value, iconSizeClasses]}
                    ></span>
                )}
                {text.value && <span>{text.value}</span>}
                {slots.default?.({ iconSizeClasses })}
                {endIcon.value && (
                    <span
                        aria-hidden="true"
                        class={['iconify', endIcon.value, iconSizeClasses]}
                    ></span>
                )}
            </>
        )

        const linkAttributeName = href ? 'href' : 'to'
        const linkAttributeValuue = href
            ? !disabled.value
                ? href
                : null
            : !disabled.value
              ? to
              : '#'

        if (Tag == 'button') {
            return () => (
                <button
                    onClick={handleClick}
                    type={type}
                    class={classes}
                    disabled={disabled.value}
                    {...attrs}
                >
                    {InnerNodes()}
                </button>
            )
        } else {
            return () => (
                <Tag
                    {...{ [linkAttributeName]: linkAttributeValuue }}
                    class={classes}
                    aria-disabled={disabled.value.toString()}
                    target={external ? '_blank' : null}
                    {...attrs}
                >
                    {InnerNodes()}
                </Tag>
            )
        }
    },
})

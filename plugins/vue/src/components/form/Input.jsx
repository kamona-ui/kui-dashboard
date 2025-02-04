import { defineComponent, useAttrs, ref } from 'vue'
import Label from './Label'
import { sizeProp, shapeProp, variantProp, shapes } from '@/support'
import { twJoin, twMerge } from 'tailwind-merge'

export const inputBaseClasses =
    'w-full focus:ring focus:ring-offset-2 focus:ring-offset-white dark:bg-dark-1 dark:text-gray-300 dark:focus:ring-offset-dark-1'

const inputSizeClasses = {
    sm: 'py-1 text-sm',
    base: 'py-2 text-base',
    lg: 'py-4 text-xl',
}

export const inputVariantClasses = {
    primary:
        'border-gray-400 focus:ring-primary focus:border-primary dark:border-gray-600',
    success:
        'border-success-light focus:ring-success focus:border-success dark:border-gray-600',
    info: 'border-info-light focus:ring-info focus:border-info dark:border-gray-600',
    warning:
        'border-warning-light focus:ring-warning focus:border-warning dark:border-gray-600',
    danger: 'border-danger-light focus:ring-danger focus:border-danger dark:border-gray-600',
    black: 'border-black focus:ring-black focus:border-black dark:border-gray-600',
}

export const baseInputProps = {
    variant: variantProp({}),
    size: sizeProp(),
    shape: shapeProp({ shapes: shapes.filter((s) => s != 'circle') }),
}

const BaseInput = defineComponent({
    props: {
        ...baseInputProps,
        modelValue: String,
        icon: {
            type: [String, undefined],
            default: undefined,
        },
        type: {
            type: String,
            default: 'text',
        },
        hasError: {
            type: [Boolean, String],
            default: false,
        },
        rows: {
            type: String,
            default: '6',
        },
        // block: {
        //     type: Boolean,
        //     default: false,
        // },
    },

    emits: ['update:modelValue'],

    setup(props, { emit, attrs, expose }) {
        const input = ref()

        const focus = () => {
            input.value?.focus()
        }

        expose({
            input,
            focus,
        })

        const classes = twJoin([
            inputBaseClasses,
            inputVariantClasses[props.variant],
            inputSizeClasses[props.size],
            props.shape == 'square' && 'rounded-none',
            props.shape == 'rounded' && 'rounded-md',
            props.shape == 'pill' && 'rounded-full',
            props.size == 'sm' &&
                (props.icon ? 'pl-8 pr-2 rtl:pl-2 rtl:pr-8' : 'px-2'),
            props.size == 'base' &&
                (props.icon ? 'pl-10 pr-4 rtl:pl-4 rtl:pr-10' : 'px-4'),
            props.size == 'lg' &&
                (props.icon ? 'pl-12 pr-6 rtl:pl-6 rtl:pr-12' : 'px-6'),
        ])

        if (props.type == 'textarea') {
            return () => (
                <textarea
                    {...attrs}
                    type={props.type}
                    rows={props.rows}
                    class={twMerge([
                        classes,
                        props.hasError && 'border-danger dark:border-danger',
                        useAttrs().class,
                    ])}
                    value={props.modelValue}
                    onInput={(e) => {
                        emit('update:modelValue', e.target.value)
                    }}
                    ref={input}
                ></textarea>
            )
        }
        return () => (
            <input
                {...attrs}
                type={props.type}
                class={twMerge([
                    classes,
                    props.hasError && 'border-danger dark:border-danger',
                    useAttrs().class,
                ])}
                value={props.modelValue}
                onInput={(e) => {
                    emit('update:modelValue', e.target.value)
                }}
                ref={input}
            />
        )
    },
})

const HelperMessage = defineComponent({
    props: {
        message: String,
    },

    setup(props, { attrs }) {
        return () => (
            <>
                {props.message && (
                    <p
                        {...attrs}
                        class="text-sm text-gray-600 dark:text-gray-300"
                    >
                        {props.message}
                    </p>
                )}
            </>
        )
    },
})

const ErrorMessage = defineComponent({
    props: {
        message: String,
    },

    setup(props) {
        return () => (
            <>
                {props.message && (
                    <p class="text-sm text-danger-dark">{props.message}</p>
                )}
            </>
        )
    },
})

const Header = defineComponent({
    props: {
        label: {
            type: [String, undefined],
            default: undefined,
        },

        helperMessage: {
            type: [String, undefined],
            default: undefined,
        },
    },

    setup(props) {
        return () => (
            <div
                class={[
                    'flex w-full items-center gap-2',
                    props.label ? 'justify-between' : 'justify-end',
                ]}
            >
                {props.label && <Label value={props.label} />}

                {props.helperMessage && (
                    <HelperMessage message={props.helperMessage} />
                )}
            </div>
        )
    },
})

export const InputIconWrapper = defineComponent({
    props: {
        size: sizeProp(),
        type: {
            type: String,
            default: 'text',
        },
        icon: {
            type: [String, undefined],
            default: undefined,
        },
    },

    inheritAttrs: false,

    setup(props, { slots }) {
        const iconSizeClasses = {
            sm: 'w-3 h-3',
            base: 'w-5 h-5',
            lg: 'w-7 h-7',
        }

        return () => (
            <div class="relative text-gray-500 focus-within:text-gray-900 dark:focus-within:text-gray-400">
                <div
                    aria-hidden="true"
                    class={[
                        'pointer-events-none absolute inset-y-0 flex px-4',
                        {
                            'items-center': props.type != 'textarea',
                            'items-start py-4': props.type == 'textarea',
                        },
                    ]}
                >
                    <span
                        class={[
                            'iconify',
                            props.icon,
                            iconSizeClasses[props.size],
                        ]}
                    ></span>
                </div>

                {slots.default?.()}
            </div>
        )
    },
})

export default defineComponent({
    props: {
        size: sizeProp(),
        icon: {
            type: [String, undefined],
            default: undefined,
        },
        type: {
            type: String,
            default: 'text',
        },
        label: {
            type: [String, undefined],
            default: undefined,
        },
        helperMessage: {
            type: [String, undefined],
            default: undefined,
        },
        errorMessage: {
            type: [String, Boolean],
            default: false,
        },
    },

    inheritAttrs: false,

    setup(props, { attrs, expose }) {
        const input = ref()

        const focus = () => {
            input.value?.focus()
        }

        expose({
            input,
            focus,
        })

        if (props.icon) {
            return () => (
                <div class="w-full space-y-2">
                    <Header
                        label={props.label}
                        helperMessage={props.helperMessage}
                    />

                    <InputIconWrapper
                        size={props.size}
                        icon={props.icon}
                        type={props.type}
                    >
                        <BaseInput
                            type={props.type}
                            icon={props.icon}
                            size={props.size}
                            ref={input}
                            {...attrs}
                        />
                    </InputIconWrapper>

                    {props.errorMessage && (
                        <ErrorMessage message={props.errorMessage} />
                    )}
                </div>
            )
        }

        return () => (
            <div class="w-full space-y-2">
                <Header
                    label={props.label}
                    helperMessage={props.helperMessage}
                />

                {props.helperMessage && (
                    <HelperMessage message={props.helperMessage} />
                )}

                <BaseInput
                    type={props.type}
                    icon={props.icon}
                    size={props.size}
                    ref={input}
                    {...attrs}
                />

                {props.errorMessage && (
                    <ErrorMessage message={props.errorMessage} />
                )}
            </div>
        )
    },
})

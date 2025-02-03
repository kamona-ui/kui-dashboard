import { defineComponent, ref } from 'vue'
import Label from './Label'
import { baseInputProps } from './Input'

export default defineComponent({
    props: {
        ...baseInputProps,
        checked: {
            type: [Array, Boolean],
            default: false,
        },
        value: {
            default: null,
        },
        label: {
            type: [String, undefined],
            default: undefined,
        },
    },

    inheritAttrs: false,

    emits: ['update:checked'],

    setup(props, { emit, attrs, slots }) {
        const { value, checked, label } = props

        const isChecked = ref(checked)

        return () => (
            <Label class="inline-flex items-center gap-2">
                <input
                    {...attrs}
                    type="checkbox"
                    class={[
                        'focus:ring',
                        'rounded',
                        'text-primary',
                        'border-gray-400',
                        'focus:border-primary-300 focus:ring-primary',
                        'dark:border-gray-600',
                        'dark:bg-dark-1',
                        'dark:focus:ring-offset-dark-1',
                        'checked:bg-primary dark:checked:bg-primary',
                        {
                            'transform scale-110': props.size == 'sm',
                            'transform scale-125': props.size == 'base',
                            'transform scale-150': props.size == 'lg',
                        },
                    ]}
                    value={value}
                    v-model={isChecked.value}
                    onChange={() => {
                        emit('update:checked', isChecked.value)
                    }}
                />

                {label && <span class="text-sm">{label}</span>}
                {slots.default?.()}
            </Label>
        )
    },
})

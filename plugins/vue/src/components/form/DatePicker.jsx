import { defineComponent, onMounted, ref } from 'vue'
import flatpickr from 'flatpickr'
import Input from './Input'

export default defineComponent({
    props: {
        modelValue: String,

        options: {
            type: Object,
            required: false,
        },
    },

    emits: ['update:modelValue'],

    setup(props, { emit, attrs }) {
        const input = ref()

        onMounted(() => {
            if (input.value) {
                flatpickr(input.value?.input?.$el, props.options)
            }
        })

        return () => (
            <Input
                value={props.modelValue}
                onInput={(e) => {
                    emit('update:modelValue', e.target.value)
                }}
                ref={input}
                {...attrs}
            />
        )
    },
})

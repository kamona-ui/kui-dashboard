import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        checked: {
            type: [Array, Boolean],
            default: false,
        },
        value: {
            default: null,
        },
    },

    emits: ['update:checked'],

    setup(props, { emit }) {
        const { value, checked } = props

        const isChecked = ref(checked)

        return () => (
            <input
                type="checkbox"
                value={value}
                v-model={isChecked.value}
                onChange={() => {
                    emit('update:checked', isChecked.value)
                }}
                class="rounded border-gray-300 text-primary focus:border-purple-300 focus:ring focus:ring-primary dark:border-gray-600 dark:bg-dark-1 dark:focus:ring-offset-dark-1"
            />
        )
    },
})

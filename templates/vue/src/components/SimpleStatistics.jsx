import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        icon: String,
        title: String,
        note: String,
        color: String,
    },

    setup(props){
        return () => (
            <div class="rounded-md bg-white p-4 shadow-md dark:bg-dark-1">
                <div class="flex items-center gap-4">
                    <div 
                        class={[
                            'p-2 flex-shrink-0 flex items-center justify-center rounded-md',
                            props.color
                        ]}
                    >
                        <span class={['iconify text-white w-6 h-6', props.icon]}></span>
                    </div>

                    <div class="flex-1">
                        <h4 class="text-xl font-medium">{props.title}</h4>

                        <p class="text-sm font-medium text-gray-500">{props.note}</p>
                    </div>
                </div>
            </div>
        )
    }
})
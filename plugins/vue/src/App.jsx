import { defineComponent } from 'vue'
import { Button } from './components'

const baseVariants = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
    'white',
    'black',
    'transparent',
]

export default defineComponent({
    setup() {
        return () => (
            <div class="space-y-8 bg-gray-100 p-10">
                <div class="grid gap-4">
                    <div class="flex flex-wrap items-center gap-4">
                        {baseVariants.map((v, i) => (
                            <Button variant={v} text="Home" key={i} />
                        ))}
                    </div>

                    <div class="flex flex-wrap items-center gap-4">
                        {baseVariants.map((v, i) => (
                            <Button outline variant={v} text="Home" key={i} />
                        ))}
                    </div>
                </div>

                <div class="grid gap-4">
                    <div class="flex flex-wrap items-center gap-4">
                        {baseVariants.map((v, i) => (
                            <Button variant={v} icon="tabler--home" key={i} />
                        ))}
                    </div>

                    <div class="flex flex-wrap items-center gap-4">
                        {baseVariants.map((v, i) => (
                            <Button
                                outline
                                variant={v}
                                icon="tabler--home"
                                key={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    },
})

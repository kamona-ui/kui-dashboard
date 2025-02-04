import { defineComponent, ref } from 'vue'
import { Button, DatePicker, Input } from './components'

const buttonVariants = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
    'white',
    'black',
    'transparent',
]

const inputVariants = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
    'black',
]

export default defineComponent({
    setup() {
        const today = ref()

        return () => (
            <div class="min-h-screen space-y-8 bg-gray-100 p-10">
                <div class="grid gap-4">
                    <div class="flex flex-wrap items-center gap-4">
                        {buttonVariants.map((v, i) => (
                            <Button variant={v} text="Home" key={i} />
                        ))}
                    </div>

                    <div class="flex flex-wrap items-center gap-4">
                        {buttonVariants.map((v, i) => (
                            <Button outline variant={v} text="Home" key={i} />
                        ))}
                    </div>
                </div>

                <div class="grid gap-4">
                    <div class="flex flex-wrap items-center gap-4">
                        {buttonVariants.map((v, i) => (
                            <Button variant={v} icon="tabler--home" key={i} />
                        ))}
                    </div>

                    <div class="flex flex-wrap items-center gap-4">
                        {buttonVariants.map((v, i) => (
                            <Button
                                outline
                                variant={v}
                                icon="tabler--home"
                                key={i}
                            />
                        ))}
                    </div>
                </div>

                <div class="grid gap-4">
                    {inputVariants.map((v, i) => (
                        <Input
                            key={i}
                            variant={v}
                            label="User name"
                            icon="tabler--user"
                            placeholder="User name"
                        />
                    ))}
                </div>

                <div class="grid gap-4">
                    <DatePicker
                        label="Date"
                        icon="tabler--calendar"
                        placeholder="Date"
                        v-model={today.value}
                        helper-message={today.value}
                    />

                    <DatePicker
                        label="Date"
                        placeholder="Date"
                        v-model={today.value}
                        helper-message={today.value}
                    />
                </div>
            </div>
        )
    },
})

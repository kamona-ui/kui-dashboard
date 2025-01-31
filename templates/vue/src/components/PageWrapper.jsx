import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        mainTitle: String,
        title: String,
    },

    setup(props, { slots }) {
        return () => (
            <>
                {(slots.header || props.title) && (
                    <header class="flex w-full flex-shrink-0 flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        {slots.header ? (
                            slots.header()
                        ) : (
                            <h2 class="text-xl font-semibold leading-tight">
                                {props.title}
                            </h2>
                        )}
                    </header>
                )}

                <div class="flex w-full items-start gap-2 rounded-lg border border-transparent bg-warning p-4 text-white">
                    <span
                        aria-hidden="true"
                        class="iconify h-6 w-6 tabler--alert-triangle"
                    ></span>

                    <div>
                        <h5 class="mb-1 font-medium leading-none tracking-tight">
                            Alert
                        </h5>
                        <div>This template is not finished yet.</div>
                    </div>
                </div>

                <main class="w-full flex-1">
                    {props.mainTitle && (
                        <h1 class="sr-only">{props.mainTitle}</h1>
                    )}

                    {slots.default?.()}
                </main>
            </>
        )
    },
})

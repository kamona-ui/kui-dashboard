import { defineComponent } from 'vue'
import PageHeader from './PageHeader'
import { RouterLink } from 'vue-router'

export default defineComponent({
    props: {
        mainTitle: String,
        title: String,
        breadcrumb: {
            type: Array,
            default: [],
        },
    },

    setup(props, { slots }) {
        return () => (
            <>
                <div class="flex w-full flex-shrink-0 flex-col gap-2">
                    {props.breadcrumb.length !== 0 && (
                        <nav class="flex" aria-label="Breadcrumb">
                            <ol class="inline-flex items-center gap-x-1 md:gap-x-2">
                                {props.breadcrumb.map((b, i) => (
                                    <li
                                        class="inline-flex items-center gap-2"
                                        aria-current={
                                            i === props.breadcrumb.length - 1
                                                ? 'page'
                                                : null
                                        }
                                    >
                                        {b.url ? (
                                            <>
                                                <RouterLink
                                                    to={b.url}
                                                    class="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                                >
                                                    {b.icon && (
                                                        <span
                                                            class={[
                                                                'iconify h-4 w-4',
                                                                b.icon,
                                                            ]}
                                                        ></span>
                                                    )}

                                                    <span>{b.title}</span>
                                                </RouterLink>

                                                {i !==
                                                    props.breadcrumb.length -
                                                        1 && (
                                                    <span class="iconify h-5 w-5 text-gray-400 tabler--chevron-right rtl:rotate-180"></span>
                                                )}
                                            </>
                                        ) : (
                                            <span class="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                {b.icon && (
                                                    <span
                                                        class={[
                                                            'iconify h-4 w-4',
                                                            b.icon,
                                                        ]}
                                                    ></span>
                                                )}
                                                <span>{b.title}</span>
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    )}
                    {(slots.header || props.title) && (
                        <header class="flex w-full flex-shrink-0 flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            {slots.header ? (
                                slots.header()
                            ) : (
                                <PageHeader title={props.title} />
                            )}
                        </header>
                    )}
                </div>

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

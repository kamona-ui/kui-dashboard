import { defineComponent, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import Logo from '@/components/Logo'
import { HtmlIcon, VueJsIcon, LaravelIcon } from '@/components/icons/brands'
import {
    handleScroll,
    isDark,
    scrolling,
    toggleDarkMode,
    isMobileMenuOpen,
} from '@/composables'
import desktopLight from '@/assets/images/showcase/desktop-light.svg'
import desktopDark from '@/assets/images/showcase/desktop-dark.svg'
import mobileDark from '@/assets/images/showcase/mobile-dark.svg'
import mobileDark2 from '@/assets/images/showcase/mobile-dark-2.svg'
import mobileLight from '@/assets/images/showcase/mobile-light.svg'
import mobileLight2 from '@/assets/images/showcase/mobile-light-2.svg'
import { KuiButton } from '@kui-dashboard/vue-plugin'
import PageFooter from '@/components/PageFooter'

const Navbar = defineComponent({
    setup() {
        onMounted(() => {
            window.addEventListener('scroll', handleScroll)
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll)
        })

        return () => (
            <nav
                class={[
                    'fixed inset-x-0 bottom-0 z-20 transition-all duration-500 md:bottom-auto md:top-0',
                    {
                        'translate-y-full bg-white shadow-t-lg dark:bg-gray-700 md:-translate-y-full md:shadow-lg':
                            scrolling.down,
                        'bg-white shadow-t-lg dark:bg-gray-700 md:shadow-lg':
                            scrolling.up,
                    },
                ]}
            >
                <div
                    class={[
                        'relative mx-auto flex max-w-7xl items-center justify-between p-4 md:h-24',
                        {
                            'bg-white shadow-t-lg dark:bg-gray-700':
                                isMobileMenuOpen.value,
                        },
                    ]}
                >
                    {/* Logo */}
                    <a
                        href="#"
                        class="inline-block rounded-md bg-white p-2 dark:bg-dark-1"
                    >
                        <span class="sr-only">Home</span>
                        <Logo class="h-auto w-10 md:w-12" />
                    </a>

                    {/* Dark mode button */}
                    <KuiButton
                        onClick={() => {
                            toggleDarkMode()
                        }}
                        variant="black"
                        icon={!isDark.value ? 'tabler--moon' : 'tabler--sun'}
                    />
                </div>
            </nav>
        )
    },
})

const CTAButtons = defineComponent({
    setup() {
        return () => (
            <div class="flex flex-col items-center justify-center gap-6 lg:flex-row">
                <KuiButton external href="html/index.html" variant="black">
                    {({ iconSizeClasses }) => (
                        <>
                            <HtmlIcon
                                aria-hidden="true"
                                class={[iconSizeClasses]}
                            />

                            <span class="whitespace-nowrap">Html</span>
                        </>
                    )}
                </KuiButton>

                <KuiButton external href="vue/index.html" variant="black">
                    {({ iconSizeClasses }) => (
                        <>
                            <VueJsIcon
                                aria-hidden="true"
                                class={[iconSizeClasses]}
                            />

                            <span class="whitespace-nowrap">Vue</span>
                        </>
                    )}
                </KuiButton>

                <KuiButton
                    external
                    href="https://github.com/kamona-wd/kui-laravel-breeze"
                    variant="black"
                >
                    {({ iconSizeClasses }) => (
                        <>
                            <LaravelIcon
                                aria-hidden="true"
                                class={[iconSizeClasses]}
                            />

                            <span class="whitespace-nowrap">Laravel</span>
                        </>
                    )}
                </KuiButton>
            </div>
        )
    },
})

export default defineComponent({
    setup() {
        onMounted(() => {
            gsap.from(['#mobile2Showcase', '#mobile1Showcase'], {
                rotateZ: 0,
                rotateY: 0,
                rotateX: 0,
                duration: 2,
            })

            gsap.from(['#desktopShowcase'], {
                rotateZ: 0,
                rotateY: 0,
                rotateX: 0,
                duration: 2,
            })
        })

        return () => (
            <div class="min-h-screen dark:bg-dark-0">
                <Navbar />

                <main>
                    <h1 class="sr-only">K UI Dashboard Template</h1>

                    {/* Introsection */}
                    <section class="relative min-h-screen overflow-hidden bg-gradient-to-tr from-purple-500 via-blue-300 to-indigo-400 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-800">
                        <h2 class="sr-only">Showcase</h2>

                        {/* Background */}
                        <div class="absolute inset-x-[-10vw] bottom-20 top-0 rounded-[77vw/50vw] rounded-t-none bg-white dark:bg-dark-0 md:bottom-0 md:top-24 md:rounded-[77vw/50vw] md:rounded-b-none"></div>

                        <div class="mx-auto max-w-7xl px-6 pb-24 md:pt-28">
                            <div class="grid gap-5 perspective-100vw md:grid-cols-4 md:grid-rows-1">
                                {/* Left */}
                                <div class="hidden items-center justify-center transform-style-3d md:flex">
                                    <div
                                        id="mobile2Showcase"
                                        class="flex h-full w-full items-center justify-center rotate-x-25 rotate-y-25 rotate-z--15"
                                    >
                                        <img
                                            v-show={!isDark.value}
                                            src={mobileLight2}
                                            class="h-auto w-[70%] drop-shadow-2xl"
                                        />
                                        <img
                                            v-show={isDark.value}
                                            src={mobileDark2}
                                            class="h-auto w-[70%] drop-shadow-2xl"
                                        />
                                    </div>
                                </div>

                                {/* Center */}
                                <div class="md:pb-18 col-span-3 row-start-2 flex flex-col items-center justify-center gap-10 transform-style-3d md:col-span-2 md:col-start-2 md:row-start-1">
                                    <div class="mt-10 flex items-center justify-center transform-style-3d md:mt-4">
                                        <img
                                            v-show={!isDark.value}
                                            id="desktopShowcase"
                                            class="w-[75%] rotate-x-15 md:w-full"
                                            src={desktopLight}
                                            alt="Desktop showcase"
                                        />
                                        <img
                                            v-show={isDark.value}
                                            id="desktopShowcase"
                                            class="w-[75%] rotate-x-15 md:w-full"
                                            src={desktopDark}
                                            alt="Desktop showcase"
                                        />
                                    </div>

                                    <CTAButtons />

                                    <KuiButton
                                        external
                                        href="https://github.com/kamona-ui/kui-dashboard"
                                        variant="black"
                                        start-icon="tabler--brand-github"
                                        text="Star on github"
                                    />
                                </div>

                                {/* Right */}
                                <div class="hidden items-center justify-center transform-style-3d md:flex">
                                    <div
                                        id="mobile1Showcase"
                                        class="flex h-full w-full items-center justify-center rotate-x-25 rotate-y--25 rotate-z-15"
                                    >
                                        <img
                                            v-show={!isDark.value}
                                            src={mobileLight}
                                            class="h-auto w-[70%] drop-shadow-2xl"
                                        />
                                        <img
                                            v-show={isDark.value}
                                            src={mobileDark}
                                            class="h-auto w-[70%] drop-shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <div class="container mx-auto p-6">
                    <PageFooter />
                </div>
            </div>
        )
    },
})

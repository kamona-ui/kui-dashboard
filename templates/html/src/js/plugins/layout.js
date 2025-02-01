export default function (Alpine) {
    Alpine.store('darkMode', {
        value: false,
        setValue(value) {
            window.localStorage.setItem('dark', value)
            document.dispatchEvent(new CustomEvent('scheme:changed', {}))
        },
        getValue() {
            if (window.localStorage.getItem('dark')) {
                return JSON.parse(window.localStorage.getItem('dark'))
            }
            return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        },
        toggle() {
            this.value = !this.value
            this.setValue(this.value)
        },
        init() {
            this.value = this.getValue()
        },
    })

    Alpine.store('sidebar', {
        isOpen: window.innerWidth > 1024,
        isHovered: false,
        open() {
            this.isOpen = true
        },
        close() {
            this.isOpen = false
        },
        toggle() {
            this.isOpen = !this.isOpen
        },
        handleWindowResize() {
            if (window.innerWidth < 1024) {
                this.isOpen = false
            } else {
                this.isOpen = true
            }
        },
    })

    Alpine.directive('kui-layout', (el, { value, modifiers }) => {
        if (!value) handleRoot(Alpine, el)
        else if (value === 'sidebar') handleSidebar(Alpine, el)
        else if (value === 'page-wrapper') handlePageWrapper(Alpine, el, modifiers)
        else if (value === 'navbar') handleNavbar(Alpine, el, modifiers)
    })
}

function handleRoot(Alpine, el) {
    Alpine.bind(el, {
        'x-id'() {
            return ['kui-layout', 'kui-layout-sidebar', 'kui-layout-navbar', 'kui-layout-page-wrapper']
        },
        ':id'() {
            return this.$id('kui-layout')
        },
        'x-data'() {
            return {
                lastScrollTop: 0,
            }
        },
    })
}

function handleSidebar(Alpine, el) {
    Alpine.bind(el, {
        ':id'() {
            return this.$id('kui-layout-sidebar')
        },
        ':class'() {
            return {
                'translate-x-0 w-64': this.isOpen || this.isHovered,
                '-translate-x-full w-64 md:w-16 md:translate-x-0': !this.isOpen && !this.isHovered,
            }
        },
        'x-data'() {
            return {
                get isOpen() {
                    return this.$store.sidebar.isOpen
                },
                get isHovered() {
                    return this.$store.sidebar.isHovered
                },
                toggle() {
                    this.$store.sidebar.toggle()
                },
                open() {
                    this.$store.sidebar.open()
                },
                close() {
                    this.$store.sidebar.close()
                },
                handleWindowResize() {
                    this.$store.sidebar.handleWindowResize()
                },
            }
        },
        '@resize.window'() {
            return this.handleWindowResize()
        },
        'x-init'() {
            el.addEventListener('mouseenter', () => {
                if (window.innerWidth > 1024) {
                    this.$store.sidebar.isHovered = true
                }
            })
            el.addEventListener('mouseleave', () => {
                if (window.innerWidth > 1024) {
                    this.$store.sidebar.isHovered = false
                }
            })
        },
    })
}

function handlePageWrapper(Alpine, el) {
    Alpine.bind(el, {
        ':id'() {
            return this.$id('kui-layout-page-wrapper')
        },
        ':class'() {
            return {
                'lg:ms-64': this.$store.sidebar.isOpen,
            }
        },
    })
}

function handleNavbar(Alpine, el) {
    Alpine.bind(el, {
        ':id'() {
            return this.$id('kui-layout-navbar')
        },
        ':class'() {
            return {
                '-translate-y-full': this.scrollingDown,
                'translate-y-0 shadow-lg': this.scrollingUp,
            }
        },
        'x-data'() {
            return {
                scrollingDown: false,

                scrollingUp: false,
            }
        },
        'x-init'() {
            window.addEventListener('scroll', () => {
                let st = window.pageYOffset || document.documentElement.scrollTop
                if (st > lastScrollTop) {
                    // downscroll
                    this.scrollingDown = true
                    this.scrollingUp = false
                } else {
                    // upscroll
                    this.scrollingDown = false
                    this.scrollingUp = true
                    if (st == 0) {
                        //  reset
                        this.scrollingDown = false
                        this.scrollingUp = false
                    }
                }
                this.lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
            })
        },
    })
}

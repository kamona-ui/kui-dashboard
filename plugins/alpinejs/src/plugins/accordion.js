export default function (Alpine) {
    Alpine.directive('accordion', (el, { value }) => {
        if (value === 'item') handleItem(Alpine, el)
        else if (value === 'item-trigger') handleItemTrigger(Alpine, el)
        else if (value === 'item-content') handleItemContent(Alpine, el)
        else handleRoot(Alpine, el)
    }).before('bind')
}

function handleRoot(Alpine, el) {
    Alpine.bind(el, {
        'x-data'() {
            return {
                checkWOpenState() {
                    let wOpen = Boolean(Alpine.bound(el, 'w-open', false))

                    if (wOpen) this.wOpen = wOpen
                },
                wOpen: false,
                activeAccordion: null,
                setActiveAccordion(accordion) {
                    if (this.wOpen) return
                    this.$data.activeAccordion =
                        this.$data.activeAccordion == accordion
                            ? null
                            : accordion
                },
            }
        },
    })
}

function handleItem(Alpine, el) {
    Alpine.bind(el, {
        'x-init'() {
            this.$data.checkWOpenState()
        },
        'x-id'() {
            return [
                'accordion-item',
                'accordion-item-trigger',
                'accordion-item-content',
            ]
        },
        ':id'() {
            return this.$id('accordion-item')
        },
        'x-data'() {
            return {
                checkDefaultOpenState() {
                    let defaultIsOpen = Boolean(
                        Alpine.bound(this.$el, 'default-open', false),
                    )

                    if (defaultIsOpen) {
                        if (this.$data.wOpen) {
                            this.isOpen = true
                        } else {
                            this.activeAccordion = this.accordion
                        }
                    }
                },
                accordion: this.$id('accordion-item'),
                isOpen: false,
                get active() {
                    if (!this.$data.wOpen) {
                        return (
                            this.$data.accordion === this.$data.activeAccordion
                        )
                    }
                    // return this.$data.accordion === this.$data.activeAccordion
                    return this.isOpen
                },
            }
        },
    })
}

function handleItemTrigger(Alpine, el) {
    Alpine.bind(el, {
        'x-init'() {
            if (
                this.$el.tagName.toLowerCase() === 'button' &&
                !this.$el.hasAttribute('type')
            )
                this.$el.type = 'button'
        },
        ':id'() {
            return this.$id('accordion-item-trigger')
        },
        ':aria-expanded'() {
            return this.$data.active
        },
        ':aria-controls'() {
            return this.$data.$id('accordion-item-content')
        },
        '@click'() {
            if (this.$data.wOpen) {
                this.isOpen = !this.isOpen
            } else {
                this.setActiveAccordion(this.$data.accordion)
            }
        },
    })
}

function handleItemContent(Alpine, el) {
    Alpine.bind(el, {
        style: { display: 'none' },
        'x-init'() {
            this.$data.checkDefaultOpenState()
        },
        ':id'() {
            return this.$id('accordion-item-content')
        },
        'x-show'() {
            return this.$data.active || this.$data.isOpen
        },
        'x-collapse': null,
    })
}

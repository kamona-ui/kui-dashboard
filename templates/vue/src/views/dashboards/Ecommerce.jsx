import { defineComponent } from 'vue'
import PageWrapper from '@/components/PageWrapper'
import { KuiButton } from '@kui-dashboard/vue-plugin'
import { useRouter } from 'vue-router'
import home from '@/support/data/pages/home'
import QuickStatisticsCard from '@/components/QuickStatisticsCard'
import SimpleStatistics from '@/components/SimpleStatistics'

const actions = [
    {
        title: 'Action one',
        to: '#',
    },
    {
        title: 'Action two',
        to: '#',
    },
]

const Header = defineComponent({
    setup() {
        return () => (
            <>
                <h2 class="text-xl font-semibold leading-tight">Dashboardx</h2>

                <KuiButton
                    external
                    href="https://github.com/kamona-ui/kui-dashboard/tree/main/templates/vue#readme"
                    variant="black"
                    class="max-w-sm"
                    startIcon="tabler--brand-github"
                    text="Star on github"
                />
            </>
        )
    },
})

export default defineComponent({
    setup() {
        const router = useRouter()

        const quickStaticsCharts = home.charts.quickStaticsCharts
        const simpleStatistics = home.simpleStatistics

        return () => (
            <PageWrapper
                v-slots={{ header: () => <Header /> }}
                mainTitle="Dashboard Home"
                breadcrumb={router.currentRoute.value.meta.breadcrumb}
            >
                <div class="grid gap-4">
                    {/* Statistics section */}
                    <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <h2 class="sr-only">Quick statistics</h2>

                        {quickStaticsCharts.map((chart) => (
                            <QuickStatisticsCard
                                icon={chart.icon}
                                status={chart.status}
                                series={[
                                    { name: chart.title, data: chart.data },
                                ]}
                                title={chart.title}
                                total={chart.total}
                                percentage={chart.percentage}
                                actions={actions}
                            />
                        ))}
                    </section>

                    {/* Simple statistics */}
                    <section class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <h2 class="sr-only">Simple statistics</h2>

                        {simpleStatistics.map((s) => (
                            <SimpleStatistics
                                icon={s.icon}
                                title={s.title}
                                note={s.note}
                                color={s.colorClass}
                            />
                        ))}
                    </section>
                </div>
            </PageWrapper>
        )
    },
})

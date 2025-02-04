import { defineComponent } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import BaseCard from '@/components/BaseCard'
import { getRandomChartData, getRandomChartDataItem } from '@/support/helpers'

export default defineComponent({
    props: {
        title: String,
        total: [String, Number],
        status: {
            type: String,
            default: 'success',
            validator(value) {
                return ['success', 'warning', 'danger'].includes(value)
            },
        },
        percentage: {
            type: [String, Number],
        },
        actions: {
            type: Array,
            default: [],
        },
        icon: {
            type: String || undefined,
            default: undefined,
        },
        series: {
            type: Array,
            default: [],
        },
        categories: {
            type: Array || undefined,
            default: undefined,
        },
    },

    setup(props, { slots }) {
        const options = {
            chart: {
                // height: '100%',
                // width: '100%',
                type: 'line',
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            grid: {
                show: false,
                padding: {
                    left: 0,
                    right: 0,
                },
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            xaxis: {
                type: 'datetime',
                categories: props.categories ?? [
                    '1/11/2000',
                    '2/11/2000',
                    '3/11/2000',
                    '4/11/2000',
                    '5/11/2000',
                    '6/11/2000',
                    '7/11/2000',
                    '8/11/2000',
                    '9/11/2000',
                    '10/11/2000',
                    '11/11/2000',
                    '12/11/2000',
                    '1/11/2001',
                ],
                tickAmount: 10,
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            title: {
                show: false,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#FDD835'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100],
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            tooltip: {
                x: { show: false },
            },
        }

        return () => (
            <BaseCard
                actions={props.actions}
                v-slots={{
                    header: () => (
                        <div class="flex items-center gap-4">
                            {slots.icon ? (
                                slots.icon({
                                    sizeClasses: 'w-8 h-8 text-primary',
                                })
                            ) : (
                                <span
                                    aria-hidden="true"
                                    class={[
                                        'iconify h-8 w-8 text-primary',
                                        props.icon,
                                    ]}
                                ></span>
                            )}

                            <div class="flex items-center gap-2">
                                <span
                                    aria-hidden="true"
                                    class={[
                                        'iconify h-6 w-6',
                                        {
                                            'text-green-500 tabler--trending-up':
                                                props.status == 'success',
                                            'text-yellow-500 tabler--minus':
                                                props.status == 'warning',
                                            'text-red-500 tabler--trending-down':
                                                props.status == 'danger',
                                        },
                                    ]}
                                ></span>

                                <span
                                    class={[
                                        'text-xs font-medium',
                                        {
                                            'text-green-500':
                                                props.status == 'success',
                                            'text-yellow-500':
                                                props.status == 'warning',
                                            'text-red-500':
                                                props.status == 'danger',
                                        },
                                    ]}
                                >
                                    {props.percentage}
                                </span>
                            </div>
                        </div>
                    ),
                }}
            >
                <div class="gap- relative grid grid-cols-2">
                    <div>
                        <h4 class="text-3xl font-semibold">{props.total}</h4>
                        <p class="text-base font-medium text-gray-500 dark:text-gray-400">
                            {props.title}
                        </p>
                    </div>

                    <div class="flex max-h-16 max-w-full items-center justify-end">
                        <VueApexCharts
                            height={100}
                            width={100}
                            series={props.series}
                            options={options}
                        ></VueApexCharts>
                    </div>
                </div>
            </BaseCard>
        )
    },
})

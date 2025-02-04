export const getRandomChartDataItem = (l = 10, m = 100) => {
    return Math.floor(Math.random() * (m - l) + l)
}

export const getRandomChartData = (l = 10, m = 100) => {
    return Array.from({ length: l }, () => getRandomChartDataItem(l, m))
}

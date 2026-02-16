// votosChart.js
// Exemplo de gráfico ECharts para "Número de Votos"
// Tipagem com PropTypes
const votosChartPropTypes = {
    containerId: PropTypes.string.isRequired,
}

export function renderVotosChart(containerId) {
    PropTypes.checkPropTypes(votosChartPropTypes, { containerId }, 'prop', 'renderVotosChart')
    const chart = echarts.init(document.getElementById(containerId))
    const option = {
        title: {
            text: 'Resumo dos Votos Válidos por Ano',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['2024', '2025'],
            top: 30,
        },
        xAxis: {
            type: 'category',
            data: ['2024', '2025'],
            axisLabel: { rotate: 0 },
        },
        yAxis: {
            type: 'value',
            name: 'Total de votos',
        },
        series: [
            {
                name: '2024',
                type: 'bar',
                data: [120, 0],
                itemStyle: { color: '#5470C6' },
            },
            {
                name: '2025',
                type: 'bar',
                data: [0, 150],
                itemStyle: { color: '#91CC75' },
            },
        ],
        responsive: true,
    }
    chart.setOption(option)
    window.addEventListener('resize', () => chart.resize())
}

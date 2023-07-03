Highcharts.chart('chNum', {

    chart: {
        type: 'item',
        height: 600,
        zooming: {
            mouseWheel: false
        }
    },

    title: {
        text: ''
    },

    legend: {
        labelFormat: '{name} bajnoki cím: {y} játékos'
    },

    series: [{
        name: 'Játékos',
        keys: ['name', 'y', 'color', 'label'],
        data: [
            [8, 4, 'aqua', 8],
            [7, 1, 'pink', 7],
            [6, 4, 'purple', 6],
            [5, 11, 'black', 5],
            [4, 16, 'orange', 4],
            [3, 36, 'navy', 3],
            [2, 84, 'blue', 2],
            [1, 392, 'red', 1]
        ],
        dataLabels: {
            enabled: true,
            format: '{point.label}',
            style: {
                textOutline: '3px contrast'
            }
        },

        // Circular options
        center: ['50%', '88%'],
        size: '150%',
        startAngle: -100,
        endAngle: 100
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 600
            },
            chartOptions: {
                series: [{
                    dataLabels: {
                        distance: -30
                    }
                }]
            }
        }]
    }
});

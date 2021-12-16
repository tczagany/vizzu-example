import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@latest/dist/vizzu.min.js';
import { data } from './data.js';

let chart = new Vizzu('vizzuCanvas');

chart.initializing
.then(chart => chart.animate({
    data: data,
    config: {
        channels: {
            y: 'File name',
            x: 'Line count',
        },
        title: 'Files by size'
    },
    style: { plot: { yAxis: { label: { fontSize: 2 } } } }
}));

import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@latest/dist/vizzu.min.js';
import { data } from 'https://tczagany.github.io/vizzu-example/data_by_filename.js';

let chart = new Vizzu('myVizzu');

chart.initializing
.then(chart => chart.animate({
  data: data,
  config: {
    channels: {
      x: 'Line count',
      y: 'File name'
    }
  },
  style: { plot: { yAxis: { label: { color: "#00000000" } } } }
}));
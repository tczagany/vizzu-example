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
  style: { plot: { yAxis: { label: { fontSize: 2 } } } }
}))
.then(chart => chart.animate({
  config: {
    channels: {
      color: 'Language',
      y: ['File name', 'Language']
    }
  },
  style: {
    plot: {
      xAxis: { label: { color: "#00000000" } },
      yAxis: { label: { color: "#00000000" } }
    }
  }
}))
.then(chart => chart.animate({
  config: {
    channels: {
      y: 'Language',
      x: ['File name','Line count'],
    }
  }
}))
.then(chart => chart.animate({
  style: { plot: { yAxis: { label: { color: null, fontSize: 12 } } } }
}));
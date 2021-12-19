import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@latest/dist/vizzu.min.js';
import { data } from 'https://tczagany.github.io/vizzu-example/data_by_filename.js';

let chart = new Vizzu('myVizzu');

chart.initializing
.then(chart => chart.animate({
  data: data,
  config: {
    channels: {
      x: 'Line count',
      y: 'D1'
    }
  },
  style: { legend: { width: 0 } }
}))
.then(chart => chart.animate({
	config: {
    channels: {
      x: ['D2', 'Line count'],
      y: 'D1'
    }
  }
}))
.then(chart => chart.animate({
	config: {
    channels: {
      x: 'Line count',
      y: { set: ['D1', 'D2'], labelLevel: 1 },
      color: 'D1'
    }
  }
}));
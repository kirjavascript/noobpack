import '../scss/index.scss'
import flip from '../html/flip.html';
import * as d3 from './util/d3';

d3.select('body').html(flip({
    info: '(╯°□°）╯︵ ┻━┻'
}))

let rainbow = d3.scaleRainbow()
    .domain([0, 100]);

let i = 0;

d3.interval(elapsed => {

    d3.select('.flip')
        .style('color', rainbow(++i%100))

});

if (__DEV__) {
    console.clear();
    console.warn('Development mode');
}

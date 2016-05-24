import '../scss/index.scss'
import flip from '../html/flip.html';
import * as d3 from './util/d3';

d3.select('body').html(flip({
    info: '(╯°□°）╯︵ ┻━┻'
}))

let rainbow = d3.scaleRainbow();

d3.interval(function(elapsed) {
    d3.select('.flip')
        .style('color', rainbow(elapsed))
}, 200);
// import local module
import './test';

// import node module
import * as selection from 'd3-selection';
import * as transition from 'd3-transition';

const d3 = Object.assign({}, 
    selection, 
    transition
);

d3.select('body')
    .style('background-color', '#000')
    .transition()
    .duration(1000)
    .style('background-color', '#FFF')
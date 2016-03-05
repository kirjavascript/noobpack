// import local module
import './test';

// import node module
import * as selection from 'd3-selection';
import * as transition from 'd3-transition';

const d3 = Object.assign({}, 
    selection, 
    transition
);

d3.select('p')
    .style('color', '#FFF')
    .transition()
    .duration(1500)
    .style('color', 'steelblue')

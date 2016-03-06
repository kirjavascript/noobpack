// import local module
import './test';

// import node module
import * as selection from 'd3-selection';
import * as transition from 'd3-transition';

// bootstrap
import 'bootstrap-sass';

const d3 = Object.assign({}, 
    selection, 
    transition
);

d3.select('p')
    .style('color', '#FFF')
    .transition()
    .duration(1200)
    .style('color', 'steelblue')
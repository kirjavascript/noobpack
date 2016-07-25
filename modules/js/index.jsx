import { Router, Route, Link, browserHistory } from 'react-router'
import {render} from 'react-dom';

let App = props => {


    return <div> 
        Home
        <ul>
        <li><Link to="/1">1</Link></li>
        <li><Link to="/2">2</Link></li>
        <li><Link to="/3">3</Link></li>
        </ul>

        {props.children}
    </div>;

}

let Page1 = props => <p>Page1</p>;
let Page2 = props => <p>Page2</p>;
let Page3 = props => <p>Page3</p>;

render((
    <Router history={browserHistory}>
        <Route component={App} path="/">
            <Route path="/1" component={Page1} />
            <Route path="/2" component={Page2} />
            <Route path="/3" component={Page3} />
        </Route>
    </Router>
), document.getElementById('app'));
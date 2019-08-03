var React = require('react');
var ReactDOM = require('react-dom');
var rrd = require('react-router-dom');
var BrowserRouter = rrd.BrowserRouter;
var Route = rrd.Route;
// var Link = rrd.Link;
var ApplyList = require('./ApplyList');
var ApplyDetail = require('./ApplyDetail');
var ApplyNew = require('./ApplyNew');
var ImageList = require('./ImageList');
var BBS = require('./BBS');
var Chat = require('./Chat');
var LinkList = require('./LinkList');

class ExpressSampleApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/apply">apply</Link></li> */}
          </ul>
          <Route exact path="/" component={Home} />
          <Route exact path="/apply" component={ApplyList} />
          <Route exact path='/apply/:id([0-9]+)' component={ApplyDetail} />
          <Route exact path="/apply/new" component={ApplyNew} />
          <Route exact path="/gallery" component={ImageList} />
          <Route exact path="/bbs" component={BBS} />        
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/link" component={LinkList} />
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}


// DOMのレンダリング処理
//   see. https://reactjs.org/docs/react-dom.html#render
ReactDOM.render(
  <ExpressSampleApp />,            // Appをレンダリングする
  document.getElementById('root')  // id=root要素に対してレンダリングする
);
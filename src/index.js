import Home from './Home';
import ApplyList from './ApplyList';
import ApplyDetail from './ApplyDetail';
import ApplyNew from './ApplyNew';
import ImageList from './ImageList';
import BBS from './BBS';
import Chat from './Chat';
import LinkList from './LinkList';


var React = require('react');
var ReactDOM = require('react-dom');
var rrd = require('react-router-dom');
var BrowserRouter = rrd.BrowserRouter;
var Route = rrd.Route;
// var Link = rrd.Link;

class ExpressSampleApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div> 
          <Route exact path="/" component={Home} />
          <Route exact path="/apply" component={ApplyList} />
          <Route exact path='/apply/:id([0-9]+)' component={ApplyDetail} />
          <Route exact path="/apply_new" component={ApplyNew} />
          <Route exact path="/gallery" component={ImageList} />
          <Route exact path="/bbs" component={BBS} />        
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/link" component={LinkList} />
        </div>
      </BrowserRouter>
    );
  }
}

// DOMのレンダリング処理
//   see. https://reactjs.org/docs/react-dom.html#render
ReactDOM.render(
  <ExpressSampleApp />,            // Appをレンダリングする
  document.getElementById('root')  // id=root要素に対してレンダリングする
);
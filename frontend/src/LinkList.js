var React = require('react');
var rrd = require('react-router-dom');
var Link = rrd.Link;
var Const = require('./Const');

// 一覧レンダリング用コンポーネント
class LinkList extends React.Component {

  //linkを必要な情報に応じて書き換えていく--------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      link_list: [],
    };
    this.loadlinkList = this.loadlinkList.bind(this);
  }

  componentWillMount() {
    this.loadlinkList();
  }

  loadlinkList() {
    return fetch(Const.BASE_URL + "/_api/link")
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          link_list: responseJson.link_list,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }
  //------------------------------------------------------------------------

  render() {
    const body = this.state.link_list.map((link) =>
      <tr key={`linkList-${link.id}`}>]
        <td><Link to={link.url}>{link.name}</Link></td>
      </tr>

    );

    return (
      <table>
        <tbody>
          {body}
        </tbody>
      </table>
    );
  }
}

module.exports = LinkList;

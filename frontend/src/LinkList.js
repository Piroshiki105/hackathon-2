var React = require('react');
var rrd = require('react-router-dom');
var Link = rrd.Link;

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
    return fetch("http://localhost:3001/_api/link")
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
      <tr key={`linkList-${link.id}`}>
        <td>
          <Link to={`/link/${link.id}`}>{link.id}</Link>
        </td>
        <td>{link.user_name}</td>
        <td>{link.value}</td>
      </tr>
    );

    return(
      <table>
        <tbody>
          linktest
        </tbody>
      </table>
    );
  }
}

module.exports = LinkList;



// <table>
// <thead>
//   <tr>
//     <th>Name</th>
//     <th>VALUE</th>
//   </tr>
// </thead>
// <tbody>
//   {body}
// </tbody>
// </table>
var React = require('react');
var rrd = require('react-router-dom');
var Link = rrd.Link;

// 一覧レンダリング用コンポーネント
class BBS extends React.Component {

  //bbsを必要な情報に応じて書き換えていく--------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      bbs_list: [],
    };
    this.loadbbsList = this.loadbbsList.bind(this);
  }

  componentWillMount() {
    this.loadbbsList();
  }

  loadbbsList() {
    return fetch("http://localhost:3001/_api/bbs")
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          bbs_list: responseJson.bbs_list,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }
  //------------------------------------------------------------------------

  render() {
    const body = this.state.bbs_list.map((bbs) =>
      <tr key={`bbsList-${bbs.id}`}>
        <td>
          <Link to={`/bbs/${bbs.id}`}>{bbs.id}</Link>
        </td>
        <td>{bbs.user_name}</td>
        <td>{bbs.value}</td>
      </tr>
    );

    return(
      <table>
        <tbody>
          BBStest
        </tbody>
      </table>
    );
  }
}

module.exports = BBS;



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
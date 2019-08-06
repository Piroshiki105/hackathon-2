var React = require('react');
var rrd = require('react-router-dom');
var Link = rrd.Link;

// 一覧レンダリング用コンポーネント
export default class ApplyList extends React.Component {

  //applyを必要な情報に応じて書き換えていく--------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      apply_list: [],
    };
    this.loadApplyList = this.loadApplyList.bind(this);
  }

  componentWillMount() {
    this.loadApplyList();
  }

  loadApplyList() {
    return fetch("/_api/apply")
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          apply_list: responseJson.apply_list,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }
  //------------------------------------------------------------------------

  render() {
    const body = this.state.apply_list.map((apply) =>
      <tr key={`ApplyList-${apply.id}`}>
        <td>
          <Link to={`/apply/${apply.id}`}>{apply.id}</Link>
        </td>
        <td>{apply.user_name}</td>
        <td>{apply.value}</td>
      </tr>
    );

    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>
          {body}
        </tbody>
      </table>
    );
  }
}

var React = require('react');
var rrd = require('react-router-dom');
var Link = rrd.Link;

// 一覧レンダリング用コンポーネント
class ApplyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apply_list: [],
    };
    this.loadApplyList = this.loadApplyList.bind(this);
  }

  loadApplyList() {
    return fetch("http://localhost:3001/_api/apply")
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

  componentWillMount() {
    this.loadApplyList();
  }

  render() {
    const apply_list = this.state.apply_list.map((apply) =>
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
          {apply_list}
        </tbody>
      </table>
    );
  }
}

module.exports = ApplyList;
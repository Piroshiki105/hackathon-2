var React = require('react');

// 一覧レンダリング用コンポーネント
export default class LinkList extends React.Component {

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
    return fetch("/_api/link")
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
        <td><a href = {link.url}>{link.name}</a></td>
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

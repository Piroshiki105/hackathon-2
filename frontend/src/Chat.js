var React = require('react');
var rrd = require('react-router-dom');
var Link = rrd.Link;

// 一覧レンダリング用コンポーネント
class Chat extends React.Component {

  //chatを必要な情報に応じて書き換えていく--------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      chat_list: [],
    };
    this.loadchatList = this.loadchatList.bind(this);
  }

  componentWillMount() {
    this.loadchatList();
  }

  loadchatList() {
    return fetch("http://localhost:3001/_api/chat")
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          chat_list: responseJson.chat_list,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }
  //------------------------------------------------------------------------

  render() {
    const body = this.state.chat_list.map((chat) =>
      <tr key={`chatList-${chat.id}`}>
        <td>
          <Link to={`/chat/${chat.id}`}>{chat.id}</Link>
        </td>
        <td>{chat.user_name}</td>
        <td>{chat.value}</td>
      </tr>
    );

    return(
      <table>
        <tbody>
          chattest
        </tbody>
      </table>
    );
  }
}

module.exports = Chat;



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
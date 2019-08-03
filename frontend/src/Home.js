var React = require('react');
var rrd = require('react-router-dom');
var Link = rrd.Link;

// 一覧レンダリング用コンポーネント
class Home extends React.Component {

  //homeを必要な情報に応じて書き換えていく--------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      home_list: [],
    };
    this.loadhomeList = this.loadhomeList.bind(this);
  }

  componentWillMount() {
    this.loadhomeList();
  }

  loadhomeList() {
    return fetch("http://localhost:3001/_api/home")
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          home_list: responseJson.home_list,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }
  //------------------------------------------------------------------------

  render() {
    const body = this.state.home_list.map((home) =>
      <tr key={`homeList-${home.id}`}>
        <td>{home.name}</td>
        <td>{home.text}</td>
      </tr>
    );

    return (
      <table width="100%">
        <tr align="center">
          <div> <img src="/IMG/dummy.jpg" alt="タイトル画像" /></div>
        </tr>
        <td>
          <marquee bgcolor="#ff66c2" behavior="alternate"><font color="#00ff19" face="HGP創英角ﾎﾟｯﾌﾟ体">ようこそエビスマート公式ホームページへ</font></marquee>
        </td>
        <tr align="center">
          <td>
            人目のお客様です。
        </td>
        </tr>
        <tbody>
          更新履歴
          {body}
        </tbody>
      </table>
    );
  }
}

module.exports = Home;

var React = require('react');
var rrd = require('react-router-dom');

// 一覧レンダリング用コンポーネント
export default class Home extends React.Component {

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
    return fetch("/_api/home")
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
    const body = this.state.home_list.map((history) =>
      <tr key={`homeList-${history.id}`}>
        <td>{history.name}</td>
        <td>{history.text}</td>
      </tr>
    );

    return (
      <table width="100%">
        <tr align="center" >
          <br/>
          <div><font face="HGP創英角ﾎﾟｯﾌﾟ体" size="6"><font color="#ff4d00">エ</font><font color="#f98100">ビ</font><font color="#f4b400">ス</font><font color="#eee300">マ</font><font color="#c1e900">ー</font><font color="#8ae300">ト</font><font color="#57de00">公</font><font color="#25d800">式</font><font color="#00d30a">サ</font><font color="#00cd36">イ</font><font color="#00c860">ト</font><font color="#00c288">！</font></font></div>
          <br/>
        </tr>
        <td>
          <marquee bgcolor="#ff66c2" behavior="alternate"><font color="#00ff19" face="HGP創英角ﾎﾟｯﾌﾟ体">ようこそエビスマート公式ホームページへ</font></marquee>
        </td>
        <tr align="center">
          <td>
            人目のお客様です。
        </td>
        </tr>
        <tbody align="center">
          <br/>
          更新履歴
          {body}
        </tbody>
      </table>
    );
  }
}
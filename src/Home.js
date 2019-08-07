var React = require('react');

// 一覧レンダリング用コンポーネント
export default class Home extends React.Component {

  //homeを必要な情報に応じて書き換えていく--------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      history_list: [],
      count: 0
    };
    this.loadhomeList = this.loadhomeList.bind(this);
  }

  componentWillMount() {
    this.loadhomeList();
  }

  async loadhomeList() {
    let tasks = [];
    tasks.push(fetch("/_api/history")
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        history_list: responseJson.history_list
      });
    })
    .catch((error) => {
      console.error(error);
    }));

    tasks.push(fetch("/_api/counter")
    .then((response) => response.json())
    .then((responseJson) => {
      if(!responseJson.count) {
        return;
      }
      this.setState({
        count: responseJson.count
      });
    })
    .catch((error) => {
      console.error(error);
    }));

    await Promise.all(tasks);
  }
  //------------------------------------------------------------------------

  render() {
    const body = this.state.history_list.map((history) =>
      <tr key={`homeList-${history.id}`}>
        <td>{history.name}</td>
        <td>{history.text}</td>
      </tr>
    );

    const count = <span>{('000000000' + this.state.count).slice(-9)}</span>

    return (
      <table width="100%">
        <tr align="center">
          <br/>
          <div><font face="HGP創英角ﾎﾟｯﾌﾟ体" size="6"><font color="#ff4d00">エ</font><font color="#f98100">ビ</font><font color="#f4b400">ス</font><font color="#eee300">マ</font><font color="#c1e900">ー</font><font color="#8ae300">ト</font><font color="#57de00">公</font><font color="#25d800">式</font><font color="#00d30a">サ</font><font color="#00cd36">イ</font><font color="#00c860">ト</font><font color="#00c288">！</font></font></div>
          <br/>
        </tr>
        <td>
          <marquee bgcolor="#ff66c2" behavior="alternate"><font color="#00ff19" face="HGP創英角ﾎﾟｯﾌﾟ体">ようこそエビスマート公式ホームページへ</font></marquee>
        </td>
        <tr align="center">
          <td>
          {count}人目のお客様です。
         </td>
        </tr>
        <tr align="center"><td>更新履歴</td></tr>
        <tr align="center">
          <table>
            {body}
          </table>
        </tr>
      </table>
    );
  }
}

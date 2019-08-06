var React = require('react');

// 一覧レンダリング用コンポーネント
export default class ImageList extends React.Component {

  //imageを必要な情報に応じて書き換えていく--------------------------------------
  constructor(props) {
    super(props);
    this.state = {
      image_list: [],
    };
    this.loadimageList = this.loadimageList.bind(this);
  }

  componentWillMount() {
    this.loadimageList();
  }

  loadimageList() {
    return fetch("/_api/image")
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          image_list: responseJson.image_list,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }
  //------------------------------------------------------------------------

  render() {
    const body = this.state.image_list.map((image) =>
      <tr key={`imageList-${image.id}`}>
        <td>{image.name}</td>
        <td><img src={image.url} alt={image.name} /></td>
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

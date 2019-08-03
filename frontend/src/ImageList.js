var React = require('react');
var rrd = require('react-router-dom');
var Link = rrd.Link;

// 一覧レンダリング用コンポーネント
class ImageList extends React.Component {

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
    return fetch("http://localhost:3001/_api/image")
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
        <td><Link to={`{image.url} `}><img src={image.url} /></Link></td>
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

module.exports = ImageList;



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
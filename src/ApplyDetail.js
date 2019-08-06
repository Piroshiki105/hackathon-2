var React = require('react');

export default class ApplyDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      apply: {},
    };

    this.loadApply = this.loadApply.bind(this);
  }

  loadApply() {
    return fetch(`/_api/Apply/${this.state.id}`)
      .then((response) => response.json())
      .then((responseJson) =>
        this.setState({
          apply: responseJson.apply,
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillMount() {
    this.loadApply();
  }

  render() {
    const attributes_array = ["user_name", "value"].map((attr) =>
      { return {
        name: attr,
        val: this.state.apply[attr] ? this.state.apply[attr].toString() : '...loading'
      } }
    );
    return (
      <dl>
        {attributes_array.reduce((accumulator, attr, idx) => {
          return accumulator.concat([
            <dt key={`attrname-${idx}`}>{attr.name}</dt>,
            <dd key={`attrval-${idx}`}>{attr.val}</dd>
          ]);
        },[])}
      </dl>
    );
  }
}

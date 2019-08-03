var React = require('react');
var Const = require('./Const')

class ApplyNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apply: {},
    };

    this.onChangeField = this.onChangeField.bind(this);
  }

  componentWillMount() {
  }

  onChangeField(e) {
    var apply = this.state.apply;
    apply[e.target.name] = e.target.value;
    this.setState({
      apply: apply
    });
  }

  render() {
    const apply = this.state.apply || {};
    const id = (apply.id ? <div>ID: {apply.id}</div> : '');
    return (
      <form action={Const.BASE_URL + '/_api/apply_new'} method='post'>
        { /* cf. https://qiita.com/ozhaan/items/c1e394226c1d5acb7f0e */ }
        <input name="_method" type="hidden" value="put" readOnly />
        {id}
        <div>Name: <input type='text' name='user_name' defaultValue={apply.user_name} placeholder="Input User's Name" onChange={this.onChangeField} /></div>
        <div>VALUE: <input type='text' name='value' defaultValue={apply.value} placeholder="" onChange={this.onChangeField} /></div>
        <div><input type='submit' value='Submit' readOnly /></div>
      </form>
    );
  }
}

module.exports = ApplyNew;
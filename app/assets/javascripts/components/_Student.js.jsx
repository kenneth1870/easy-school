var Student = React.createClass({
  getInitialState() {
    return {editable: false}
  },
  handleEdit() {
    if (this.state.editable) {
      var first_name = this.refs.first_name.value;
      var id = this.props.student.id;
      var info = this.refs.info.value;
      var student = {
        id: id,
        first_name: first_name,
        info: info
      };
      this.props.handleUpdate(student);

    }
    this.setState({
      editable: !this.state.editable
    })
  },

  render() {
    var first_name = this.state.editable
      ? <input type='text' ref='first_name' defaultValue={this.props.student.name}/>
      : <h3>{this.props.student.first_name}</h3>;
    var info = this.state.editable
      ? <input type='text' ref='info' defaultValue={this.props.student.info}/>
      : <p>{this.props.student.info}</p>;
    return (<div>
      {first_name}
      {info}
      <button onClick={this.props.handleDelete}>Delete</button>
      <button onClick={this.handleEdit}>
        {
          this.state.editable
            ? 'Submit'
            : 'Edit'
        }
      </button>
    </div>)
  }
});

var NewStudent = React.createClass({
  handleClick() {
    var first_name = this.refs.first_name.value;
    var info = this.refs.info.value;
    $.ajax({
      url: '/api/v1/students',
      type: 'POST',
      data: {
        student: {
          first_name: first_name,
          info: info
        }
      },
      success: (student) => {
        this.props.handleSubmit(student);
      }
    });
  },
  render() {
    return (<div>
      <input ref='first_name' placeholder='Enter the name of the student'/>
      <input ref='info' placeholder='Enter a info'/>
      <button onClick={this.handleClick}>Submit</button>
    </div>)
  }
});

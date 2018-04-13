var AllStudents = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(student) {
    this.props.onUpdate(student);
  },

  render() {
    var students = this.props.students.map((student) => {
      return (<div key={student.id}>
        <Student student={student} handleDelete={this.handleDelete.bind(this, student.id)} handleUpdate={this.onUpdate}/>
      </div>)
    });

    return (<div>
      {students}
    </div>)
  }
});

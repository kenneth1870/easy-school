var Students = React.createClass({
  getInitialState() {
    return {students: []}
  },

  componentDidMount() {
    $.getJSON('/api/v1/students.json', (response) => {
      this.setState({students: response})
    });
  },

  handleSubmit(student) {
    var newState = this.state.students.concat(student);
    this.setState({students: newState})
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/students/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeStudentClient(id);
      }
    });
  },

  removeStudentClient(id) {
    var newStudents = this.state.students.filter((student) => {
      return student.id != id;
    });

    this.setState({students: newStudents});
  },

  handleUpdate(student) {
    $.ajax({
      url: `/api/v1/students/${student.id}`,
      type: 'PUT',
      data: {
        student: student
      },
      success: () => {
        this.updateStudents(student);

      }
    })
  },

  updateStudents(student) {
    var students = this.state.students.filter((i) => {
      return i.id != student.id
    });
    students.push(student);

    this.setState({students: students});
  },

  render() {
    return (<div>
      <h3>Students</h3>
      <NewStudent handleSubmit={this.handleSubmit}/>
      <AllStudents students={this.state.students} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
    </div>)
  }
});

import React, {PropTypes} from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    //binding the functions to the 'this' of the CoursesPage component
  }

  onTitleChange(event) { //we pull in an event
    const course = this.state.course; //
    course.title = event.target.value; // we pull the value out of that event off of the target nd set that to the title
    this.setState({course: course}); // update the state by calling setState
  } // this will update our state everytime someone makes changes to the title inputfield


  onClickSave() {
    alert(`Saving ${this.state.course.title}`); // an alert that is sent out that the title is saved
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Courses</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
        type="submit"
        value="Save"
        onClick={this.onClickSave} />
      </div>
    );
  }
}

export default CoursesPage;

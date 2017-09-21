import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

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
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
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

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses //this courses refers to the courses in courseReducer/rootReducer
  };
}
//ownProps --> lets us access props that are attached to this component. it is a reference to the components own props.

export default connect (mapStateToProps)(CoursesPage);
// taking the result of one function and passing it on to the next function
// dispatch is a function that allows you to fire off your actions

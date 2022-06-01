import React from 'react'
import PropTypes from 'prop-types'
import './CourseCard.css'

function CourseCard({ department, courseNumber, semester, year }) {
  return (
    <section className="course-card">
      <header tabIndex="0">{department} {courseNumber}</header>
      <article className="info">
        <div className="row">
          <label>Department</label>
          <span>{department}</span>
        </div>
        <div className="row">
          <label>Course</label>
          <span>{courseNumber}</span>
        </div>
        <div className="row">
          <label>Year</label>
          <span>{year}</span>
        </div>
        <div className="row">
          <label>Semester</label>
          <span>{semester}</span>
        </div>
      </article>
    </section>
  )
}

CourseCard.propTypes = {
  department: PropTypes.string.isRequired,
  courseNumber: PropTypes.string.isRequired,
  semester: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}

export default CourseCard
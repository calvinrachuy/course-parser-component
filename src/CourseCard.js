import './CourseCard.css'

export default function CourseCard({ department, courseNumber, semester, year }) {
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
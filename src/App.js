import { default as parse } from './parseCourseString'
import { useState } from 'react'
import CourseCard from './CourseCard'

function App() {
  const [course, setCourse] = useState(null)
  const [courseQuery, setCourseQuery] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  
  function updateCourse(string) {
    try {
      setCourse(parse(string))
    }
    catch (e) {
      setErrorMessage('Error: Could not parse course')
    }
  }
  
  function submit(e) {
    e.preventDefault()
    
    setErrorMessage('')
    setCourse(null)
    
    updateCourse(courseQuery)
  }
  
  // Note: The minimum valid length is 6
  // ex. 'A1 F22'
  const submitEnabled = courseQuery.length > 0
  
  const errorTemplate = errorMessage && <div className="error">{errorMessage}</div>
  
  return (
    <div className="page">
      <form className="course-search-form" onSubmit={submit}>
        <label htmlFor="course">Course</label>
        <div className="row">
          <input
            className={errorMessage ? 'error' : ''}
            name="course"
            onChange={e => setCourseQuery(e.target.value)}
            placeholder="Enter course"
            type="text"
            value={courseQuery}
          />
          <button
            type="submit"
            disabled={!submitEnabled}
            onClick={submit}
          >Submit</button>
        </div>
        {errorTemplate}
      </form>
      {course && <CourseCard {...course} />}
    </div>
  );
}

export default App;

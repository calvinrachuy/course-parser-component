import { default as parse } from './parseCourseString.js'

describe('parseCourseString', () => {
  
  function createCourse(options = {}) {
    return Object.assign({
      courseNumber: '111',
      department: 'CS',
      semester: 'Fall',
      year: '2016',
    }, options)
  }
  
  describe('provided valid test cases', () => {
    const departmentCourses = [
      'CS111',
      'CS 111',
      'CS-111',
      'CS:111',
    ]
    
    const semesterYears = [
      'Fall 2016',
      'fall 16',
      '2016 Fall',
      'F2016',
      'Fall2016',
    ]
    
    departmentCourses.forEach(departmentCourse => {
      semesterYears.forEach(semesterYear => {
        const input = `${departmentCourse} ${semesterYear}`
        test(`parses ${input}`, () => {
          const actual = parse(input)
          const expected = createCourse()
          expect(actual).toStrictEqual(expected)
        })
      })
    })
  })
  
  describe('error cases', () => {
    const inputs = [
      '',
      ' ',
      'CS111',
      'CS111 Fall',
      'CS111 2015',
      'CS111 20',
      'Fall CS111 2015',
      'CS111 fal 2015',
      'CS111 J-term 2015',
      '111CS F2015',
      'CS111Fall2015',
      'CS 111Fall2015',
      'CS 111Fall 2015',
      'CS111 Fall-2015',
    ]
    
    inputs.forEach(input => {
      test(`${input} throws error`, () => {
        expect(() => parse(input)).toThrowError()
      })
    })
  })
  
})
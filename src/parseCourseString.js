function parseCourseNumber(string) {
  if (string.match(/\d+/)) return string
  throw new Error(`invalid course: ${string}`)
}

function parseDepartment(string) {
  if (string.match(/[a-z]+/i)) return string
  throw new Error(`invalid deparment: ${string}`)
}

function parseSemester(string) {
  switch (string) {
    case 'Fall':
    case 'fall':
    case 'F':
      return 'Fall'
    case 'Winter':
    case 'winter':
    case 'W':
      return 'Winter'
    case 'Spring':
    case 'spring':
    case 'S':
      return 'Spring'
    case 'Summer':
    case 'summer':
    case 'Su':
      return 'Summer'
    default:
      throw new Error(`invalid semester: ${string}`)
  }
}

function parseYear(string) {
  if (Number.isInteger(Number(string))) {
    if (string.length === 4) return string
    if (string.length === 2) return '20' + string
  }
  throw new Error(`invalid year: ${string}`)
}

export default function parse(string) {
  const regex = /([a-z]+)[ :-]?(\d+) ([a-z\d]+ ?[a-z\d]+)/i
  
  const [, department, courseNumber, term] = string.match(regex)
  const year = term.match(/\d+/)[0]
  const semester = term.match(/[a-z]+/i)[0]
  
  return {
    department: parseDepartment(department),
    courseNumber: parseCourseNumber(courseNumber),
    semester: parseSemester(semester),
    year: parseYear(year),
  }
}
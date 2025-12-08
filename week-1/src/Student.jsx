import PropTypes from 'prop-types'

function Student(props) {
  return (
    <div className='obj'>
        <h4>Name: {props.name}</h4>
        <h4>Age: {props.age}</h4>
        <h4>Is a Student: {props.isStudent ? "Yes" : "No"}</h4>
    </div>
  )
}

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Name of the candidate",
    age: 0,
    isStudent: false
}


export default Student;
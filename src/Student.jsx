import Score from "./Score"
const Student = (props) => {
  return ( 
    <>
      {props.students.map((student, idx) =>
        <div key={idx}>
          <h1>
            Name: {student.name}
          </h1>
          <p>
            Bio: {student.bio}
          </p>
          <div>
            Score: <Score scores={student.scores} />
          </div>
          

        </div>
      )}
      
    </>
  );
}
 
export default Student;
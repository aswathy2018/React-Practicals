// import Card from "./Card";
// import Button from "./Button/button";
import Student from "./Student";

function App() {
  return(
    <>
      {/* <Card/>
      <Card/> */}
      {/* <Button/> */}
      <Student name = "Aswathy" age = {22} isStudent = {true}/>
      <Student name = "Ashika" age = {23} isStudent = {false}/>
      <Student name = "Belwin" age = {28} isStudent = {false}/>
      <Student />
    </>
  );
}

export default App

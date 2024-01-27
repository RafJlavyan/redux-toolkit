import { useAppSelector } from "./app/types";
import Navbar from "./features/navbar/Navbar";
import StudentList from "./features/studentlist/StudentList";
import SubjectList from "./features/subjectlist/SubjectList";
import Book from "./features/book/Book";

function App() {
  const activePage = useAppSelector((state) => state.navbar.activePage);

  return (
    <div className="App">
      <Navbar />
      {activePage === "Subjects" ? (
        <SubjectList />
      ) : activePage === "Students" ? (
        <StudentList />
      ) : (
        <Book />
      )}
    </div>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import OverviewPage from './pages/OverviewPage';
import StudentsPage from './pages/StudentsPage';
import StudentPage from './pages/StudentPage';
import StudentData from './data/StudentData';

const filterOnWeek = (studentData, filter) => {
  return studentData.filter(item => {
    return item.assignment.includes(filter)
  })
}

const filterStudents = (studentData) => {
  const students = []
  studentData.forEach(item => {
    if (!students.includes(item.name)) {
      students.push(item.name)
    }
  })
  return students
}

function App() {
  const studentData = filterOnWeek(StudentData, 'W1')
  const students = filterStudents(StudentData)
  return (
    <Router>
      <header className="App-header">
        <h1 className="solid">Student Dashboard</h1>
        <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Students">Students</Link>
          </li>
        </ul>
      </nav>
      </header>
      
      <main>
        <Switch>
          <Route
            path="/Students/Student/:name"
            render={(props) => <StudentPage {...props} studentData={studentData} />}
          />
          <Route path="/Students/">
            <StudentsPage students={students} />
          </Route>
          <Route path="/">
            <OverviewPage
              studentData={studentData}
              students={students}
            />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}


export default App;

// App.js
import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Employee from "./Employee";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Nav from "./Nav";
import NotFound from "./NotFound";

function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('Selected team')) || "Team B");


  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employee-list'))|| [
    {
      id: 1,
      name: "umair",
      sex: "male",
      designation: "full stack developer",
      TeamName: "TeamA",
    },
    {
      id: 2,
      name: "john",
      sex: "male",
      designation: "backend developer",
      TeamName: "TeamB",
    },
    {
      id: 3,
      name: "saif",
      sex: "male",
      designation: "React developer",
      TeamName: "TeamA",
    },
    {
      id: 4,
      name: "amna",
      sex: "female",
      designation: "cyber security specialist",
      TeamName: "TeamA",
    },
    {
      id: 5,
      name: "khan",
      sex: "male",
      designation: "intern",
      TeamName: "TeamC",
    },
    {
      id: 6,
      name: "michael",
      sex: "male",
      designation: "full stack developer",
      TeamName: "TeamA",
    },
    {
      id: 7,
      name: "serena",
      sex: "female",
      designation: "backend developer",
      TeamName: "TeamC",
    },
  ]);

  useEffect(()=>{
localStorage.setItem('employee-list' , JSON.stringify(employees))
  },[employees])

  useEffect(()=>{
    localStorage.setItem('Selected team' , JSON.stringify(selectedTeam))
      },[selectedTeam])


      //
  function TeamSelection(event) {
    console.log(event.target.value);
    setTeam(event.target.value);
  }


  //
  const handleEmployeeCardClick = (event) => {
    const clickedEmployeeId = parseInt(event.currentTarget.id);
    const transformedEmployees = employees.map((employee) => {
      if (employee.id === clickedEmployeeId) {
        if (employee.TeamName === selectedTeam) {
          return { ...employee, TeamName: " " };
        } else {
          return { ...employee, TeamName: selectedTeam };
        }
      }
      return employee; // Add this line
    });
    setEmployees(transformedEmployees);
  };
  
  return (
    
    <Router>
  <Nav />
  <div className="header">
  <Header 
    selectedTeam={selectedTeam}
    TotalMembers={employees.filter((member) => member.TeamName === selectedTeam).length}
  />
  </div>
  <Routes>
    <Route path="/" element={<Employee employees={employees} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick} TeamSelection={TeamSelection} />} />
    <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam}/>} />

    
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
</Router>

  );
}

export default App;

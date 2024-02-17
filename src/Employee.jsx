import React,{ useState,useEffect } from "react";
import Female from "./Female.jpeg";
import "./App.css";
import Male from "./Male.jpeg";
import Team from "./Team"

const Employee = ({employees,selectedTeam,TeamSelection,handleEmployeeCardClick}) => {
 

  return (
    <main className="container">
      

      <div className="row justify-content-center mt-3 mb-5">
        
        <Team TeamSelection={TeamSelection}/>
        

        <div className="col-8 mb-4">
          <div className="card-collection">
            {employees.map((employee) => (
              <div
                key={employee.id}
                className={
                  employee.TeamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
             onClick={handleEmployeeCardClick}
                id={employee.id}
              >
                {employee.sex === "male" ? (
                  <img
                    src={Male}
                    className="card-img-top"
                    alt={`Portrait of ${employee.name}`}
                  />
                ) : (
                  <img
                    src={Female}
                    className="card-img-top"
                    alt={`Portrait of ${employee.name}`}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">Fullname: {employee.name}</h5>
                  <p className="card-designation">
                    Designation: {employee.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employee;

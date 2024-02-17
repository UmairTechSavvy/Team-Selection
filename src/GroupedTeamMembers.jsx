import React, { useState, useEffect } from "react";

const GroupedTeamMembers = ({ employees, setTeam, selectedTeam }) => {
  const [groupedMembers, setGroupedMembers] = useState([]);

  useEffect(() => {
    Allocation();
  }, [employees]);

  const Allocation = () => {
    const teams = {};

    employees.forEach((employee) => {
      if (!teams[employee.TeamName]) {
        teams[employee.TeamName] = {
          collapsed: selectedTeam !== employee.TeamName,
          members: [],
        };
      }
      teams[employee.TeamName].members.push(employee);
    });

    setGroupedMembers(teams);
  };

  const teamClicked = (teamName) => {
    setGroupedMembers((prevState) => ({
      ...prevState,
      [teamName]: {
        ...prevState[teamName],
        collapsed: !prevState[teamName].collapsed,
      },
    }));
  };

  return (
    <main className="container">
      {Object.entries(groupedMembers).map(([teamName, teamData]) => (
        <div key={teamName} className="card mt-2" style={{ cursor: "pointer" }}>
          <h4
            onClick={() => teamClicked(teamName)}
            className={`card-header text-secondary bg-white ${selectedTeam === teamName ? "active" : ""}`}
          >
            Team name: {teamName}
          </h4>
          {teamData.collapsed ? null : (
            <div className="card-body">
              {teamData.members.map((member) => (
                <div key={member.id} className="mt-2">
                  <h5 className="card-title mt-2">
                    <span className="text-dark">Full name: {member.name}</span>
                  </h5>
                  <p>Designation: {member.designation}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </main>
  );
};

export default GroupedTeamMembers;

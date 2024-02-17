

const Team= ({TeamSelection})=>{

  return(
  
  <select
    className="form-select change form-select-lg"
    onChange={TeamSelection}
    >
    <option value="TeamA">Team A</option>
    <option value="TeamB">Team B</option>
    <option value="TeamC">Team C</option>
    </select>
    )
  
  }


export default Team
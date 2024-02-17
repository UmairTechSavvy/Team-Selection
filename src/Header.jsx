const Header = ({selectedTeam,TotalMembers}) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
      <h1>
        Team Members Allocation
      {selectedTeam} has {TotalMembers} {TotalMembers === 1 || 0 ?   "member" : "members"} 
      
      </h1>
      </div>
      </div>
    </header>
  );
};

export default Header;

//bg-danger,bg-dark,bg-info
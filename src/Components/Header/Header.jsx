const Header = (props) => {
    return (
      <div className="border-box-nav" style={{backgroundColor: "red", fontSize: "2.5em"}}>
          <h1 style={{ margin: ".5em" }}>
              Flash
              <small style={{color: "darkred"}}className="text-muted">Cards</small>
          </h1>
      </div>
    );
  };
  
  export default Header;
import React from "react";

const Header = (props) => {
  return (
    <div>
      Header with logo and title <br />
      <b>here all bootstrap classes works</b><br />
      <button className="btn btn-primary">Click</button>
      <button className="btn btn-primary">Click</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
    </div>
  );
};

export default Header;

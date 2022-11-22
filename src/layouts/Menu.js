import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <header>
        <ul style={ulStyles}>
          <li style={liStyles}>
            <Link to="/">Home</Link>
          </li>
          <li style={liStyles}>
            <Link to="/contact">Contact</Link>
          </li>
          <li style={liStyles}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

const ulStyles = {
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
  padding: 0,
};

const liStyles = {
  margin: 10,
};

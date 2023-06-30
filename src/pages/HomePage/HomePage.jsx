import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>WELCOME TO SOCIAL NETWORKS</h1>
      <NavLink to="/tweets">Tweets</NavLink>
    </div>
  );
};

export default HomePage;

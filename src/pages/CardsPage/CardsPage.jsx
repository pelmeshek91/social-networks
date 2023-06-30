import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersTweetsThunk } from "../../redux/tweetsOperations";
import { NavLink } from "react-router-dom";
import CardDetails from "../../components/Card/CardDetails";

const CardsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersTweetsThunk());
  }, [dispatch]);

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <CardDetails />
    </div>
  );
};

export default CardsPage;

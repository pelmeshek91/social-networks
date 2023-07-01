import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersTweetsThunk } from "../../redux/tweetsOperations";

import FilteredUsers from "../../components/FilteredUsers/FilteredUsers";
import CardsList from "../../components/CardsList/CardsList";
import { Home } from "./CardsPage.styled";

const CardsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersTweetsThunk());
  }, [dispatch]);

  return (
    <div>
      <Home to="/">Home</Home>
      <FilteredUsers />
      <CardsList />
    </div>
  );
};

export default CardsPage;

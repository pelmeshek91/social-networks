import { useDispatch, useSelector } from "react-redux";
import CardDetails from "../Card/CardDetails";
import { selectFilteredUsers } from "../../redux/tweetsSelectors";
import { CardsUserList } from "../Card/CardDetails.styled";

import { getUsersTweetsNextThunk } from "../../redux/tweetsOperations";

const CardsList = () => {
  const filteredUsers = useSelector(selectFilteredUsers);
  const dispatch = useDispatch();
  const { page, isEnd } = useSelector((state) => state.users);

  return (
    <>
      <CardsUserList>
        {filteredUsers?.map((user) => (
          <CardDetails key={user.id} {...user} />
        ))}
      </CardsUserList>
      {filteredUsers && !isEnd && (
        <button onClick={() => dispatch(getUsersTweetsNextThunk(page))}>
          Load more
        </button>
      )}
    </>
  );
};

export default CardsList;

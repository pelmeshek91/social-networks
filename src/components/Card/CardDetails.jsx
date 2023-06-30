import { useDispatch, useSelector } from "react-redux";
import { updateUsersTweetsThunk } from "../../redux/tweetsOperations";
import * as image from "../images";
import {
  Avatar,
  BtnFollow,
  BtnFollowing,
  CardItem,
  CardsList,
  Followers,
  Logo,
  Tweets,
} from "./CardDetails.styled";

const CardDetails = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  return (
    <CardsList>
      {users?.map((user) => (
        <CardItem key={user.id}>
          <Logo src={image.logo} alt={user.user} />
          <img src={image.picture} alt={user.user} />
          <Avatar src={user.avatar} alt={user.user} />

          <Tweets>{user.tweets} TWEETS</Tweets>
          <Followers>
            {new Intl.NumberFormat().format(user.followers)} FOLLOWERS
          </Followers>
          {user.followers === 100500 ? (
            <BtnFollow
              onClick={() =>
                dispatch(
                  updateUsersTweetsThunk({
                    ...user,
                    followers: user.followers + 1,
                  })
                )
              }
            >
              FOLLOW
            </BtnFollow>
          ) : (
            <BtnFollowing
              onClick={() =>
                dispatch(
                  updateUsersTweetsThunk({
                    ...user,
                    followers: user.followers - 1,
                  })
                )
              }
            >
              FOLLOWING
            </BtnFollowing>
          )}
        </CardItem>
      ))}
    </CardsList>
  );
};

export default CardDetails;

import { useDispatch } from "react-redux";
import { updateUsersTweetsThunk } from "../../redux/tweetsOperations";
import * as image from "../images";
import {
  Avatar,
  BtnFollow,
  BtnFollowing,
  CardItem,
  Followers,
  Logo,
  Tweets,
} from "./CardDetails.styled";

const CardDetails = (user) => {
  const dispatch = useDispatch();

  return (
    <CardItem>
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
  );
};

export default CardDetails;

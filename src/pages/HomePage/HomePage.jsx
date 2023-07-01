import { Title, Tweets } from "./HomePage.styled";

const HomePage = () => {
  return (
    <div>
      <Title>WELCOME TO SOCIAL NETWORKS</Title>
      <Tweets to="/tweets">Tweets</Tweets>
    </div>
  );
};

export default HomePage;

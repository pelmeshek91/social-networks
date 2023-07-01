import styled from "styled-components";

export const CardItem = styled.li`
  position: relative;
  padding-top: 28px;
  padding-bottom: 36px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 380px;

  background-color: #5736a3;
`;
export const CardsUserList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BtnFollow = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #ebd8ff;
  color: #373737;
  font-weight: 700;
  font-size: 18px;
  padding: 14px 56px;
`;

export const BtnFollowing = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #5cd3a8;
  color: #373737;
  font-weight: 700;
  font-size: 18px;
  padding: 14px 39px;
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 5px solid #ebd8ff;
`;

export const Tweets = styled.p`
  position: relative;
  margin-top: 26px;
  margin-bottom: 16px;
  color: #ebd8ff;
  &::before {
    content: "";
    position: absolute;
    display: block;
    bottom: 77px;
    right: 80px;
    width: 156px;
    height: 5px;
    border-bottom: 5px solid rgb(235, 216, 255);
  }
  &::after {
    content: "";
    position: absolute;
    display: block;
    bottom: 77px;
    left: 80px;
    width: 156px;
    height: 5px;
    border-bottom: 5px solid rgb(235, 216, 255);
  }
`;

export const Followers = styled.p`
  margin-bottom: 26px;
  color: #ebd8ff;
`;

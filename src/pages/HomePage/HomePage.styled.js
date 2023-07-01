import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Tweets = styled(NavLink)`
  /* color: #ebd8ff;
  background-color: #5736a3;
  border-color: transparent;
  border-radius: 3px;
  margin-top: 30px;
  margin-left: 200px;
  padding: 8px;
  cursor: pointer; */
  padding: 12px 25px;
  margin: 10px auto;
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 110px;

  color: #ebd8ff;
  background-color: #5736a3;
  letter-spacing: 1px;
  text-decoration: none;

  border: transparent;

  border-radius: 10px;
`;

export const Title = styled.h1`
  color: #5736a3;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

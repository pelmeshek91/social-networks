import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Home = styled(NavLink)`
  padding: 12px 25px;
  margin-left: 30px;
  margin-top: 10px;
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 100px;

  color: #ebd8ff;
  background-color: #5736a3;
  letter-spacing: 1px;
  text-decoration: none;

  border: transparent;

  border-radius: 10px;
`;

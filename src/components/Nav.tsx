import REACT_LOGO from "../images/React_Logo.svg";
import styled from "styled-components";

const Nav: React.FC = () => {
  return (
    <Common>
      <Home href="/">React</Home>
      <LogoImg src={REACT_LOGO} />

      <ControlBox>
        <Control href="/connect">계약</Control>
        <Control href="/login">로그인</Control>
        <Control href="/signup">회원가입</Control>
      </ControlBox>
    </Common>
  );
};

const Common = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const Home = styled.a`
  display: flex;
  align-items: center;
  font-size: 30px;
  margin: 10px;
  text-decoration: none;
  color: black;
  font-weight: bold;
`;
const LogoImg = styled.img`
  width: 100px;
`;

const ControlBox = styled.div`
  display: flex;
  align-items: center;
`;

const Control = styled.a`
  margin: 10px;
  text-decoration: none;
  color: black;
`;

export default Nav;

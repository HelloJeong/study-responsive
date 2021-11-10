import REACT_LOGO from "../images/React_Logo.svg";
import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { IControlBoxProps } from "../type";

const Nav: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <Common>
      <Home href="/">React</Home>
      <LogoImg src={REACT_LOGO} />

      <ControlBox menu={menu}>
        <Control href="/connect">계약</Control>
        <Control href="/login">로그인</Control>
        <Control href="/signup">회원가입</Control>
      </ControlBox>
      <Menubar href="#" onClick={onClickMenu}>
        <IoIosMenu />
      </Menubar>
    </Common>
  );

  function onClickMenu() {
    setMenu(!menu);
  }
};

const Common = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Home = styled.a`
  display: flex;
  align-items: center;
  font-size: 30px;
  margin: 10px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const LogoImg = styled.img`
  width: 100px;
`;

const ControlBox = styled.div<IControlBoxProps>`
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-end;
    display: ${({ menu }) => (menu ? "flex" : "none")};
  }
`;

const Control = styled.a`
  margin: 10px;
  text-decoration: none;
  color: black;
`;

const Menubar = styled.a`
  display: flex;
  align-items: center;
  font-size: 30px;
  position: absolute;
  right: 32px;
  height: 97px;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export default Nav;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BodyHeader = styled.header`
  background: #1f1f27;
  box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* width: 100%; */

  @media (min-width: 320px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 23.3169px;
  line-height: 32px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 23.3169px;
    line-height: 32px;
  }
`;

export const NLink = styled(NavLink)`
  text-decoration: none !important;
  background: linear-gradient(
    180deg,
    #60c470 50%,
    rgba(96, 196, 112, 0) 107.5%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Coin = styled.img`
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-bottom: -2.5px;
`;

export const Login = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #c7ccdc;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const FirstLetter = styled.p`
  font-style: bold;
  font-size: 12px;
  line-height: 14px;
  color: #c7ccdc;
  margin: 0px 0px 0px -8px;

  width: 32px;
  height: 32px;
  background: #56566b;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.span`
  height: 36px;
  width: 0px;
  border: 1px solid #e0e5eb;
`;

export const ExitBtn = styled.button`
  /* width: 22px; */
  /* height: 14px; */
  cursor: pointer;
  background-color: transparent;
  border: transparent;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: #c7ccdc;
`;

export const LogoutImg = styled.img`
  width: 16px;
  height: 16px;
`;

export const LogoutBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: transparent;
  padding: 0;
`;

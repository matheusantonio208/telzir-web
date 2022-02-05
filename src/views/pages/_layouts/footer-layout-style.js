import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  border-bottom: 1px solid #dddddd;
  border-top: 1px solid #dddd;

  a {
    color: #313a46;
    font-weight: bold;
    text-decoration: underline;
    margin-left: 3px;
  }
`;

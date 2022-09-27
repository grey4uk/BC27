import styled from 'styled-components';
import { Form } from 'formik';

export const AuthForm = styled(Form)`
  padding: 30px;
`;

export const Link = styled.a`
  color: ${({ isActive }) => (isActive ? 'red' : 'grey')};
`;

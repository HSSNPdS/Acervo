import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 16vh;

  display:flex;
  flex-direction: column;

  background: var(--primary);
`;

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: white;

  background: var(--secondary);
`;

export const Navbar = styled.div`
  width: 100vw;
  height: 8vh;

  margin: 12px 0;

  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 6rem;
  height: 1.5rem;

  margin: 0.5rem 1.5rem 0.5rem 1.5rem;
  
  background: var(--senary)
`;
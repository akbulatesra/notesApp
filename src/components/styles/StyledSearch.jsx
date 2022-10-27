import styled from 'styled-components';

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #c689c6;
  justify-content: start;
  padding: 0.35rem;
  width: 30%;
  min-width: 280px;
  margin: 0.5rem auto;
  border-radius: 1rem;
  input {
    width: 100%;
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    font-family: monospace;
  }
  input::placeholder {
    color: white;
  }
  #searchIcon {
    fill: white;
    margin: 0 0.5rem;
  }
`;

import styled from 'styled-components';
export const StyledNote = styled.div`
  background-color: #e8a0bf;
  min-width: 25%;
  margin: 1rem;
  padding: 1rem;
  min-height: 225px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-wrap;
  border-radius: 1.5rem;
  color: #552fa7;
  font-size: 1rem;
  font-family: monospace;
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  #deleteBtn {
    cursor: pointer;
    background-color: #f7f5f2;
    padding: 0.5rem;
    border-radius: 1rem;
    fill: #552fa7;
  }
`;

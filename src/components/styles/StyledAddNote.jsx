import styled from 'styled-components';

const StyledAddNote = styled.div`
  background-color: #fcc5c0;
  min-width: 25%;
  margin: 1rem;
  padding: 1rem;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.5rem;
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  #textArea {
    background-color: #fcc5c0;
    color: #552fa7;
    border: none;
    outline: none;
    resize: none;
    font-size: 1rem;
  }

  #textArea::placeholder {
    color: #552fa7;
  }

  button {
    padding: 0.5rem;
    border: white 1px solid;
    border-radius: 1rem;
    background-color: white;
    color: #552fa7;
    cursor: pointer;
    font-family: monospace;
  }

  p {
    color: #552fa7;
    font-family: monospace;
  }
`;

export default StyledAddNote;

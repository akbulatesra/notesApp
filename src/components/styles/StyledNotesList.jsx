import styled from 'styled-components';

export const StyledNotesList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

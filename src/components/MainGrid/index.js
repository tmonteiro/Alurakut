import styled from 'styled-components';

const MainGrid = styled.main`
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 10px;
  padding: 16px;

  .profileArea {
    display: none;
    @media (min-width: 860px) {
      display: block;
    }
  }

  @media (min-width: 860px) {
    display: grid;
    max-width: 1100px;
    /* grid-template-areas: 'profileArea welcomeArea relationsArea'; */
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default MainGrid;

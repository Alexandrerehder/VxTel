import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  div {
    p {
     margin-left: 32%;
     margin-top: -25px;
     font-size: 35px;
    }
  }
  

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-title);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-title));
      border-radius: 0.25rem;

      &.black-solid {
        color: var(--text-title);
      }
    }
  }
`;

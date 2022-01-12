import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); //1f 1f 1f
  gap: 2rem;
  margin-top: -10rem;

  img {
    height: 2rem;
  }

  div {
    background: var(--shape);
    border-radius: 0.25rem;
    color: var(--text-title);
    display: block;

    header.first {
      display: block;
      margin-left: 40px;
      margin-top: 50px;

      p {
        margin-left: 15px;
        margin-top: 15px;
      }

      img {
        position: relative;
        left: 80px;
        top: -25px;
      }

      select {
        position: relative;
        left: 125px;
        top: -61.5px;
      }
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;

      header {
        strong {
          p {
            position: relative;
            margin-left: 10px;
            margin-top: 15px;
          }
        }
      }

      strong {
        p {
          position: relative;
          font-size: 20px;
          margin-top: 5px;
          margin-left: 20px;
        }
      }

      header {
        display: block;
        margin-left: 10px;

        p {
          position: relative;
          font-size: 45px;
        }

        img {
          position: relative;
          left: 285px;
          top: -55px;
        }
      }
    }

    header.second {
      display: block;
      margin-left: 40px;

      p {
        margin-left: 15px;
        margin-top: -15px;
      }

      img {
        position: relative;
        left: 80px;
        top: -25px;
      }

      select {
        position: relative;
        left: 125px;
        top: -61.5px;
      }
    }
  }

  header.plano {
    display: block;
    margin-left: 40px;
    margin-top: 50px;

    p {
      margin-left: 15px;
      margin-top: 15px;
    }

    img {
      position: relative;
      left: 80px;
      top: -25px;
    }

    select {
      position: relative;
      left: 125px;
      top: -61.5px;
    }
  }

  header.minutos {
    display: block;
    margin-left: 40px;

    p {
      margin-left: 15px;
      margin-top: -15px;
    }

    img {
      position: relative;
      left: 80px;
      top: -25px;
    }

    label {
      position: relative;
      left: 125px;
      top: -61.5px;
    }
  }
`;

export const Content = styled.div`
div {
  background: var(--text-body);
}


table {
  width: 5 %;
  border - spacing: 0 0.5rem;

  th {
    color: var(--text - body);
    font - weight: 400;
    padding: 1rem 2rem;
    text - align: left;
    line - height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text - body);
    border - radius: 0.25rem;

    &.black - solid {
      color: var(--text - title);
    }
  }
  `;

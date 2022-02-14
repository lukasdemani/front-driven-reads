import styled from 'styled-components';

function Logo() {
  return (
    <Container>
      Driven Reads
    </Container>
  )
}

const Container = styled.div`
  margin: 30px auto;
  font-size: 50px;
  color: #f28e62;

  display: flex;
  justify-content: center;
`;

export default Logo;
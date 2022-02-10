import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 200px;

    background-color: #f7f9fa;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    span {
        width: 100vw;
        display: flex;
        justify-content: end;
        padding-top: 7px;
        color: #7a8387;
    }
`;

export default Container;
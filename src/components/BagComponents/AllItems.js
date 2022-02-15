import styled from 'styled-components';

const AllItems = styled.div` 
    width: 100%;
    height: 300px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin: 20px 0;
    overflow-y: scroll;

    span{
        padding-top: 15px;
        text-align: end;
    }
`;

export default AllItems;

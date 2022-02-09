import styled from 'styled-components';

const BooksScroll = styled.div `
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    display: flex;
    gap: 15px;

    p {
        padding-bottom: 10px;
    }
`;

export default BooksScroll;
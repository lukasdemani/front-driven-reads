import styled from 'styled-components';

const SearchBox = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;

    input {
        width: 80vw;
        height: 30px;
        border-style: solid;
        border-color: #cdd5d8;
        border-radius: 5px;

        ::placeholder {
            padding-left: 5px;
            color: #7a8387;
        }
    }

    ion-icon {
        color: #7a8387;
        font-size: 25px;
        border-style: solid;
        border-color: #cdd5d8;
        border-radius: 5px;
    }
`;

export default SearchBox;
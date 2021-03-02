import styled from 'styled-components';

const StyledSelect = styled.select`
    width: ${(props) => props.selectSize}rem;
    margin: 0.5rem;
    border: 0.5rem;
    padding: 1rem;
    background-color: purple;
`;

export default StyledSelect;

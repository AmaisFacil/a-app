import styled from "styled-components";

export const Text = styled.Text`
    font-size: ${({size}) => size ?  size + 'px' : '30px'};
    color: ${({theme}) => theme.colors.text};
    font-family: 'Black';
`;
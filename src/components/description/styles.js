import styled from "styled-components";

export const Text = styled.Text`
    font-size: ${({size}) => size ?  size + 'px' : '15px'};
    color: ${({theme}) => theme.colors.secondaryText};
`;
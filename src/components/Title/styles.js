import styled from "styled-components";

export const Text = styled.Text`
    font-size: ${({size}) => size ?  size + 'px' : '30px'};
    text-align: ${({align}) => align ? align : 'left'};
    color: ${({theme}) => theme.colors.text};
    font-family: 'Black';
`;
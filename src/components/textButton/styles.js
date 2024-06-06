import styled from "styled-components";

export const Container = styled.TouchableOpacity`
    margin: ${({margin}) => margin ? margin : '1px'};
`;

export const Text = styled.Text`
    font-size: ${({size}) => size ? size + 'px' : '12px'};
    color: ${({theme}) => theme.colors.text};
`;
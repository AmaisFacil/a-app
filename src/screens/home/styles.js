import styled from "styled-components";

import useViewportUnits from './../../hooks/useViewport';
const {vh, vw} = useViewportUnits();

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    justify-content: space-around;
    align-items: center;
    padding: 10%;
    flex: 1;
    `
export const Image = styled.Image`
    height: ${vh(41)};
    width: ${vw(90)};
`
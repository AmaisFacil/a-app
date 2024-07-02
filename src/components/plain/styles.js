import styled from "styled-components";

import useViewport from '../../hooks/useViewport';

const { vw, vh } = useViewport();

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    border-radius: 10px;
    height: ${vh(30)};
    margin: 10px 0;
    padding: 2.5%;
    width: 80%;
`;
import styled from 'styled-components/native';
import useViewportUnits from '../../hooks/useViewport';

const { vw, vh } = useViewportUnits();

export const CarouselContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: ${vh(25)};
`;

export const BannerImage = styled.Image`
  width: ${vw(90)};
  height: ${vh(20)};
  border-radius: 10px;

`;

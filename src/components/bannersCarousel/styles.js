import styled from 'styled-components/native';
import useViewportUnits from '../../hooks/useViewport';

const { vw } = useViewportUnits();

export const CarouselContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: ${vw(5)};
`;

export const BannerImage = styled.Image`
  width: ${vw(90)};
  height: ${vw(45)};
  border-radius: 10px;

`;

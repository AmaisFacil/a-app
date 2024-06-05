import { Dimensions } from 'react-native';

const useViewport = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const vw = (percentage) => {
    return ((screenWidth * percentage) / 100 ) + 'px';
  };

  const vh = (percentage) => {
    return ((screenHeight * percentage) / 100) +'px';
  };

  return { vw, vh };
};


export default useViewport
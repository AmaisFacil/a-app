import * as Location from 'expo-location';

const getLocation = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') throw new Error('Permissão de localização negada');

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    return { latitude, longitude};
    
  } catch (error) {
    return { latitude: "", longitude: "" };
  }
};

export default getLocation;
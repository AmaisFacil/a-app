const getLocationDetails = async (latitude, longitude) => {
    try {
      if (!latitude || !longitude) return { city: "", region_code: "", country_name: "" };
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
  
      const data = await response.json();
  
      if (!data.address)return { city: "", region_code: "", country_name: "" }
  
      const { city, state: region_code, country: country_name } = data.address;
      return { city: city || '', region_code: region_code || '', country_name: country_name || '' };
    } catch (error) {
      return { city: "", region_code: "", country_name: "" };
    }
  };

export default getLocationDetails;
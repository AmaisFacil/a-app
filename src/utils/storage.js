import AsyncStorage from '@react-native-async-storage/async-storage';

const get =  async (key) => {
    try {
        const response = await AsyncStorage.getItem(key);
        const json = (response) => JSON.parse(response);
        return { response, json };
    } catch (error) {
        console.log(error);
        return null
    }
} 

const set = async (key, value) => {
    try {
        if (typeof value === 'object') value = JSON.stringify(value);
        const response = await AsyncStorage.setItem(key, value);
        return true;
    } catch (error) {
        console.log(error);
        return null
    }
}

const remove = async (key) => {
    try {
        const response = await AsyncStorage.removeItem(key)
        return true
    } catch (error) {
        console.log(error);
        return null
    }
}

export default { get, set, remove } 
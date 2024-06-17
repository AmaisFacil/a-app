import * as FileSystem from 'expo-file-system';


const save = async (videoUri) => {
  try {
    const videoName = videoUri.split('/').pop();
    const newVideoUri = `${FileSystem.documentDirectory}${videoName}`;
    
    await FileSystem.moveAsync({
      from: videoUri,
      to: newVideoUri,
    });

    return newVideoUri;
  } catch (error) {
    return { error: error.message };
  }
};

const remove = async (videoUri) => {
  try {
    await FileSystem.deleteAsync(videoUri, { idempotent: true });
  } catch (error) {
    return { error: error.message };
  }
};

const get = async (videoUri) => {
  try {
    const videoInfo = await FileSystem.getInfoAsync(videoUri);
    return videoInfo;
  } catch (error) {
    return { error: error.message };
  }
};


export default { save, get, remove }
import * as FileSystem from 'expo-file-system';
import * as Crypto from 'expo-crypto';

const generateHash = async (uri) => {
  try {
    const videoContent = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const hash = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, videoContent);

    return hash;
  } catch (error) {
    return { error: "Erro ao gerar SHA-256" };
  }
};

export default generateHash;

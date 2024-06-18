import * as FileSystem from 'expo-file-system';
import * as Crypto from 'expo-crypto';

const generateHash = async (uri) => {
  try {
    const videoContent = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });

    const binaryString = atob(videoContent);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const buffer = bytes.buffer;

    const hash = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, buffer);

    return hash;
  } catch (error) {
    return { error: "Erro ao gerar SHA-256:"};
  }
};

export default { generateHash }
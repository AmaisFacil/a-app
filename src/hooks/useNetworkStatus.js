import NetInfo from '@react-native-community/netinfo';
import React, { useEffect, useState} from 'react';

const useNetworkStatus = () => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener(state => {
        setIsConnected(state.isConnected);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    return { isConnected };
}

export default useNetworkStatus
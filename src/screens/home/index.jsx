import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import { Container, Content, Navbar } from './styles';
import BannerCarousel from '../../components/bannersCarousel';
import Avatar from '../../components/avatar';
import Button from '../../components/button';

const Home = () => {
  const user = useSelector((state) => state.user);
  const { navigate } = useNavigation();
  const banners = [
    'https://cdn.pixabay.com/photo/2015/08/23/09/22/banner-902589_640.jpg',
    'https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg',
    'https://t3.ftcdn.net/jpg/04/42/44/98/360_F_442449827_ispo2oI83ffX0TSax4Pgdd7xkqCA5ThA.jpg',
    'https://cdn.vectorstock.com/i/500p/10/12/tech-banner-desktop-computer-vector-38521012.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkYkJxgmlyI-2sqci2Gzeb0Z7_pHr27y2EAl-6aOFulWHy411NCDPwX6zTJBM9IvR4pGI&usqp=CAU'
  ]

  return (
    <Container>
      <Navbar>
        <Button 
          icon='plus' 
          text='criar' 
          width={35} 
          height={5}
        />
        <Avatar 
          name={user?.name || ""}
        />
      </Navbar>
      <Content>
        <BannerCarousel banners={banners} /> 

      </Content>
    </Container>
  );
};

export default Home;

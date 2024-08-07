import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import React, { useState, useEffect} from 'react';
import { useTheme } from 'styled-components';
import { ScrollView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { CategoryTitle, Container, Content, Navbar, PlainsContainer, ServiceButton, ServiceContainer, ServiceText } from './styles';
import BannerCarousel from '../../components/bannersCarousel';
import Avatar from '../../components/avatar';
import Button from '../../components/button';
import Title from '../../components/title';
import Plain from '../../components/plain';
import { getConfig } from '../../actions/config';
import Description from '../../components/description';

const Home = () => {
  const user = useSelector((state) => state.user);
  const [config, setConfig] = useState(null);
  const { navigate } = useNavigation();
  const theme = useTheme();

  const banners = [
    'https://cdn.pixabay.com/photo/2015/08/23/09/22/banner-902589_640.jpg',
    'https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg',
    'https://t3.ftcdn.net/jpg/04/42/44/98/360_F_442449827_ispo2oI83ffX0TSax4Pgdd7xkqCA5ThA.jpg',
    'https://cdn.vectorstock.com/i/500p/10/12/tech-banner-desktop-computer-vector-38521012.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkYkJxgmlyI-2sqci2Gzeb0Z7_pHr27y2EAl-6aOFulWHy411NCDPwX6zTJBM9IvR4pGI&usqp=CAU'
  ]

  const services = [
    {
      name: 'videos salvos',
      icon: 'save',
      route: 'Saves'
    },
    {
      name: 'webproves',
      icon: 'play-circle',
      route: 'Webproves'
    },
    {
      name: 'Certificados',
      icon: 'printer',
      route: 'Certificates'
    },
    {
      name: 'Criar',
      icon: 'plus-circle',
      route: 'Create'
    }
  ];

  useEffect(() => {
    (async () => {
      const response = await getConfig();
      setConfig(JSON.parse(response.file));
    })()
  },[])

  const renderItem = ({ item }) => (
    <ServiceButton onPress={() => navigate(item.route)}>
      <Feather color={theme.colors.primary} size={30} name={item.icon}/>
      <ServiceText>{item.name}</ServiceText>
    </ServiceButton>
  );


  return (
    <Container>
      <Navbar>
        <Button 
          icon='plus' 
          text='criar' 
          width={35} 
          height={5}
          onPress={() => navigate('Create')}
        />
        <Avatar 
          name={user?.name || ""}
          onPress={() => navigate('Profile')}
        />
      </Navbar>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Content>
        <BannerCarousel banners={banners} /> 
        <CategoryTitle>
          <Title text='Serviços' size={22}/>
        </CategoryTitle>
        <ServiceContainer>
          <FlatList
            keyExtractor={(item) => item.route}
            renderItem={renderItem}
            data={services}
            numColumns={2}
          />
        </ServiceContainer>
        <CategoryTitle>
          <Title text='Nossos Planos' size={22}/>
        </CategoryTitle>
        <PlainsContainer>
              {
                config?.plains && config.plains.map((plain, index) => (
                  <Plain plain={plain} key={index}/>
                ))
              }
        </PlainsContainer>
        <Description text={'© 2024 Agencia A+ Fácil - Todos os direitos reservados.'} align={'center'}/>
      </Content>
      </ScrollView>
    </Container>
  );
};

export default Home;

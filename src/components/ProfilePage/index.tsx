import React from 'react';
import Feed from '../Feed'
import { Container,
         Banner,
         Avatar,
         ProfileData,
         LocationIcon,
         CakeIcon,
         Followage,
         EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar/>
          </Banner>
          <ProfileData>
               <EditButton outlined>Editar perfil</EditButton>  

              <h1>João Paulo Duarte</h1>
              <h2>@joao_duarte</h2>
              <p>
                  Develeper <a href="https://www.treinaweb.com.br/blog/o-que-e-front-end-e-back-end/">Front End</a>
              </p>
              <ul>
                  <li>
                      <LocationIcon/>
                      São Paulo, Brasil
                  </li>
                  <li>
                      <CakeIcon/>
                      Nascido(a) em 04 de janeiro de 1993
                  </li>
              </ul>
              <Followage>
                  <span>
                      seguindo <strong>10</strong>
                  </span>
                  <span>
                      <strong>00 </strong> seguidores
                  </span>
              </Followage>
          </ProfileData>
          <Feed/> 
      </Container>
  );
}

export default ProfilePage;
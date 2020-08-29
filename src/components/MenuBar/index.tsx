import React from 'react';
import Button from '../Button';

import { Container,
          Logo,
          Topsite,
          MenuButton,
          HomeIcon, 
          BellIcon,
          EamilIcon,
          FavoriteIcon, 
          ProfileIcon,
          Botside,
          Avatar,
          ProfileData,
          ExitIcon
        } 
          from './styles';

const MenuBar: React.FC = () => {
  return(
      <Container>
          <Topsite>
              <Logo/>
              <MenuButton>
                  <HomeIcon/>
                  <span>Página inicial</span>
              </MenuButton>
              <MenuButton>
                  <BellIcon/>
                  <span>Notificações</span>
              </MenuButton>
              <MenuButton>
                  <EamilIcon/>
                  <span>Mensagens</span>
              </MenuButton>
              <MenuButton>
                  <FavoriteIcon/>
                  <span>Favoritados</span>
              </MenuButton>
              <MenuButton className="active">
                  <ProfileIcon/>
                  <span>Perfil</span>
              </MenuButton>
              <Button>
                  <span>Tweetar</span>
              </Button>
          </Topsite>
          <Botside>
              <Avatar/>
              <ProfileData>
                  <strong>João Paulo Duarte</strong>
                  <strong>@joao_duarte</strong>
              </ProfileData>
              <ExitIcon/>
          </Botside>
      </Container>
  );
}

export default MenuBar;
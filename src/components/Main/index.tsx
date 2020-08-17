import React from 'react';

import {Container, Header, BackIcon, ProfileInfo} from   './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon/>
              </button>
              <ProfileInfo>
                  <strong>João Paulo Duarte</strong>
                  <span>00 Tweets</span>
              </ProfileInfo>
          </Header>
          {/* <PrefilePage/>
          <BottomMenu>
              <HomeIcon/>
              <SearchIcon/>
              <BellIcon/>
              <EmailIcon/>
          </BottomMenu> */}
          

      </Container>
  )
}

export default Main;
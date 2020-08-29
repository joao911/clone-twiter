import React from 'react';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import StickyBox from 'react-sticky-box'
import { 
         Container,
         SearchWrapper,
         SearchInput, 
         SearchIcon,
         Body 
        } from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter"/>
              <SearchIcon/>
          </SearchWrapper>
          <StickyBox>
          <Body>
           <List
            title= "Talvez você curta"
            elements={[
              <FollowSuggestion
               name="Mayara Dezembro"
               nickname="@gordinha"
              />,
              <FollowSuggestion
               name="Felipe Soares"
               nickname="@chei_de_gaia"
              />,
              <FollowSuggestion
               name="Guilherme Soares"
               nickname="@joca"
              />
            ]}
           />
           <List
            title="talvez você curta"
            elements={[<News/>,<News/>,<News/>]}
           />
           <List
            title="talvez você curta"
            elements={[<News/>,<News/>,<News/>]}
           />
           <List
            title="talvez você curta"
            elements={[<News/>,<News/>,<News/>]}
           />
           <List
            title="talvez você curta"
            elements={[<News/>,<News/>,<News/>]}
           />
          </Body>
          </StickyBox>
          
      </Container>
  );
}

export default SideBar;
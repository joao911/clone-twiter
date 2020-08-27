import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column
`;

export const Tab = styled.div`
margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: pointer;

  color: var(--twitter);
  border-bottom: 2px solid var(--twitter);

  &:hover{
      background-color: var(--twitter-dark-hover);
  }
`;

export const Tweets = styled.div`
display: flex;
flex-direction: column;
/* esse flex-shrink serve para ajustar as coisas em dicpositivos mobiles */
flex-shrink:0;
`;


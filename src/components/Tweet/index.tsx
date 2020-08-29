import React from 'react';
import {Container,
        Retweeted,
        RocketseatIcon,
        Body,
        Avatar,
        Content,
        Header,
        Description,
        ImageContent,
        Icons,
        Status,
        CommentIcon,
        RetweetIcon,
        LikeIcon,
        Dot
        } from './styles'

const Tweet: React.FC =() => {
    return(
        <Container>
            <Retweeted>
                <RocketseatIcon/>
                Você retweetou
            </Retweeted>
            <Body>
                <Avatar/>
                <Content>
                    <Header>
                        <strong>Developer Front End</strong>
                        <span>@developerfrontend</span>
                        <Dot/>
                        <time>28 de Ago</time>
                    </Header>
                    <Description>Foguete não tem ré</Description>
                    <ImageContent/>
                    <Icons>
                     <Status>
                        <CommentIcon/>
                        18
                     </Status>
                     <Status>
                        <RetweetIcon/>
                        18
                     </Status>
                     <Status>
                        <LikeIcon/>
                        999
                     </Status>
                     </Icons> 
                </Content>

            </Body>
        </Container>
    );
}

export default Tweet;
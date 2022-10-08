import { Immobile } from "../../../../types/immobile.type";
import { Container, Header, Body, Tag, Content, Details, Title, Subtitle, Code, Price, ImageWrapper, Image, GroupButtons, ButtonPrimary, ButtonSecondary } from "./styles";

interface Props {
    immobile: Immobile;
}

export function CardSecondary({ immobile }: Props) {
    const { address, propertyValue, area, numberRooms, numberGarages, imageMain, adType } = immobile;
    const getUrl = (path: string) => {
        if(!path) {
            return '/no-image.png';
        }
        return path.startsWith('storage') ? `http://localhost:3000/${path}` : path;
    }
    
    return (
        <Container>
            <Header>
                <span>Casa 2028</span>
                <span>Publicado</span>
            </Header>
            <Body>
                <Tag>{adType === 'aluguel' ? 'Aluguel' : 'Venda'}</Tag>
                <Content>
                    <Details>
                        <Title>{address.route}</Title>
                        <Subtitle>{address.district}, {address.city}/{address.state}</Subtitle>
                        <Code>Código: 8687535</Code>
                        <Price>R$ {propertyValue}</Price>
                    </Details>
                    <ImageWrapper>
                        <Image src={getUrl(imageMain)}/>
                    </ImageWrapper>
                </Content>
                <GroupButtons>
                    <ButtonPrimary>Detalhes</ButtonPrimary>
                    <ButtonSecondary>Editar</ButtonSecondary>
                </GroupButtons>
            </Body>
        </Container>
    )
}
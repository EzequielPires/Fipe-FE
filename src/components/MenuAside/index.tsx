import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
    FiPower,
    FiSettings,
    FiHelpCircle,
    FiGrid,
    FiInfo
} from "react-icons/fi"
import { BiCar } from "react-icons/bi";
import { useAuthenticate } from "../../contexts/AuthenticateContext";
import {
    Container,
    Header,
    Brand,
    Footer,
    Configs,
    Logout,
    Item,
    Content,
    RealEstateContent,
    RealEstateAvatar,
    RealEstateName,
} from "./styles";

export function MenuAside() {
    const { user, signOut } = useAuthenticate();
    const router = useRouter();
    const isActive = (asPath: string) => router.asPath === getLink(asPath);
    const getLink = (asPath: string) => router.asPath.includes('imobiliarias') ? `/imobiliarias${asPath}` : asPath;

    useEffect(() => {
        console.log(user);
    }, [])

    return (
        <Container>
            <Header>
                <Link href={router.asPath.includes('imobiliarias') ? '/imobiliarias' : '/'} passHref>
                    <Brand>
                        {router.asPath.includes('imobiliarias') ? <img src="/redemobilar.svg" alt="" /> : <img src="/logo.svg" alt="" />}
                    </Brand>
                </Link>
            </Header>
            {router.asPath.includes('imobiliarias') && user?.realEstate &&
                <RealEstateContent>
                    <RealEstateAvatar>
                        <img src={user.realEstate.logo} alt="" />
                    </RealEstateAvatar>
                    <RealEstateName>{user.realEstate.name}</RealEstateName>
                </RealEstateContent>
            }
            <Content>
                <Link href={getLink('/admin')} passHref>
                    <Item active={isActive('/admin')}><FiGrid />Dashboard</Item>
                </Link>
                <Link href={getLink('/fipe-vehicles')} passHref>
                    <Item active={isActive('/fipe-vehicles')}><BiCar />Fipe veículos</Item>
                </Link>
                <Link href={getLink('/pendentes')} passHref>
                    <Item active={isActive('/pendentes')}><FiInfo />Pendentes</Item>
                </Link>
            </Content>
            <Footer>
                <Configs>
                    <Link href={'/'} passHref>
                        <Item><FiSettings />Configurações</Item>
                    </Link>
                    <Link href={'/'} passHref>
                        <Item><FiHelpCircle />Ajuda</Item>
                    </Link>
                </Configs>
                <Logout>
                    <Item onClick={signOut}><FiPower />Sair</Item>
                </Logout>
            </Footer>
        </Container >
    )
}
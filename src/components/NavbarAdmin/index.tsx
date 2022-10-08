import {
    Container,
    RouteActive,
    RouteActiveTitle,
    UserWrapper,
    User,
    Avatar,
    UserName,
} from "./styles";
import {
    FiGrid,
    FiBell,
    FiHome,
    FiCalendar
} from "react-icons/fi";
import { useRouter } from "next/router";
import { useAuthenticate } from "../../contexts/AuthenticateContext";

export function NavbarAdmin() {
    const { user } = useAuthenticate();
    const router = useRouter();
    const isActive = (asPath: string) => router.asPath === getLink(asPath);
    const getLink = (asPath: string) => router.asPath.includes('imobiliarias') ? `/imobiliarias${asPath}` : asPath;
    return (
        <Container>
            {isActive('/admin') &&
                <RouteActive>
                    <FiGrid />
                    <RouteActiveTitle>Dashboard</RouteActiveTitle>
                </RouteActive>
            }
            {
                user &&
                <UserWrapper>
                    <FiBell />
                    <User>
                        <Avatar>
                            {user.avatarUrl ? <img src={user.avatarUrl} alt="Avatar" /> : <span>{user?.name?.substr(0, 1)}</span>}
                        </Avatar>
                        <UserName>{user.name}</UserName>
                    </User>
                </UserWrapper>
            }
        </Container>
    )
}
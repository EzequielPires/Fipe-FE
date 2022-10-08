import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { createContext, useContext } from "react";
import { useNotification } from "../hooks/useNotification";
import { api } from "../services/api";

interface IUser {
    id?: string;
    name?: string;
    email: string;
    password?: string;
    avatarUrl?: string;
    isGoogleAuthenticate?: boolean;
    idGoogle?: string;
    phone?: string;
    realEstate?: any;
}

interface IAuthenticateProps {
    user: IUser;
    signInGoogle(data: IGoogleResponse): Promise<void>;
    logout(data: IUser): Promise<void>;
    signIn({ email, password }: IUser): Promise<void>;
    signInRealState({ email, password }: IUser): Promise<void>;
    signOut(): Promise<void>;
}

interface IGoogleResponse {
    tokenId: string;
    accessToken: string;
    profileObj: {
        googleId: string;
        imageUrl: string;
        email: string;
        name: string;
        givenName: string;
        familyName: string;
    }
}

const AuthenticateContext = createContext({} as IAuthenticateProps);

const AuthenticateProvider = ({ children }: any) => {
    const [user, setUser] = useState<IUser>(null);
    const notification = useNotification();
    const router = useRouter();

    useEffect(() => {
        const { 'mobilar.token': token, 'mobilar.user': user } = parseCookies();
        if (token && user) {
            setUser(JSON.parse(user));
        }
    }, []);

    const setAuthCookie = (name: string, data: string) => {
        setCookie(undefined, name, data, { maxAge: 60 * 60 * 1, path: '/', })
    }

    const signIn = async ({ email, password }: IUser) => {
        try {
            const response = await api.post('authenticate', {
                email,
                password
            }).then(res => res.data);
            if (response) {
                setAuthCookie('mobilar.token', response.token);
                api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
                setAuthCookie('mobilar.user', JSON.stringify(response.user));
                setUser(response.user);
                router.push('/admin');
            }
        } catch (error) {
            notification.execute('danger', `Senha ou email incorretos.`);
        }
    }

    const signOut = async () => {
        setUser(null);
        destroyCookie(undefined, 'mobilar.user');
        destroyCookie(undefined, 'mobilar.token');
        {router.asPath.includes('imobiliarias') ? router.push('/imobiliarias') : router.push('/')}
    }

    const signInRealState = async ({ email, password }: IUser) => {
        try {
            const response = await api.post('authenticate/real-estate', {
                email,
                password
            }).then(res => res.data);
            if (response) {
                setAuthCookie('mobilar.token', response.token);
                const user: IUser = {
                    ...response.user,
                    realEstate: response.realEstate
                }
                api.defaults.headers['Authorization'] = `Bearer ${response.token}`;
                setAuthCookie('mobilar.user', JSON.stringify(user));
                setUser(user);
                router.push('/imobiliarias/admin');
            }
        } catch (error) {
            notification.execute('danger', `Senha ou email incorretos.`);
        }
    }

    const logout = async ({ email, name, password, phone }: IUser) => {
        try {
            const user = await api.post('user', {
                email,
                name,
                password,
                phone
            }).then(res => res.data);
            if (user) {
                notification.execute('success', `Usuário ${name} criado com sucesso.`);
            }
        } catch (error) {
            notification.execute('danger', `Erro ao criar usuário ${name}, tente novamente.`);
        }
    }

    const signInGoogle = async ({ accessToken, profileObj, tokenId }: IGoogleResponse) => {
        const user = await api.post('authenticate/google', {
            token: accessToken
        }).then(res => res.data);
        if (user) {
            router.push('/admin');
        }
    }

    return (
        <AuthenticateContext.Provider value={{
            signInGoogle,
            logout,
            signOut,
            signIn,
            signInRealState,
            user
        }}>
            {children}
        </AuthenticateContext.Provider>
    )
}

const useAuthenticate = () => {
    const context = useContext(AuthenticateContext);

    return context;
}

export { useAuthenticate, AuthenticateProvider }
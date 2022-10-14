import Link from "next/link";
import { useState } from "react";
import { GetServerSideProps } from "next";
import { FiRepeat } from "react-icons/fi";
import { MenuAside } from "../../components/MenuAside";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { api } from "../../services/api";
import { Container, Content, Brands, Breadcrumbing, Button } from "./styles";
import { Loading } from "../../components/Loading";

export function Models({ brand }: any) {
    const [loading, setLoading] = useState(false);

    const makeSyncTable = async () => {
        try {
            setLoading(true);
            for(let i = 0; i < brand.models.length; i++) {
                await api.get(`fipe-official/sync-version-model/${brand.models[i].id}`).then(res => res.data);
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }

    }
    return (
        <Container>
            <NavbarAdmin />
            <MenuAside />
            <Content>
                {brand &&
                    <Breadcrumbing>
                        <Link href={`/admin`}>
                            <a>Marcas</a>
                        </Link>
                        /
                        <span>{brand.name}</span>
                        /
                        <span>Modelos</span>
                    </Breadcrumbing>
                }
                {loading && <Loading />}
                <Button onClick={makeSyncTable}>
                    <FiRepeat />
                    Sincronizar
                </Button>
                <Brands>
                    {brand?.models?.map((model: any) => (
                        <Link href={`/admin/brands/${brand.id}/models/${model.id}/versions`}>
                            <a key={model.id}>
                                {model.name}
                            </a>
                        </Link>
                    ))}
                </Brands>
            </Content>
        </Container>
    );
}


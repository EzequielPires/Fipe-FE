import { GetServerSideProps } from "next";
import Link from "next/link";
import { MenuAside } from "../../components/MenuAside";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { api } from "../../services/api";
import { Container, Content, Brands, Breadcrumbing } from "./styles";

export function Models({ brand }: any) {
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


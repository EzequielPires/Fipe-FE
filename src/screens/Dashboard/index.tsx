import { GetServerSideProps } from "next";
import Link from "next/link";
import { MenuAside } from "../../components/MenuAside";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { api } from "../../services/api";
import { Container, Content, Brands } from "./styles";

export function Dashboard({ brands }: any) {
    return (
        <Container>
            <NavbarAdmin />
            <MenuAside />
            <Content>
                <Brands>
                    {brands?.map((brand: any) => (
                        <Link href={`/admin/brands/${brand.id}/models`} key={brand.id}>
                            <a key={brand.id}>
                                {brand.name}
                            </a>
                        </Link>
                    ))}
                </Brands>
            </Content>
        </Container>
    );
}


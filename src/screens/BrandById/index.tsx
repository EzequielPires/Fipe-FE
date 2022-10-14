import Link from "next/link";
import { useEffect } from "react";
import { InputText } from "../../components/form/InputText";
import { MenuAside } from "../../components/MenuAside";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { useForm } from "../../hooks/useForm";
import { api } from "../../services/api";
import { Container, Content, Title, Form, Button } from "./styles";

export function BrandById({ brand }: any) {
    const name = useForm();
    useEffect(() => {
        name.setValue(brand.name);
    }, [brand]);
    return (
        <Container>
            <NavbarAdmin />
            <MenuAside />
            {brand ?
                <Content>
                    <Title>Marca <strong>{brand.name}</strong></Title>
                    <Form>
                        <InputText
                            id="name"
                            title="Nome:"
                            type="text"
                            placeholder="Entre com o nome da marca"
                            {...name}
                        />
                        <Link href={`/admin/brands/${brand.id}/models`}>
                            <a>Ver modelos</a>
                        </Link>
                        <Button>Salvar</Button>
                    </Form>
                </Content>
                :
                <span>Not found!</span>
            }
        </Container>
    );
}
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { InputText } from "../../components/form/InputText";
import { MenuAside } from "../../components/MenuAside";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { useForm } from "../../hooks/useForm";
import { api } from "../../services/api";
import { Container, Content, Title, Form, Button, ButtonDelete } from "./styles";

export function ModelById({ data }: any) {
    const router = useRouter();
    const {id, id_model} = router.query;
    const name = useForm();

    const updateModel = async (e) => {
        e.preventDefault();
        const response = await api.patch(`model/${id_model}`, {
            name: name.value
        }).then(res => res.data);
        console.log(response);
    }

    useEffect(() => {
        if(data) {
            name.setValue(data.name);
        }
    }, [data]);
    return (
        <Container>
            <NavbarAdmin />
            <MenuAside />
            {data ?
                <Content>
                    <Title>Marca <strong>{data.name}</strong></Title>
                    <Form onSubmit={updateModel}>
                        <InputText
                            id="name"
                            title="Nome:"
                            type="text"
                            placeholder="Entre com o nome da marca"
                            {...name}
                        />
                        <Link href={`/admin/brands/${id}/models/${id_model}/versions`}>
                            <a>Ver versões</a>
                        </Link>
                        <Button>Salvar</Button>
                        <ButtonDelete>Deletar</ButtonDelete>
                    </Form>
                </Content>
                :
                <span>Not found!</span>
            }
        </Container>
    );
}
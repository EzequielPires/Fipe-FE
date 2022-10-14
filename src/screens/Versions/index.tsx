import { GetServerSideProps } from "next";
import Link from "next/link";
import { MenuAside } from "../../components/MenuAside";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { api } from "../../services/api";
import { FiPlus, FiRepeat } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Container, Content, Brands, Title, Breadcrumbing, Button } from "./styles";
import { Loading } from "../../components/Loading";

export function Versions({ data }: any) {
    const [model, setModel] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [versions, setVersions] = useState<any>();
    const router = useRouter();
    const { id_model } = router.query;

    useEffect(() => {
        if (data && data != undefined) {
            setModel(data);
            setVersions(data.versions);
        }
    }, [data]);

    const makeSyncTable = async () => {
        try {
            setLoading(true);
            const data = await api.get(`fipe-official/sync-version-model/${id_model}`).then(res => res.data);
            setModel(data);
            setVersions(data.versions);
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }

    }

    const addVersion = async (versionData: any) => {
        try {
            setLoading(true);
            const version = await api.post('fipe/version-model/create', {
                name: versionData.name,
                code: versionData.code,
                model_id: id_model
            });
            const model = await api.get(`model/${id_model}/versions`).then(res => res.data);
            setModel(model.model);
            setVersions(model.versions);
        } catch (error: any) {
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
                {loading && <Loading />}
                {model &&
                    <Breadcrumbing>
                        <Link href={`/admin/brands/`}>
                            <a>Marcas</a>
                        </Link>
                        /
                        <span>{model.brand.name}</span>
                        /
                        <Link href={`/admin/brands/${model.brand.id}/models/`}>
                            <a>Modelos</a>
                        </Link>
                        /
                        <span>{model.name}</span>
                        /
                        <span>Versões</span>
                    </Breadcrumbing>
                }
                <Button onClick={makeSyncTable}>
                    <FiRepeat />
                    Sincronizar
                </Button>
                <Title>Versões Cadastradas:</Title>
                <Brands>
                    {model?.versions?.map((version: any) => (
                        <Link href={`/admin/brands/${data.brand.id}/models/${data.id}/versions/${version.id}/years`}>
                            <a key={version.id}>
                                {version.name}
                            </a>
                        </Link>
                    ))}
                </Brands>
                <Title style={{ marginTop: 32 }}>Versões Pendentes:</Title>
                <Brands>
                    {versions?.map((version: any) => (
                        <>
                            {!model.versions.find((item: any) => item.name === version.name) ?
                                <button key={version.code} onClick={() => addVersion(version)}>
                                    {version.name}
                                    <FiPlus />
                                </button> : null}
                        </>
                    ))}
                </Brands>
            </Content>
        </Container>
    );
}


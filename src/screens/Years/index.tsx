import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { MenuAside } from "../../components/MenuAside";
import { NavbarAdmin } from "../../components/NavbarAdmin";
import { api } from "../../services/api";
import { Container, Content, Brands, Loading, Span, Title, Breadcrumbing } from "./styles";

export function Years({ data }: any) {
    const [version, setVersion] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [years, setYears] = useState<any>();
    const router = useRouter();
    const { id_version } = router.query;

    useEffect(() => {
        if (data) {
            setVersion(data);
            setYears(data.years);
        }
    }, [data]);

    const addYear = async (yearData: any) => {
        try {
            setLoading(true);
            console.log(yearData);
            const year = await api.post('year-version-model', {
                name: yearData.name,
                code: yearData.code,
                version_id: id_version
            });
            const version = await api.get(`version-model/${id_version}/years`).then(res => res.data);
            setVersion(version.version);
            setYears(version.years);
        } catch (error: any) {
            alert(error.message);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }
    return (
        <Container>
            <NavbarAdmin />
            <MenuAside />
            <Content>
                {loading && <Loading>Carregango<Span /><Span /><Span /></Loading>}
                {version &&
                    <Breadcrumbing>
                        <Link href={`/admin/brands/`}>
                            <a>Marcas</a>
                        </Link>
                        /
                        <span>{version.model.brand.name}</span>
                        /
                        <Link href={`/admin/brands/${version.model.brand.id}/models/`}>
                            <a>Modelos</a>
                        </Link>
                        /
                        <span>{version.model.name}</span>
                        /
                        <Link href={`/admin/brands/${version.model.brand.id}/models/${version.model.id}/versions`}>
                            <a>versões</a>
                        </Link>
                        /
                        <span>{version.name}</span>
                        /
                        <span>Anos</span>
                    </Breadcrumbing>
                }
                <Title>Anos Cadastradas:</Title>
                <Brands>
                    {version?.years?.map((version: any) => (
                        <a key={version.id}>
                            {version.name}
                        </a>
                    ))}
                </Brands>
                <Title style={{ marginTop: 32 }}>Anos Pendentes:</Title>
                <Brands>
                    {Array.isArray(years) && years?.map((year: any) => (
                        <>
                            {!version.years.find((item: any) => item.name === year.name) ?
                                <button key={year.code} onClick={() => addYear(year)}>
                                    {year.name}
                                    <FiPlus />
                                </button> : null}
                        </>
                    ))}
                </Brands>
            </Content>
        </Container>
    );
}


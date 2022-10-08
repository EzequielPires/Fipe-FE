import { GetServerSideProps } from "next";
import { Models } from "../../../../../src/screens/Models";
import { api } from "../../../../../src/services/api";

export default function ModelsPage({brand}: any) {
    return (
        <Models brand={brand}/>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const brand = await api.get(`brand/${ctx.query.id}/models`).then(res => res.data);

    return {
        props: {
            brand
        }
    }
} 
import { GetServerSideProps } from "next";
import { BrandById } from "../../../../src/screens/BrandById";
import { api } from "../../../../src/services/api";

export default function BrandByIdPage({brand}) {
    return <BrandById brand={brand}/>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const brand = await api.get(`brand/${ctx.query.id}`).then(res => res.data);

    return {
        props: {
            brand
        }
    }
}
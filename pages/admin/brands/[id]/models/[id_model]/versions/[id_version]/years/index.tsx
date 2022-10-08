import { GetServerSideProps } from "next";
import { Years } from "../../../../../../../../../src/screens/Years";
import { api } from "../../../../../../../../../src/services/api";

export default function YearsPage({data}: any) {
    return (
        <Years data={data}/>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const data = await api.get(`/version-model/${ctx.query.id_version}/years`).then(res => res.data);
    console.log(data);
    return {
        props: {
            data
        }
    }
} 
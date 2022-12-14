import { GetServerSideProps } from "next";
import { Versions } from "../../../../../../../src/screens/Versions";
import { api } from "../../../../../../../src/services/api";

export default function ModelsPage({data}: any) {
    return (
        <Versions data={data}/>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const data = await api.get(`model/${ctx.query.id_model}`).then(res => res.data);
    console.log(data)
    return {
        props: {
            data
        }
    }
} 
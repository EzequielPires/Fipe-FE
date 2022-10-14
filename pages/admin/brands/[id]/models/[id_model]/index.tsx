import { GetServerSideProps } from "next";
import { ModelById } from "../../../../../../src/screens/ModelById";
import { api } from "../../../../../../src/services/api";

export default function ModelByIdPage({data}) {
    return <ModelById data={data}/>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const data = await api.get(`model/${ctx.query.id_model}`).then(res => res.data);

    return {
        props: {
            data
        }
    }
}
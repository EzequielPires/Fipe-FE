import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { Dashboard } from "../../src/screens/Dashboard";
import { api } from "../../src/services/api";

export default function AdminPage({brands}: any) {
    return (
        <Dashboard brands={brands}/>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const brands = await api.get('brand').then(res => res.data);

    return {
        props: {
            brands
        }
    }
} 
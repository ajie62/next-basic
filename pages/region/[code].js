import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import { Layout } from '../../components/layout'

const CodeRegion = ({ data }) => {
    return (
        <>
        {
            data && (
                <>
                    <Head>
                        <title>{data.nom}</title>
                    </Head>

                    <Layout>
                        <h1>Region : {data.nom}</h1>
                        <p>Code : {data.code}</p>
                    </Layout>
                </>
            )
        }
        </>
    )
}

export const getServerSideProps = async ({ params }) => {
    const { data } = await axios.get(`${process.env.API_GEO}/regions/${params.code}`);

    return {
        props: {
            data
        }
    }
}

export default CodeRegion;

import React from 'react'
import { Layout } from '../components/layout'
import axios from 'axios'
import Head from 'next/head'

const Departement = ({ data }) => {
    const styles = {
        borderBottom: "1px solid #DDD",
        margin: 10,
        padding: 10
    }

    return (
        <>
            <Head>
                <title>Departments list</title>
            </Head>

            <Layout>
                {
                    data.map(departement => (
                        <div style={styles} key={departement.code}>
                            <h1>{departement.nom}</h1>
                            <div>Department code: {departement.code}</div>
                            <div>Region code: {departement.codeRegion}</div>
                        </div>
                    ))
                }
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const { data } = await axios.get(`${process.env.API_GEO}/departements`);

    return {
        props: {
            data
        }
    }
}

export default Departement;

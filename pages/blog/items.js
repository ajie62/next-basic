import React from 'react'
import { Layout } from '../../components/layout'
import Head from 'next/head'

const Items = () => {
    return (
        <>
            <Head>
                <title>Items</title>
            </Head>

            <Layout>
                <h1>Items</h1>

                <h2>Categories list</h2>
                <ul>
                    <li>Culture</li>
                    <li>Geography</li>
                    <li>Social</li>
                    <li>Economics</li>
                </ul>
            </Layout>
        </>
    )
}

export default Items;

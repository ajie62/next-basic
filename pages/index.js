import React from 'react'
import { Layout } from '../components/layout';
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'

const Home = ({ data }) => {
  const styles = {
    borderBottom: "1px solid #DDD",
    padding: 10,
    margin: 10
  };

  return (
    <>
      <Head>
        <title>Regions list</title>
      </Head>

      <Layout>
        <div className="container">
          {
            data.map(region => (
              <div style={styles} key={region.code}>
                <Link href="/region/[code]" as={`/region/${region.code}`} passHref>
                  <h1>{region.nom}</h1>
                </Link>
                <p>{region.code}</p>
              </div>
            ))
          }
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(`${process.env.API_GEO}/regions`);

  return {
    props: {
      data
    }
  }
}

export default Home;
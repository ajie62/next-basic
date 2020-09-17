import React from 'react'
import { Layout } from '../components/layout'
import axios from 'axios'
import Head from 'next/head'

// SWR is a custom hook developed by NextJS team to fetch data on client side.
// With this hook, there's no need to use `useEffect` to fetch data.
import useSWR from 'swr'

const Profile = () => {
    // For SWR custom hook
    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher)

    if (!data) return <h1>Loading...</h1>
    if (error) return <h1>An error has occurred.</h1>

    const styles = {
        borderBottom: "1px solid #DDD",
        margin: 10,
        padding: 10
    }

    return (
        <>
            <Head>
                <title>Users list</title>
            </Head>

            <Layout>
                {
                    data && data.map(user => (
                        <div style={styles} key={user.id}>
                            <h1>{user.name}</h1>
                            <div>Email: {user.email}</div>
                            <div>Phone: {user.phone}</div>
                        </div>
                    ))
                }
            </Layout>
        </>
    )
}

export default Profile;

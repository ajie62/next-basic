import React from 'react'
import { Layout } from '../components/layout'
import Link from 'next/link'
import axios from 'axios'
import Head from 'next/head'

const Blog = ({ posts }) => {
    const styles = {
        main: {
            borderBottom: "1px solid #DDD",
            margin: 20,
            padding: 20
        },
        img: {
            height: 200,
            width: 350
        }
    }

    return (
        <>
            <Head>
                <title>Blogs list</title>
            </Head>

            <Layout>
                {
                    posts.map(post => (
                        <div style={styles.main} key={post._id}>
                            <h1>{post.title}</h1>
                            <Link href="/blog/[id]" as={`/blog/${post._id}`} passHref>
                                <div>
                                    <img src={post.pictures[0]} style={styles.img} />
                                </div>
                            </Link>
                            <div>{post.body}</div>
                        </div>
                    ))
                }      
            </Layout>
        </>
    )
}

export const getStaticProps = async (context) => {
    const url = 'https://aqueous-meadow-07678.herokuapp.com';
    const { data } = await axios.get(`${url}/api/posts`);
    const posts = data.data;

    return {
        props: {
            posts
        }
    }
}

export default Blog;

import React from 'react';
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Link from 'next/link';

function Capsules({ posts }) {
    //console.log({ posts })
    return (
        <Layout>
            <ul>
                {posts.map((posts) => (
                    <div>
                        <ul>
                            <li>{posts.capsule_serial}.</li>
                        </ul>
                    </div>
                ))}
            </ul>
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://api.spacexdata.com/v3/capsules')
    const posts = await res.json()
    return {
        props: {
            posts,
        }
    }
}

export default Capsules;
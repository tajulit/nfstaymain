import React from 'react'
import Layout from '../components/layout'
import Upcoming from './upcoming'

const page = () => {
    return (
        <Layout>
            <div className=" h-full flex flex-col gap-8">
                <Upcoming />
            </div>
        </Layout >
    )
}

export default page
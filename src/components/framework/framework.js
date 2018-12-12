import Head from 'next/head'
import { Component } from 'react'

export default class Framework extends Component {
    constructor() {
        super()
    }

    render() {
        const { children } = this.props
        return (
            <div>
                <Head>
                    <title>Nice react app with SSR</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>
                {children}
            </div>
        )
    }
}

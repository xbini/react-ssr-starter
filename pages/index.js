import Head from 'next/head'
import '../style/common.scss'

export default () => {
    return <div>
        <Head>
            <title>Nice react app with SSR</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <p>Hello world!</p>
    </div>
}

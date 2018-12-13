import HeadTag from 'next/head'
import { Component } from 'react'

const Head = HeadTag as any
const promisePolyfill = !Promise ? '' :
    <script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"/>

export default class Framework extends Component {
    constructor(props: Readonly<any>) {
        super(props)
    }

    public componentDidMount(): void {
        console.log(promisePolyfill)
        FastClick.attach(document.body)
    }

    public render() {
        const { children } = this.props
        return (
            <div>
                <Head>
                    <title>cnode react app with SSR</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"/>
                    {promisePolyfill}
                </Head>
                {children}
            </div>
        )
    }
}

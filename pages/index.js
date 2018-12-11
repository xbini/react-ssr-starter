import Head from 'next/head'
import { Component } from 'react'
import '../style/common.scss'
import List from 'antd-mobile/lib/list'
import 'antd-mobile/lib/list/style/index.css'

const Item = List.Item
const Brief = Item.Brief

export default class ListPageComponent extends Component {
    state = {
        list: []
    }

    constructor() {
        super()
        let number = 1
        setInterval(() => {
            const { list } = this.state
            this.setState({ list: list.concat(number++) })
        }, 1000)
    }

    render() {
        return (
            <div>
                <Head>
                    <title>Nice react app with SSR</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>
                <p>Hello world!</p>
                <List renderHeader={() => 'Basic Style'} className="my-list">
                    {this.state.list.map(v => <Item key={v} extra={'extra content'}>{v}</Item>)}
                </List>
            </div>
        )
    }
}

import Head from 'next/head'
import { Component } from 'react'
import '../style/common.scss'
import List from 'antd-mobile/lib/list'
import 'antd-mobile/lib/list/style/index.css'
import Framework from '../src/components/framework/framework'

const Item = List.Item
const Brief = Item.Brief

export default class ListPageComponent extends Component {
    state = {
        list: [1, 2, 3, 4, 5, 6]
    }

    constructor() {
        super()
        let number = 7
        setInterval(() => {
            const { list } = this.state
            this.setState({ list: list.concat(number++) })
        }, 1000)
    }

    render() {
        return (
            <Framework>
                <List renderHeader={() => 'Basic Style'} className="my-list">
                    {this.state.list.map(v => <Item key={v} extra={'extra content'}>{v}</Item>)}
                </List>
            </Framework>
        )
    }
}

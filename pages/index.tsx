import { Component } from 'react'
import List from 'antd-mobile/lib/list'
import 'antd-mobile/lib/list/style/index.css'
import '../src/style/common.scss'
import Framework from '../src/components/framework/framework'

const Item = List.Item

// const Brief = Item.Brief

interface InterfaceState {
    list: number[]
}

export default class ListPageComponent extends Component {
    public state: InterfaceState = {
        list: [1, 2, 3, 4, 5, 6]
    }

    constructor(props: any) {
        super(props)
        let n: number = 7
        setInterval(() => {
            const { list } = this.state
            this.setState({ list: list.concat(n++) })
        }, 1000)
    }

    public render() {
        const header = ('Basic Style')
        return (
            <Framework>
                <List renderHeader={header} className="my-list">
                    {this.state.list.map((v) => <Item key={v} extra={'extra content'}>{v} </Item>)}
                </List>
            </Framework>
        )
    }
}

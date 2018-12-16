import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Component, SyntheticEvent } from 'react'
import { List } from 'antd-mobile'
import 'antd-mobile/lib/list/style/index.css'
import '../style/common.scss'

const Item = List.Item

// const Brief = Item.Brief

interface InterfaceState {
    list: number[]
}

const genList = (length: number = 1000) => {
    const array: number[] = []
    for (let i = 0; i < length; i++) {
        array.push(i)
    }
    return array
}

export default class ListPage extends Component {
    public state: InterfaceState = {
        list: genList()
    }

    constructor(props: Readonly<any>) {
        super(props)
    }

    public handleClick(name?: string, e?: SyntheticEvent): void {
        console.log(this)
        console.log(name)
        console.log(e)
    }

    public componentDidMount(): void {
        setTimeout(() => {
            this.setState({ list: this.state.list.concat(999999) })
        }, 1000)
    }

    public render() {
        const header = ('Basic Style')
        return (
            <div>
                <button onClick={ this.handleClick.bind(this,'bini') }>点击</button>
                <List renderHeader={ header } className="my-list">
                    { this.state.list.map((v) => <Item key={ v } extra={ 'extra content' }>{ v } </Item>) }
                </List>
                2222
            </div>
        )
    }
}

ReactDOM.render(<ListPage/>, document.querySelector('#app'))

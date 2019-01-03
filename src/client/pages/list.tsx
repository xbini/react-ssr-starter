import React from 'react'
import { render } from 'react-dom'
import { Component, SyntheticEvent } from 'react'
import { Button, List } from 'antd-mobile'
import '../style/common.scss'

const { Item } = List

// const Brief = Item.Brief

interface IState {
    list: number[]
}

const genList = (length: number = 5) => {
    const array: number[] = []
    for (let i = 0; i < length; i++) {
        array.push(i)
    }
    return array
}

export default class ListPage extends Component {
    public state: IState = {
        list: genList()
    }

    constructor(props: Readonly<any>) {
        super(props)
    }

    public handleClick(name?: string, e?: SyntheticEvent): void {
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
                <Button onClick={ this.handleClick.bind(this, 'bini') }>点我啊</Button>
                <List renderHeader={ header } className="my-list">
                    { this.state.list.map((v) => <Item key={ v } extra={ 'extra content' }>{ v } </Item>) }
                </List>
            </div>
        )
    }
}

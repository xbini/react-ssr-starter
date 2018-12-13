import { Component, SyntheticEvent } from 'react'
import List from 'antd-mobile/lib/list'
import 'antd-mobile/lib/list/style/index.css'
import '../src/style/common.scss'
import Framework from '../src/components/framework/framework'

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

function BindContext(context: any, options?: any) {
    return function (target, name, descriptor) {
        console.log(context)
        // descriptor.valueOf = function (...args) {
        //     console.log(this)
        // }
        return descriptor
    }
}

export default class ListPageComponent extends Component {
    public state: InterfaceState = {
        list: genList()
    }

    constructor(props: Readonly<any>) {
        super(props)
    }

    @BindContext(this)
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
            <Framework>
                <button onClick={ this.handleClick.bind(this, 'bini') }>点击</button>
                <List renderHeader={ header } className="my-list">
                    { this.state.list.map((v) => <Item key={ v } extra={ 'extra content' }>{ v } </Item>) }
                </List>
            </Framework>
        )
    }
}

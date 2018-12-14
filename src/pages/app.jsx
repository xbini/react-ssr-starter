import React, { SyntheticEvent } from 'react'
// import { List } from 'antd-mobile'
import '../style/common.scss'

// const Item = List.Item

// const Brief = Item.Brief

const genList = (length = 1000) => {
    const array = []
    for (let i = 0; i < length; i++) {
        array.push(i)
    }
    return array
}

function BindContext(context, options) {
    return function (target, name, descriptor) {
        console.log(context)
        // descriptor.valueOf = function (...args) {
        //     console.log(this)
        // }
        return descriptor
    }
}

export default class ListPage extends React.Component {
    state = {
        list: genList()
    }

    constructor(props) {
        super(props)
    }

    handleClick(name, e) {
        // console.log(this)
        // console.log(name)
        // console.log(e)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ list: this.state.list.concat(999999) })
        }, 1000)
    }

    render() {
        // const header = ('Basic Style')
        return (
            <div>
                <button onClick={ this.handleClick.bind(this, 'bini') }>点击</button>
                { /*<List renderHeader={header} className="my-list">*/ }
                { /*{this.state.list.map((v) => <Item key={v} extra={'extra content'}>{v} </Item>)}*/ }
                { /*</List>*/ }
                2222
            </div>
        )
    }
}

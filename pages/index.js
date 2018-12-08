import 'moment'
import 'moment/locale/zh-cn'
import Head from 'next/head'
// import { DatePicker } from 'antd'
import '../style/common.scss'
import '../style/s.css'

export default () => (
    <div>
        <Head>
            <title>Nice react app with SSR</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <p>Hello world!</p>
        {/*<DatePicker></DatePicker>*/}
    </div>
)

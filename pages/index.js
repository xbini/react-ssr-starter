import 'moment'
import 'moment/locale/zh-cn'
import Head from 'next/head'
// import { DatePicker } from 'antd'
import DatePicker from 'antd/lib/date-picker';  // 加载 JS
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import 'antd/lib/date-picker/style/css';
import '../style/common.scss'
import '../style/s.css'

export default () => (
    <div>
        <Head>
            <title>Nice react app with SSR</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <p>Hello world!</p>
        <DatePicker></DatePicker>
        <Button type='primary'>按钮</Button>
    </div>
)

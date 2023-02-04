import Footer from '../footer/footer'
import Main from '../main/main'
import Header from '../header/header'
import CssBaseline from '@mui/material/CssBaseline'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <CssBaseline></CssBaseline>
            <Header />
            <Main />
            <Footer />
        </>
    )
}
export default App

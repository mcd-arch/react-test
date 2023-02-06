import Footer from '../footer/footer'
import Main from '../main/main'
import Header from '../header/header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline></CssBaseline>
            <Header />
            <Main />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App

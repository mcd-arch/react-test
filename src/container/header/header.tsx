import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/system'
import './header.scss'
import Logo from 'components/Logo/Logo'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="static" className="app_bar">
            <Container maxWidth="xl">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo></Logo>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header

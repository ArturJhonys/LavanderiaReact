import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Styled from 'styled-components'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';


const Container = Styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
`
const BarContainer = Styled.div`
    flex-basis: 60;
    display: flex;
`
const SideMenuContainer = Styled.div`
    flex-basis: 180px;
    border-right:1px solid #eee;
`
const ContentContainer = Styled.div`
    flex: 1x;
    width:100%;
`

function Layout({ children }) {

    return (

        <Container>
            <Header />

            <div style={{ flex: 1, display: 'flex' }}>
                <SideMenu />
                <ContentContainer>
                    {children}
                </ContentContainer>
            </div>


        </Container>

    )

}

function Header() {
    return (
        <BarContainer>
            <AppBar position="static">

                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        Lavanderia react
                </Typography>

                </Toolbar>
            </AppBar>
        </BarContainer>
    )
}

function SideMenu() {
    return (
        <SideMenuContainer>

            <List component="nav">
                <ListSubheader>Menu</ListSubheader>
                <ListItem button>
                    <ListItemText primary="Serviços" />
                </ListItem>
            </List>

        </SideMenuContainer>
    )
}
export default Layout
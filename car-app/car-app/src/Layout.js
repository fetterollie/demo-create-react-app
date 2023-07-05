import { Container, Drawer, Link, List, ListItem, ListItemIcon, ListItemText, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "./Navbar";
import { SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        }, 
        title: {
            padding: theme.spacing(2)
        }
    }
})

const Layout = ({ children }) => {

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'Home',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Clicker',
            icon: <SubjectOutlined color="secondary" />,
            path: '/clicker'
        },
        {
            text: 'Cars',
            icon: <SubjectOutlined color="secondary" />,
            path: '/cars'
        },
        {
            text: 'Characters',
            icon: <SubjectOutlined color="secondary" />,
            path: '/characters'
        },
        {
            text: 'Weather',
            icon: <SubjectOutlined color="secondary" />,
            path: '/weather'
        }
    ]

    return (
        <div>
            <Typography 
              variant="h4"
              color="primary"
              align="center"
            >
              Create-React-App
            </Typography>
            <Container align="center">
                {/* <Navbar />  */}
            </Container>
            <div className={classes.root}>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    anchor="left"
                    classes={{ paper: classes.drawerPaper }}
                >
                    <div>
                        <Typography className={classes.title}>
                            Create-React-App
                        </Typography>
                    </div>

                    {/*List item links*/}
                    <List>
                        {menuItems.map((item) => (
                            <ListItem 
                                button 
                                key={item.text} 
                                onClick={() => history.push(item.path)}
                                className={location.pathname == item.path ? classes.active : null}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>



                </Drawer>
                <div className={classes.page}>
                    {children}
                </div>
            </div>
        </div>
    );
}
 
export default Layout;

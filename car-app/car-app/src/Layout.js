import { Button, CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, ThemeProvider, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import SettingsBrightnessRoundedIcon from '@mui/icons-material/SettingsBrightnessRounded';


const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
        page: {
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

const Layout = ({ children, toggleTheme, theme }) => {

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
        },
        {
            text: 'Vehicle Input',
            icon: <SubjectOutlined color="secondary" />,
            path: '/vehicleinput'
        },
        {
            text: 'Display Vehicles',
            icon: <SubjectOutlined color="secondary" />,
            path: '/vehicledisplay'
        }
    ]

    return (
        <ThemeProvider theme={theme}>
        <CssBaseline/>
            <div>
                <Typography 
                variant="h4"
                color="primary"
                align="center"
                >
                Create-React-App
                <br />
                <Button 
                    size="small"
                    variant="contained"
                    onClick={() => {toggleTheme()}}
                    color="secondary"
                >
                    <SettingsBrightnessRoundedIcon/>
                </Button>
                </Typography>
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

                        <List>
                            {menuItems.map((item) => (
                                <ListItem 
                                    button 
                                    key={item.text} 
                                    onClick={() => history.push(item.path)}
                                    className={location.pathname === item.path ? classes.active : null}
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
        </ThemeProvider>
    );
}
 
export default Layout;

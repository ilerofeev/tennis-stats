import React, { FC, useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import background from '../images/sidebar-background.jpeg';
import { useHistory } from 'react-router';
import colors from '../styles/colors';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import DateRangeIcon from '@material-ui/icons/DateRange';
import HomeIcon from '@material-ui/icons/Home';
import { sidebarMenuStyles } from '../styles/commonStyles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { UserContext } from './App';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    ...sidebarMenuStyles,
    '& ::-webkit-scrollbar': {
      display: 'none',
    },
  },
  lastMenuItem: {
    margin: '0 auto 8px !important',
  },
  exitButton: {
    margin: '8px auto !important',
  },
  drawerWrapper: {
    overflow: 'hidden',
    background: `url(${background})`,
    backgroundPosition: '60% center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0,
    },
  },
  menuHeader: {
    color: 'white',
    fontWeight: 400,
    margin: '10px 12px !important',
    fontSize: 18,
    textTransform: 'uppercase',
    '&:hover': {
      cursor: 'default !important',
      backgroundColor: 'transparent !important',
    },
  },
  backgroundFilter: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  menuDivider: {
    width: '90%',
    margin: 'auto',
    backgroundColor: colors.colorSecondary,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - 240px)`,
      marginLeft: 240,
    },
  },
  menuButton: {
    position: 'absolute',
    right: 24,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    fill: `${colors.colorPrimary} !important`,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 240,
    ...sidebarMenuStyles,
  },
  content: {
    position: 'relative',
    height: '100vh',
    overflow: 'auto',
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: colors.colorBackground,
  },
}));

const Sidebar: FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const history = useHistory();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarItems = [
    { label: 'Main page', path: '/main', icon: <HomeIcon /> },
    { label: 'Month stats', path: '/main/stats', icon: <DateRangeIcon /> },
    { label: 'EXIT', path: '/auth', icon: <ExitToAppIcon /> },
  ];

  const { removeUser } = useContext(UserContext);

  const drawer = (
    <div className={classes.drawerWrapper}>
      <div className={classes.backgroundFilter}> </div>
      <ListItem className={classes.menuHeader}>
        <ListItemIcon>
          <SportsBaseballIcon />
        </ListItemIcon>
        <ListItemText primary={'tennis stats'} />
      </ListItem>
      <Divider className={classes.menuDivider} />
      <List>
        {sidebarItems.map((item, key) => {
          const exitButtonItem = key === sidebarItems.length - 1;
          const lastRouteItem = key === sidebarItems.length - 2;
          return (
            <>
              <ListItem
                className={
                  lastRouteItem
                    ? classes.lastMenuItem
                    : exitButtonItem
                    ? classes.exitButton
                    : ''
                }
                button
                key={item.path}
                onClick={() => {
                  if (exitButtonItem) removeUser();
                  else {
                    if (mobileOpen) handleDrawerToggle();
                    history.push(item.path);
                  }
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
              {lastRouteItem && <Divider className={classes.menuDivider} />}
            </>
          );
        })}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;

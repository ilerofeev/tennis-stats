import React, { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import background from '../images/background.jpeg';
import { useHistory } from 'react-router';
import colors from '../styles/colors';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import DateRangeIcon from '@material-ui/icons/DateRange';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    '& ::-webkit-scrollbar': {
      display: 'none',
    },
    display: 'flex',
    '& .MuiSvgIcon-root': {
      color: 'white',
    },

    '& .MuiListItem-button': {
      color: 'white',
      width: '90%',
      margin: 'auto',
      '&:hover': {
        backgroundColor: colors.buttonHover,
      },
      borderRadius: 5,
    },
    '& .MuiListItemIcon-root': {
      minWidth: 45,
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
  drawer: {
    position: 'relative',
    height: '100%',
    backgroundColor: 'black',
    overflow: 'hidden',
    background: `url(${background})`,
    backgroundPosition: '60% center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuDivider: {
    width: '90%',
    margin: 'auto',
    backgroundColor: colors.colorSecondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
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
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    minWidth: 460,
    overflow: 'auto',
    height: '100vh',
    backgroundColor: colors.colorBackground,
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const Sidebar: FC<{ children?: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarItems = [
    { label: 'Main page', path: '/main', icon: <HomeIcon /> },
    { label: 'Month stats', path: '/stats', icon: <DateRangeIcon /> },
  ];

  const drawer = (
    <div className={classes.drawer}>
      <div className={classes.backgroundFilter}> </div>
      <ListItem className={classes.menuHeader}>
        <ListItemIcon>
          <SportsBaseballIcon />
        </ListItemIcon>
        <ListItemText primary={'tennis stats'} />
      </ListItem>
      <Divider className={classes.menuDivider} />
      <List>
        {sidebarItems.map((item) => (
          <ListItem
            button
            key={item.path}
            onClick={() => history.push(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smDown implementation="css">
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
        <Hidden smDown implementation="css">
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
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Sidebar;

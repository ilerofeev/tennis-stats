import React, { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import background from '../images/background.jpeg';
import { colors } from '../styles/colors';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';

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
  drawer: {
    position: 'relative',
    height: '100%',
    backgroundColor: 'black',
    overflow: 'hidden',
    background: `url(${background})`,
    backgroundPosition: '60% center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.up('sm')]: {
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
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
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
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Sidebar: FC<{ children?: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.drawer}>
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        {' '}
      </div>
      <ListItem className={classes.menuHeader}>
        <ListItemIcon>
          <SportsBaseballIcon />
        </ListItemIcon>
        <ListItemText primary={'tennis stats'} />
      </ListItem>
      <Divider className={classes.menuDivider} />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
              keepMounted: true, // Better open performance on mobile.
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
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Sidebar;

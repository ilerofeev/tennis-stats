import { makeStyles } from '@material-ui/core/styles';
import colors from './colors';

export const commonStyles = makeStyles({
  pageTitle: {
    padding: '0 0 0 10px',
    lineHeight: '48px',
    fontSize: 18,
    color: colors.colorPrimary,
    fontWeight: 300,
    marginBottom: 50,
  },
});

export const sidebarMenuStyles = {
  '& .MuiIconButton-label': {
    '& .MuiSvgIcon-root': {
      color: colors.colorPrimary,
    },
  },
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
};

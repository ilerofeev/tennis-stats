import { makeStyles } from '@material-ui/core/styles';
import colors from './colors';

const commonStyles = makeStyles({
  pageTitle: {
    padding: '0 0 0 10px',
    lineHeight: '48px',
    fontSize: 18,
    color: colors.colorPrimary,
    fontWeight: 300,
    marginBottom: 50,
  },
});

export default commonStyles;

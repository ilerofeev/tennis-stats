import { makeStyles } from '@material-ui/core/styles';
import colors from './colors';

const commonStyles = makeStyles({
  pageTitle: {
    padding: 15,
    fontSize: 18,
    color: colors.colorPrimary,
    fontWeight: 300,
    marginBottom: 50,
  },
});

export default commonStyles;

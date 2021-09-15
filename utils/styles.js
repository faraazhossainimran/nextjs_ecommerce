import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#304050',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  grow: {
    flexGrow: 1,
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
    padding: 30,
    backgroundColor: '#304050',
    color: '#ffffff',
    marginTop: 20,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    paddingTop: 40,
    paddingBottom: 40,
  },
});
export default useStyles;

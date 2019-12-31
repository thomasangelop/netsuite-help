import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import { EditorBorderRight } from 'material-ui/svg-icons';
import { green } from '@material-ui/core/colors';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background,
        padding: theme.spacing(1),
        marginRight: 10,
    },
    title: {
        backgroundColor: theme.palette.background,
        padding: theme.spacing(1),
        
    },
    toolBar: {
        backgroundColor: 'green',
    },
}));

export default function ElevateAppBar(props) {
    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar className={classes.toolBar}>
          <Typography variant="h4" className={classes.title}>NetSuite Help</Typography>
            <Typography variant="h6" className={classes.root}>About</Typography>
            <Typography variant="h6" className={classes.root}>Services</Typography>
            <Typography variant="h6" className={classes.root}>Contact</Typography>
            <Typography variant="h6" className={classes.root}>Login</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
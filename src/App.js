import React from "react"
import MyMapComponent from "./Components/maps/map";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center', 
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function App(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Voluptas ex, maiores quasi perferendis necessitatibus sequi quaerat 
            hic temporibus doloribus ea esse, facere illo numquam possimus! 
            At fugiat officia sit perferendis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Voluptas ex, maiores quasi perferendis necessitatibus sequi quaerat 
            hic temporibus doloribus ea esse, facere illo numquam possimus! 
            At fugiat officia sit perferendis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Voluptas ex, maiores quasi perferendis necessitatibus sequi quaerat 
            hic temporibus doloribus ea esse, facere illo numquam possimus! 
            At fugiat officia sit perferendis.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Voluptas ex, maiores quasi perferendis necessitatibus sequi quaerat 
            hic temporibus doloribus ea esse, facere illo numquam possimus! 
            At fugiat officia sit perferendis.
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <MyMapComponent />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
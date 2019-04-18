import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ContainedButtons from './../Buttons/FormButton';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class FilledTextFields extends React.Component {
    // state = {
    
    // };
  
    // handleChange = name => event => {
    //   this.setState({
    //     [name]: event.target.value,
    //   });
    // };
  
    render() {
      const { classes } = this.props;
  
      return (
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="filled-name"
            label="Name"
            className={classes.textField}
            // value={this.state.name}
            // onChange={this.handleChange('name')}
            margin="normal"
            variant="filled"
          />
  
          {/* <TextField
            id="filled-read-only-input"
            label="Read Only"
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
            variant="filled"
          /> */}
  
          <TextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            // value={this.state.multiline}
            // onChange={this.handleChange('multiline')}
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
  
          <TextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows="4"
            className={classes.textField}
            margin="normal"
            variant="filled"
          />

          <ContainedButtons />
  
        </form>
      );
    }
  }
  
  FilledTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FilledTextFields);
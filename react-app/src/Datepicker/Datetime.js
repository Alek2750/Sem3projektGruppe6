import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./Datetime.css"

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function DateAndTimePickers(props) {
  const { classes } = props;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label=""
        type="datetime-local"
        defaultValue="2019-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);
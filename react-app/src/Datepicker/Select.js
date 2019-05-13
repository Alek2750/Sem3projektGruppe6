import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import "./Select.css"

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class NativeSelects extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

//   componentDidMount() {
//     this.setState({
//       labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
//     });
//   }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>        
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={this.state.age}
            onChange={this.handleChange('age')}
            input={<Input name="age" id="age-native-label-placeholder" />}
          >
            <option value="">City</option>
            <option value={10}>City 1</option>
            <option value={20}>City 2</option>
            <option value={30}>City 3</option>
            <option value={30}>City 4</option>
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);
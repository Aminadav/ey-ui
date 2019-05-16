import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const PopupFormButton = props => {
  const {
    classes,
    Form,
    Icon,
    FormProps,
    buttonText,
    ButtonProps: {
      variant: buttonVariant = 'outlined',
      color: buttonColor = 'default',
      ...ButtonProps
    },
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);

  const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  };

  const transformOrigin = {
    vertical: 'top',
    horizontal: 'center',
  };

  const handleClick = event => {
    setAnchor(event.target);
    setIsOpen(!isOpen);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <React.Fragment>
      <Popover
        anchorEl={anchor}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        data-testid="popover"
      >
        <Form onCancel={handleClose} {...FormProps} />
      </Popover>

      {!buttonText && Icon ? (
        <IconButton data-testid="icon-button" onClick={handleClick} {...ButtonProps}>
          <Icon />
        </IconButton>
      ) : (
        <Button
          data-testid="popup-button"
          variant={buttonVariant}
          color={buttonColor}
          onClick={handleClick}
          {...ButtonProps}
        >
          {buttonText}
          {Icon && <Icon data-testid="icon-in-button" className={classes.rightIcon} />}
        </Button>
      )}
    </React.Fragment>
  );
};

PopupFormButton.propTypes = {
  classes: PropTypes.shape({
    rightIcon: PropTypes.string.isRequired,
  }).isRequired,
  Form: PropTypes.func.isRequired,
  ButtonProps: PropTypes.shape({}),
  buttonText: PropTypes.string,
  Icon: PropTypes.func,
  /**
   * Any props you want to pass into the form component.
   */
  FormProps: PropTypes.shape({}),
};

PopupFormButton.defaultProps = {
  buttonText: null,
  ButtonProps: {},
  Icon: null,
  FormProps: {},
};

const styles = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

export default withStyles(styles)(PopupFormButton);
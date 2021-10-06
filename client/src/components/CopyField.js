/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import fieldHolder from 'components/FieldHolder/FieldHolder';
import copy from 'copy-to-clipboard';
import { success } from 'state/toasts/ToastsActions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import i18n from 'i18n';

function CopyField({ obfuscate, onCopy, ...props }) {
  const nextProps = {
    ...props,
    className: `${props.className} ${props.extraClass}`,
    value: props.value || '',
    maxLength: props.data && props.data.maxlength,
    type: obfuscate ? 'password' : 'text',
    onBlur: props.onBlur,
    onFocus: props.onFocus,
    onChange: (event) => {
      props.onChange(event, { id: props.id, value: event.target.value });
    }
  };

  const doCopy = () => {
    copy(nextProps.value);
    if (typeof onCopy === 'function') {
      onCopy();
    }
  };

  return (
    <InputGroup>
      <Input {...nextProps} />
      <InputGroupAddon addonType="append">
        <Button outline onClick={doCopy}>
          {i18n._t('CopyField.COPY', 'Copy')}
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}

CopyField.propTypes = {
  extraClass: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onCopy: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  attributes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  obfuscate: PropTypes.bool
};

CopyField.defaultProps = {
  value: '',
  extraClass: '',
  className: '',
  attributes: {},
  readOnly: true,
  obfuscate: false
};

export { CopyField as Component };

function mapDispatchToProps(dispatch, { title }) {
  return {
    onCopy: () => {
      const msg = i18n.inject(
        i18n._t('CopyField.COPIED_TO_CLIPBOARD', 'Copied {title} value to clipboard'),
        { title: title ? `${title} ` : '' }
      );
      dispatch(success(msg));
    }
  };
}

export default compose(
  connect(() => ({}), mapDispatchToProps),
  fieldHolder,
)(CopyField);

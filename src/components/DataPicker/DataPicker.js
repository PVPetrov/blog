import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import generateRange from '../../utils/generateRange';

const currentYear = new Date().getFullYear();

const options = {
  date: generateRange(0, 31),
  month: generateRange(0, 12),
  year: ['00', ...generateRange(currentYear - 120, currentYear)],
};

const DatePicker = ({
  onChange,
  value = { date: '00', month: '00', year: '00' },
  title,
  labels,
  fromGroup,
  itemGroup,
  ...restProps
}) => {
  const handleChange = e => {
    const { target } = e;
    onChange({ ...value, [target.name]: target.value });
  };
  // check which fields to be included in the datepicker
  const fields = ['date', 'month', 'year'].filter(el =>
    Object.keys(restProps).includes(el),
  );

  // add default field year
  fields.length === 0 && fields.push('year');

  // let { title, labels, fromGroup, itemGroup } = props;
  labels = labels || {};
  // value = value || { date: '00', month: '00', year: '00' };
  return (
    <Form.Group
      style={{ ...fromGroup, display: 'flex', alignItems: 'baseline' }}
      controlId="formPlaintextEmail"
    >
      {title && <Form.Label style={{ padding: '1em' }}>{title}</Form.Label>}
      {fields.map(f => (
        <InputGroup
          style={{ ...itemGroup, marginLeft: title ? '.25em' : 0 }}
          key={f}
        >
          <InputGroup.Prepend>
            <InputGroup.Text>{[f] || f}</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="select"
            value={value[f] || '00'}
            name={f}
            onChange={handleChange}
          >
            {options[f].map(o => (
              <option key={o} value={o}>
                {o === '00' ? ' ' : o}
              </option>
            ))}
          </FormControl>
        </InputGroup>
      ))}
    </Form.Group>
  );
};

DatePicker.propTypes = {
  onChange: PropTypes.func,
  title: PropTypes.node,
  labels: PropTypes.shape({
    date: PropTypes.node,
    month: PropTypes.node,
    year: PropTypes.node,
  }),
  date: PropTypes.any,
  month: PropTypes.any,
  year: PropTypes.any,
  styles: PropTypes.shape({
    fromGroup: PropTypes.object,
    itemGroup: PropTypes.object,
  }),
};

export default DatePicker;
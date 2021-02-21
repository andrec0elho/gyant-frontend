import React from 'react';

export class InputComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.props.onChange;
  }

  handleChange(e) {
    const { value } = e.target;
    this.onChange(value);
  }

  render() {
    const { type, value, label, placeholder, name, rows, disabled } = this.props;

    const fieldProps = {
      name,
      type,
      value,
      placeholder,
      onChange: this.handleChange
    };

    if (type === "textarea") {
      delete fieldProps.type;
      delete fieldProps.value;

      fieldProps.defaultValue = value;
      fieldProps.rows = rows || 2;
    }

    return (
      <div key={this.props.value} className="w-100">
        {label ? <label>{label}</label> : ''}
        {type === 'textarea' ?
          (<textarea {...fieldProps} className="form-control" disabled={(disabled) ? "disabled" : ""} />) :
          (<input {...fieldProps} className="form-control" disabled={(disabled) ? "disabled" : ""} />)
        }
      </div>
    )
  }
}

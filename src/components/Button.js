import React from 'react';

export class ButtonComponent extends React.Component {

  render() {
    const { buttonClick, label, buttonStyle, disabled } = this.props;

    let styleClass = 'btn w-100';

    switch (buttonStyle) {
      case 'green':
        styleClass += ' btn-success';
        break;
      case 'red':
        styleClass += ' btn-danger';
        break;
      default:
        styleClass += ' btn-primary';
        break;
    }

    const buttonDisabled = disabled || false;

    return (
      <div className="w-100">
        <button onClick={buttonClick} className={styleClass} disabled={buttonDisabled}>{label}</button>
      </div>
    )
  }
}

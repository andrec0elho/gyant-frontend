import React from 'react';

export class ButtonComponent extends React.Component {

  render() {
    const { buttonClick, label, buttonStyle } = this.props;

    let styleClass = 'btn w-100';

    switch (buttonStyle) {
      case 'green':
        styleClass += ' btn-success';
        break;
      default:
        styleClass += ' btn-primary';
        break;
    }

    return (
      <div className="w-100">
        <button onClick={buttonClick} className={styleClass}>{label}</button>
      </div>
    )
  }
}

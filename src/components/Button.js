import React from 'react';

export class ButtonComponent extends React.Component {

  render() {
    const { buttonClick, label, style } = this.props;
    return (
      <div className="w-100">
        <button onClick={buttonClick} className="btn btn-primary w-100">{label}</button>
      </div>
    )
  }
}

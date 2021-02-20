import React from 'react';
import './Selector.scss';
import classNames from 'classnames';

export class SelectorComponent extends React.Component {
  constructor(props) {
    super(props);
    const { list } = props;
    this.state = {
      items: list,
    };
    this.onSelect = this.props.onSelect;
  }

  selectedElement = (element, index) => {
    this.onSelect(element, index);
  }

  render() {
    return (
      <div className="selectorBox">
        {(this.state?.items || []).map((elem, i) => (
          <div className={classNames("selectorElement", { "selected": elem.selected })} onClick={() => this.selectedElement(elem, i)} key={i}>({elem.code}) {elem.name}</div>
        ))}
      </div >
    )
  }
}

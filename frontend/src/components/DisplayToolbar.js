import React from 'react';
import './DisplayToolbar.css';

export default class DisplayToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.onTextareaChanged = this.onTextareaChanged.bind(this);
  }

  onTextareaChanged() {
    // Don't care
  }

  render() {
    return (
      <div className="display-toolbar">
        <form className="display">
          <textarea className="display-formula" onChange={this.onTextareaChanged} value={this.props.formula.join("")} ></textarea>
          <textarea className="display-input" id="display" data-testid="display" rows="1" onChange={this.onTextareaChanged} value={this.props.input}></textarea>
        </form>
        <div className="toolbar">
          <div>
            <span className="toolbar-item" onClick={this.props.onBackspace} id="backspace"><i className="fas fa-backspace"></i></span>
          </div>
        </div>
      </div>
    )
  }
}
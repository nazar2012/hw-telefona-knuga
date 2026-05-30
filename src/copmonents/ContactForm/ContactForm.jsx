import { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.onSubmit}>
          <label>
            Name
            <br />
            <input
              onChange={this.props.onChange}
              value={this.props.name}
              type="text"
              name="name"
            />
          </label>
          <br />
          <label>
            Number
            <br />
            <input
              value={this.props.number}
              type="tel"
              name="number"
              onChange={this.props.onChange}
            />
          </label>
          <br />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;

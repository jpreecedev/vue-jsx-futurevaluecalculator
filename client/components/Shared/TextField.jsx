import React from 'react';

const TextField = {
  props: {
    type: String,
    id: String,
    label: String,
    prefix: String,
    suffix: String,
    value: Number,
    changed: Function
  },
  data: function() {
    return {
      inputValue: (typeof this.value === 'undefined') ? "" : this.value
    }
  },
  render(h) {
    return (
      <div class="form-group row">
        <label htmlFor={ this.id } class="col-3 col-form-label">
          { this.label }
        </label>
        <div class="col">
          <div class="input-group">
            { this.prefix && <span class="input-group-addon">{ this.prefix }</span> }
            <input type="number"
                   class="form-control"
                   id={ this.id }
                   value={ this.inputValue }
                   onInput={ event => {
                    this.inputValue = event.target.value;
                    this.changed(this.inputValue);
                   } }
                   required />
            { this.suffix && <span class="input-group-addon">{ this.suffix }</span> }
          </div>
        </div>
      </div>
    );
  }
};

export default TextField;

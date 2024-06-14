import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

class TableComponent extends HTMLElement {
  constructor() {
    super();
    this._data = [];
    this._title = '';
  }

  connectedCallback() {
    this._render();
  }

  set title(value) {
    this._title= value;
    this._render();
  }

  set data(value) {
    this._data = value;
    this._render();
  }

  get data() {
    return this._data;
  }

  get title() {
    return this._title;
  }

  static get observedAttributes() {
    return ['title', 'data'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title' && oldValue !== newValue) {
      this._title = newValue;
    }
    if (name === 'data' && oldValue !== newValue) {
      this._data = newValue;
    }
  }

  _render() {
    ReactDOM.render(<Table title={this._title} data={this._data} />, this);
  }
}

const tagName = 'table-web-component';
if(!customElements.get(tagName)) {
  customElements.define(tagName, TableComponent);
}

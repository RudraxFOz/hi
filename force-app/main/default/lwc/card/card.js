import { LightningElement, api } from "lwc";

export default class Card extends LightningElement {
  // card = {Name: 'Todo 1', Description__c: 'Creates an inspiring vision of the futur'}
  _card = {};

  @api
  get card() {
    return this._card;
  }
  set card(value) {
    this._card = value;
  }
}

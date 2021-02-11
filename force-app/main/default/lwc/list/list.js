import { api, LightningElement, wire } from "lwc";
import getCardList from "@salesforce/apex/CardController.getCardList";

export default class List extends LightningElement {
  @wire(getCardList) cards;

  filteredCardsByType = [];
  _type = {};

  @api
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value;
  }

  filterCardsByType() {
    if (this.cards) {
      this.filteredCardsByType = this.cards.filter(
        (card) => card.TypeId__c === this._type.Id
      ); 
    }
    //Todo: add Error Panel
  }

  connectedCallback() {
    this.filterCardsByType();
  }
}

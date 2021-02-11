import { api, LightningElement, wire } from "lwc";
import getCardList from "@salesforce/apex/CardController.getCardList";

export default class List extends LightningElement {
  @wire(getCardList) cards;

  _type = {};

  @api
  get type() {
      return this._type;
  }
  set type(value) {
      this._type = value;
  }

}

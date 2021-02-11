import { LightningElement, wire } from "lwc";
import getCardList from "@salesforce/apex/CardController.getCardList";

export default class List extends LightningElement {
  @wire(getCardList) cards;
}

import { LightningElement,wire } from "lwc";
import getTypeList from "@salesforce/apex/TypeController.getTypeList";

export default class FixedBoard extends LightningElement {
    @wire(getTypeList) types;
}

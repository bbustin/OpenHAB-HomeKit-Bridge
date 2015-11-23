'use strict';

class ItemType {
  constructor() {
    this.SWITCH_ITEM = 'SwitchItem';
    this.DIMMER_ITEM = 'DimmerItem';
    this.COLOR_ITEM = 'ColorItem';
    this.ROLLERSHUTTER_ITEM = 'RollershutterItem';
    this.TEMPERATURE_SENSOR = 'NumberItem';
    this.CONTACT_ITEM = 'ContactItem';
  };

  foo() {
    console.log('foo');
  }
}

//module.exports = { ItemType };
export { ItemType };
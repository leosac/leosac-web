import RFIDReader from 'web/models/rfid-reader';
import DS from 'ember-data';
import { validator , buildValidations } from 'ember-cp-validations';

const Validations = buildValidations(
    {
        gpioHigh: validator('presence', true),
    }
);

export default RFIDReader.extend(Validations, {
    mode: DS.attr('mode', {defaultValue: 'wiegand-mode.simple'}),
    gpioHigh: DS.belongsTo('gpio', {polymorphic:true}),
    gpioLow: DS.belongsTo('gpio', {polymorphic:true}),
    buzzer: DS.belongsTo('buzzer', {polymorphic:true}),
    greenLed: DS.belongsTo('led', {polymorphic:true}),
});

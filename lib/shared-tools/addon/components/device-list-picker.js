import Ember from 'ember';
import layout from '../templates/components/device-list-picker';

export default Ember.Component.extend({
    layout,
    search: Ember.inject.service('search'),
    store: Ember.inject.service('store'),
    newDevice: null,                        // the newly selected device
    arrayOfDeviceClass: null,               // array that must contain all the device class that you want to search
    device: null,                           // the device that need a relationships
    deviceAction: null,                     // what action to do when selecting a device
    allDeviceSearch: [],
    init() {
        this._super(...arguments);
    },
    actions: {
        searchDevice(partialName) {
            let arrayOfDeviceClass = this.get('arrayOfDeviceClass');
            return this.get('search').findDeviceByAlias(partialName).then((devices) => {
                    let object = [];
                    devices.forEach(function (device) {
                        arrayOfDeviceClass.forEach((deviceClass) => {
                            if (device['device-class'] === deviceClass)
                                object.push(device);
                        });
                    });
                    this.set('allDeviceSearch', object);
                    return object;
                },
                () => {
                });
        }
    }
});

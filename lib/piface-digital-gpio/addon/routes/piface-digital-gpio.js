import Ember from 'ember';
import LeosacRoute from 'web/leosac-route';

export default LeosacRoute.extend({
    _title: 'piface-digital-gpios.title',
    _requireAuth: true,
    store: Ember.inject.service('store'),
    i18n: Ember.inject.service(),

    beforeModel()
    {
        "use strict";
        return this._super();
    },
    model(params)
    {
        "use strict";
        return this.get('store').findRecord('piface-digital-gpio', params.piface_digital_gpio_id);
    },
    resetController(controller, isExiting/*, transition*/)
    {
        // Rollback change when leaving the page.
        if (isExiting)
        {
            const mod = this.controller.get('model');
            if (mod)
                mod.rollbackAttributes();
        }
    },
    actions: {
        editPifaceDigitalGpio ()
        {
            let gpio = this.controller.get('model');

            gpio.save().then(() =>
            {
                this.get('flashMessages').success(this.get('i18n').t('configurations.error.update_success'));
            }, () =>
            {
                this.get('flashMessages').danger(this.get('i18n').t('configurations.error.update_error'));
            });
        },
        deletePifaceDigitalGpio()
        {
            const self = this;
            const model = this.controller.get('model');
            model.destroyRecord({}).then(() =>
            {
                self.get('flashMessages').success('Piface Digital Gpio has been deleted.');
                self.transitionTo('list');
            });
        }
    }
});

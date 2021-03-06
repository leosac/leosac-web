import LeosacRoute from 'web/leosac-route';
import Ember from 'ember';

export default LeosacRoute.extend({
    store: Ember.inject.service(),
    i18n: Ember.inject.service(),
    _title: 'led-buzzer.list.title',
    _requireAuth: true,

    init() {
        this._super(...arguments);
    },
    beforeModel()
    {
        "use strict";
        return this._super();
    },
    model()
    {
        "use strict";
        const promise = Ember.RSVP.defer();
        let tmpArray = [];
        const store = this.get('store');

        Ember.RSVP.hash({
            led: store.findAll('led', {reload:true}),
            buzzer: store.findAll('buzzer', {reload: true}),
        }).then((hash) => {
            tmpArray = tmpArray.concat(hash.buzzer.toArray(), hash.led.toArray());
            promise.resolve(tmpArray);
        });

        return promise.promise;
    },

    actions: {
        deleteLedBuzzer(config)
        {
            const self = this;
            config.destroyRecord({}).then(() =>
                {
                    this.refresh();
                    this.get('flashMessages').success(this.get('i18n').t('configurations.error.remove_success'));
                    self.transitionTo('list');
                },
                () => {
                    this.get('flashMessages').danger(this.get('i18n').t('configurations.error.remove_error'));
                });
        }
    }
});

import Ember from 'ember';
import LeosacRoute from 'web/leosac-route';

export default LeosacRoute.extend({
    _title: 'Access Point list',
    _requireAuth: true,
    beforeModel()
    {
        "use strict";
        return this._super();
    },
    model()
    {
        "use strict";
        return this.get('store').findAll('access-point', {reload: true});
    },
    actions: {
        deleteAP(ap)
        {
            const self = this;
            ap.destroyRecord({}).then(() =>
            {
                self.get('flashMessages').success('Access Point has been deleted.');
                self.transitionTo('access-point.list');
            });
        }
    }
});
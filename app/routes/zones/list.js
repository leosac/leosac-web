import LeosacRoute from 'web/leosac-route';

export default LeosacRoute.extend({
    _title: 'zone.list.title',
    _requireAuth: true,
    beforeModel()
    {
        "use strict";
        return this._super();
    },
    model()
    {
        "use strict";
        return this.get('store').findAll('zone', {reload: true});
    },
    actions: {
        deleteZone(zone)
        {
            const self = this;
            zone.destroyRecord({}).then(() =>
            {
                self.get('flashMessages').success('Zone has been deleted.');
                self.transitionTo('zones.list');
            });
        }
    }
});

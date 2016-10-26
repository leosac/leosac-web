import LeosacRoute from 'web/leosac-route';

export default LeosacRoute.extend({
    _title: 'Users',
    _requireAuth: true,
    beforeModel()
    {
        "use strict";
        return this._super();
    },
    model()
    {
        "use strict";
    }
});

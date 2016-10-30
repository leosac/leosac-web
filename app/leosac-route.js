import Ember from 'ember';
import ENV from 'web/config/environment';

/**
 * This is a base route for the application.
 *
 * To extend this base route, do the following:
 * ```
 *   import LeosacRoute from 'web/leosac-route';
 *   export default LeosacRoute.extend({...});
 * ```
 *
 * It provides various utilities that are shared
 * between route.
 *
 * The following property should be overridden:
 *     _title: The title of the route. It will be
 *             displayed as the HTML document title,
 *             as well as in the HTML template.
 *     _requireAuth: If the user is not authenticated,
 *             a direction to the login page will happen.
 *
 * @note In case the subclass implements the beforeModel()
 *       method, it MUST call `this._super()` otherwise this
 *       base route will be useless.
 */
export default Ember.Route.extend({
    i18n: Ember.inject.service(),
    globalInfo: Ember.inject.service('leosac-info'),
    authSrv: Ember.inject.service('authentication'),
    flashMessages: Ember.inject.service(),
    // A translation key for the title of the page.
    _title: '',
    _requireAuth: false,
    actions: {
        onLogout()
        {
            "use strict";
            this.transitionTo('login');
        },
        /**
         * An error was raised by a custom component.
         * @param err
         */
        myError(err)
        {
            this.intermediateTransitionTo('error', err);
            return false;
        },
        /**
         * An error was raised from a route model() method (or similar).
         * @param err
         * @param transition
         */
        error(err, transition)
        {
            this.intermediateTransitionTo('error', err);
            return false;
        }
    },
    beforeModel()
    {
        "use strict";
        this.set('i18n.locale', this.get('globalInfo').getLocale());

        const i18n = this.get('i18n');
        const title = i18n.t(this.get('_title'));

        this.get('globalInfo').set('current_view_title', title);
        document.title = ENV.APP.appname + ' - ' + title;

        if (this._requireAuth)
        {
            return redirectIfNotAuth(this);
        }
    },
    afterModel()
    {
        this.set('i18n.locale', this.get('globalInfo').getLocale());
    }
});

function redirectIfNotAuth(route)
{
    "use strict";
    var self = route;
    var promise_or_ret = self.get('authSrv').isLoggedIn();

    if (promise_or_ret === false)
    {
        self.transitionTo('login');
        return;
    }
    else if (promise_or_ret === true)
    {
        return;
    }

    promise_or_ret.then(function ()
    {
        // success, do nothing and let user reach page
    }, function ()
    {
        self.transitionTo('login');
    });
    return promise_or_ret;
}

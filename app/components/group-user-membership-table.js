import Ember from 'ember';

export default Ember.Component.extend({
    authSrv: Ember.inject.service('authentication'),
    store: Ember.inject.service(),

    group: false,
    canRemoveUserFromGroup: false,
    didReceiveAttrs()
    {
        this._super(...arguments);
        const self = this;

        const currentUser = this.get('authSrv').get('current_user');
        currentUser.get('memberships').then((memberships) =>
        {
            memberships.forEach((m) =>
            {
                if (m.get('group').get('id') === self.get('group').get('id'))
                {
                    if (m.get('rank') === 'administrator')
                        this.set('canRemoveUserFromGroup', true);
                }
            });
        });
        if (this.get('authSrv').get('isAdministrator'))
        {
            this.set('canRemoveUserFromGroup', true);
        }
    },
    actions: {
        deleteMembership(membershipId)
        {
            const membership = this.get('store').peekRecord('user-group-membership', membershipId);
            membership.destroyRecord({});
        }
    }
});

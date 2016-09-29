import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

    findAll: function (store, type, sinceToken)
    {
        const ws = this.get('ws');
        return new Ember.RSVP.Promise(function (resolve, reject)
        {
            ws.sendJson('credential.read',
                {credential_id: 0}).then(
                (data) => resolve(data),
                (failure) => reject(failure)
            );
        });
    },

    findRecord: function (store, type, id, snapshot)
    {
        const ws = this.get('ws');
        return new Ember.RSVP.Promise(function (resolve, reject)
        {
            ws.sendJson('credential.read', {credential_id: Number.parseInt(id)}).then(
                (data) => resolve(data),
                (failure) => reject(failure)
            );
        });
    },
});

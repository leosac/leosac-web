import AccessPointUpdate from 'web/models/access-point-update';
import DS from 'ember-data';
import Ember from 'ember';

export default AccessPointUpdate.extend({
    lockId: DS.attr('number'),
    content: DS.attr('string')
});

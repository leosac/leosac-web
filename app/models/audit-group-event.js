import AuditEntry from 'web/models/audit-entry';
import DS from 'ember-data';

export default AuditEntry.extend({
    type: 'GroupEvent',
    target: DS.belongsTo('group'),
    before: DS.attr('string'),
    after: DS.attr('string'),
});

import DS from 'ember-data';

export default DS.Transform.extend({
    deserialize(serialized) {
        if (serialized === 2)
            return 'Administrator';
        else if (serialized === 1)
            return 'Operator';
        else if (serialized === 0)
            return 'Member';
    },

    serialize(deserialized) {
        if (deserialized === 'Administrator')
            return 2;
        else if (deserialized === 'Operator')
            return 1;
        else if (deserialized === 'Member')
            return 0;
    }
});

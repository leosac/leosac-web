import Ember from 'ember';
import {validator, buildValidations} from 'ember-cp-validations';

// Validation for password change
const Validations = buildValidations({
    password: validator('presence', true),
    password2: validator('confirmation', {
        on: 'password',
        message: 'Passwords don\'t match.',
    })
});

export default Ember.Component.extend(Validations, {
    password: '',
    password2: '',
    _observerPassword: Ember.observer('password', 'password2', function()
    {
        Ember.run.once(this, 'tryUpdatePasswordValue');
    }),
    tryUpdatePasswordValue ()
    {
        const { m, validations } = this.validateSync();
        if (validations.get('isValid'))
        {
            this.attrs.passwordOut.update(this.get('password'));
        }
        else
        {
            this.attrs.passwordOut.update(false);
        }
    },
    init()
    {
        this._super(...arguments);
    },
});

import LeosacRoute from 'web/leosac-route';

export default LeosacRoute.extend({
    _title: 'credentials.rfid_card_create.title',
    _requireAuth: true,
    beforeModel()
    {
        "use strict";
        return this._super();
    },
    model()
    {
        "use strict";
        return this.get('store').createRecord('rfid-card');
    },
    resetController(controller, isExiting/*, transition*/)
    {
        // fixme Creating a credential and then hitting "back" will
        // still show an empty one in the list.

        // Somehow this resetController() hook is called AFTER the model()
        // hook on the page we are going to.
        // This seems to make little sense...
        // Our own helper, findAllCredentials may be causing trouble tho,
        // because it returns with toArray(), probably locking in some to-be-removed
        // objects.
        const mod = this.controller.get('model');
        if (isExiting && mod.get('isNew'))
        {
            mod.unloadRecord();
        }
    },
    actions:
    {
        createCard()
        {
            this.controller.get('model').save().then((card) =>
                {
                    this.get('flashMessages').success('Card successfully created.');
                    this.transitionTo('credentials.rfid-card', card.get('id'));
                },
                () =>
                {
                    this.get('flashMessages').danger('An error occurred while creating the card');
                });
        }
    }
});

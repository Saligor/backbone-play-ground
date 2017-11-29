/**
 *
 *
 */

// globals Backbone;

var gen = gen || {};

(function ($, gen, bb) {

    gen.views = gen.views || {};

    gen.views.login = bb.View.extend({

        events: {
            'click [type="submit"]': 'postRequest'
        },

        /**
         * Backbone specific
         */
        initialize: function () {
            console.log(`gen.views.testComponent loaded`,  this);

        },

        postRequest: function (ev) {
            ev.preventDefault();

            alert('I need to do something');
        }

    });
}(jQuery, gen, Backbone));
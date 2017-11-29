/**
 *
 *
 */

// globals Backbone;

var gen = gen || {};

(function ($, gen, bb) {

    gen.views = gen.views || {};

    gen.views.testComponent = bb.View.extend({

        events: {
            'click h1': 'alertMessage'
        },

        /**
         * Backbone specific
         */
        initialize: function () {
            console.log(`gen.views.testComponent loaded`,  this);
        },

        /**
         * Alerts a message
         */
        alertMessage: function () {
            alert('click');
        }
    });
}(jQuery, gen, Backbone));
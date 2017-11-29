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

            this.$Message = this.$('h1').text();



            // this.collection.on('update', this.render.bind(this));

            this.collection.fetch({
                success: this.render.bind(this),
                error: this.error.bind(this)
            });
        },

        error: function (err) {

        },

        /**
         *
         */
        render: function () {
            console.log(this.collection.models);
            /*var DOMElement = '';
            this.collection.models.forEach(function (model) {

                DOMElement += '<div>' + model.get('trackName') + '</div>';
            });

            this.$el.append(DOMElement);*/
        },

        /**
         * Alerts a message
         */
        alertMessage: function () {
            alert(this.$Message);
        }
    });
}(jQuery, gen, Backbone));
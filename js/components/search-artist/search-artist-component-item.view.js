/**
 *
 *
 */

// globals Backbone;

var gen = gen || {};

(function ($, gen, bb) {

    gen.views = gen.views || {};

    gen.views.searchItem = bb.View.extend({

        events: {

        },

        className: 'component-search-item',

        template: _.template($('#searchItemView').html()),

        /**
         * Backbone specific
         */
        initialize: function () {
            console.log(`gen.views.searchItem loaded`,  this);

            this.render();
        },

        render: function () {
            var template = this.template({data: this.model.toJSON()});
            this.$el.html(template);
        }
    });
}(jQuery, gen, Backbone));
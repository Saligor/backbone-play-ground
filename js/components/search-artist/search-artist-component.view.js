/**
 *
 *
 */

// globals Backbone;

var gen = gen || {};

(function ($, gen, bb) {

    gen.views = gen.views || {};

    gen.views.searchView = bb.View.extend({

        events: {

        },

        /**
         * Backbone specific
         */
        initialize: function () {
            console.log(`gen.views.searchItem loaded`,  this);
            this.$itemContainer = this.$('.component-search-results');
            this.collection.fetch({
                success: this.renderItems.bind(this)
            });
        },

        renderItems: function () {
            console.log(this.collection);
            var items = [];
            this.collection.models.forEach(function(searchItem) {
                items.push(new gen.views.searchItem({
                    model: searchItem
                }));
            });
            var DOM = _.pluck(items, 'el');
            console.log(DOM);
            this.$itemContainer.html('');

            DOM.forEach(function (item) {
                console.log(item);
                this.$itemContainer.append(item);
            }.bind(this));

            // render the items
        }
    });
}(jQuery, gen, Backbone));

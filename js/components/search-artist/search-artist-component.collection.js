/**
 *
 *
 */

// globals Backbone;

var gen = gen || {};

(function ($, gen, bb) {

    gen.collections = gen.collections || {};

    gen.collections.searchView = bb.Collection.extend({
        url: 'https://itunes.apple.com/search?term=jack+johnson&limit=25',
        model: gen.models.searchItem,
        parse: function(response) {
            return response.results;
        }
    });
}(jQuery, gen, Backbone));
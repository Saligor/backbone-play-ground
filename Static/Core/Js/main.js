'use strict';

/**
 * @Filename: app.js
 * @Author: Casper Rasmussen
 * @Author: Salvatore Randazzo
 */

(function ($, gen) {
    'use strict';

    /**
     * Loader
     * @returns {{init: Function}}
     * @constructor
     */

    var Loader = function Loader() {
        var components = null;
        var view = '';
        var model = '';
        var collection = '';
        var viewsInstances = [];
        var tempCollection = null;

        /**
         * Initializer
         */
        var init = function init() {

            components = $('[data-view]');

            _.each(components, function (component) {
                view = $(component).attr('data-view');
                model = $(component).attr('data-model');
                collection = $(component).attr('data-collection');

                if (gen.views[view] !== undefined) {

                    if (collection === undefined) {
                        viewsInstances.push(new gen.views[view]({
                            el: $(component),
                            model: gen.models[model] !== undefined ? new gen.models[model]() : null
                        }));
                    } else {
                        tempCollection = _.find(gen.dataLoader.collections, function (dataLoaderCollection) {
                            return dataLoaderCollection.name === collection;
                        });

                        if (!tempCollection) {
                            console.error('Probably caused by not found collection with name ' + collection + ' please check that the name matches an actual package. Available packages:', gen.dataLoader.collections);
                        }

                        viewsInstances.push(new XYL.views[view]({
                            el: $(component),
                            collection: tempCollection.object
                        }));
                    }
                } else {
                    throw new Error('No view found for ' + view);
                }
            });
        };

        // Public
        return {
            init: init,
            viewInstances: viewsInstances
        };
    };

    // Starting the application
    window.loader = new Loader();
    window.loader.init();
})(jQuery, gen);
//# sourceMappingURL=main.js.map

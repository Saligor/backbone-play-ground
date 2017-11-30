# Backbone Playground

To install all the necessary packages
```shell
npm install
```

to run the application
```shell
npm start
```

This app uses these tools, you can find the documentation at
- jQuery - https://jquery.com/
- backbone - http://backbonejs.org/
- underscore - http://underscorejs.org/
- express - https://expressjs.com/
- gulp - https://gulpjs.com/


## Creating a view

Html Part
```html5
<div class="comp-test-component" data-view="testComponent">
    <h1>Hello World</h1>
</div>
```
JavaScript Part
```javascript
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
        },
        
        /**
         * Alerts a message
         */
        alertMessage: function () {
            alert(this.$Message);
        }
    });
}(jQuery, gen, Backbone));
```
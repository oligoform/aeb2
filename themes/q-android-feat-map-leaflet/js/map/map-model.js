/**
 * Map model used to memorize map current data into local storage
 */
define(function (require) {

    "use strict";

    var Backbone = require('backbone');
    var Config = require( 'root/config' );
    require('localstorage');

    var MapModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage( "Map-" + Config.app_slug ),
        defaults: {
            id : "",
            center: { lat: 51.6009, lng: 11.3928 },
            zoom: 8
        }
    });

    return MapModel;
});

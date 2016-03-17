define([
    'emtoolsjs',
    'lodash'
], function (
    emtoolsjs,
    _
) {
    'use strict';

    var Widget = emtoolsjs.Widget.extend({
        defaultOptions: function () {
            return {
                id: 'Application'
            };
        },
        bootstrap: function () {

        }
    });

    return Widget;
});
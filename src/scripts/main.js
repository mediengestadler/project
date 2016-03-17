(function (scope) {
    "use strict";

    requirejs.config({
        paths: {
            'emtoolsjs':            'vendor/emtoolsjs',
            'lodash':               'vendor/lodash'
        },
        shim: {
            'lodash': {
                exports: '_'
            },
        },
        waitSeconds: 60
    });

    require(['Application', 'lodash'], function (Application, _) {
        _.templateSettings = {
            evaluate:    /\{\{(.+?)\}\}/g,
            interpolate: /\{\{=(.+?)\}\}/g,
            escape: /\{\{-(.+?)\}\}/g
        };

        var app = new Application();
    });
})(this);
import { core, Widget, utils } from 'emtoolsjs';
import { $ } from 'jquery';

export class Application extends Widget {
    defaultOptions () {
        return {
            id: 'Application'
        };
    }
    bootstrap () {
        // get core options
        utils.assign(this.options, window.options);

        // global resize/scroll events
        const win = $(window);

        win.on({
            'resize': utils.debounce(() => {
                core.publish('onResize', {
                    width: win.width(),
                    height: win.height()
                });
            }, 80),
            'scroll': utils.debounce(() => {
                core.publish('onResize', {
                    width: win.width(),
                    height: win.height()
                });
            }, 80)
        });

        // easter eggs
        const eew = new EasterEggWidget();

        // breakpoints
        const bw = new BreakpointWidget();

        // on ready
        $(this.onReady);
    }
    addListeners () {

    }
    onReady () {

    }
}
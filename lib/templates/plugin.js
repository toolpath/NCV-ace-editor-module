// Automatically adds 'ace' to globals
import ace from 'ace-builds/src-min-noconflict/ace'
import 'ace-builds/src-min-noconflict/ext-searchbox'
import 'ace-builds/src-min-noconflict/ext-settings_menu'
// import 'ace-builds/src-min-noconflict/ext-language_tools'

import 'ace-builds/src-min-noconflict/mode-javascript'    // Import GCode Syntax Highlighting mode
import 'ace-builds/src-min-noconflict/theme-chrome'  // Import Ace Themes


export default async function ({ router, store }) {
    const useCDN = true;
    const CDN = 'https://cdn.jsdelivr.net/npm/ace-builds@1.4.1/src-min-noconflict';
    if (useCDN) {
        ace.config.set('basePath', CDN);
        ace.config.set('modePath', CDN);
        ace.config.set('themePath', CDN);
        ace.config.set('workerPath', CDN);
    }
}

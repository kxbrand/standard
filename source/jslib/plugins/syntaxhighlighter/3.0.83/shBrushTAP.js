/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
define(function(require, exports, module) {
    // CommonJS
    var SyntaxHighlighter = require('./shCore').SyntaxHighlighter;

    function Brush() {
        // Contributed by Chad Granum
        this.regexList = [
            // Plan
            { regex: new RegExp('^1..\\d+', 'gm'), css: 'plain bold italic' },

            // Match ok, not ok, and with test numbers
            { regex: new RegExp('^ok( \\d+)?', 'gm'),     css: 'keyword' },
            { regex: new RegExp('^not ok( \\d+)?', 'gm'), css: 'color3 bold' },

            // Directives
            { regex: new RegExp('(?!^\\s*)#.*$', 'gm'), css: 'variable bold' },

            // Diagnostics
            { regex: new RegExp('^#.*$', 'gm'), css: 'comments bold' },

            // comments
            { regex: new RegExp('^(?!(not )?ok)[^1].*$', 'gm'), css: 'comments' },

            // Quoted items in messages
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,	css: 'string' },
        ];
    }

    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases   = ['tap', 'Tap', 'TAP'];

    SyntaxHighlighter.brushes.TAP = Brush;

    // CommonJS
    exports.Brush = Brush;
});


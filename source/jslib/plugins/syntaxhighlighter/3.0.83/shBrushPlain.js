define(function(require, exports, module) {
	// CommonJS
	var SyntaxHighlighter = require('./shCore').SyntaxHighlighter;

	function Brush()
	{
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['text', 'plain'];

	SyntaxHighlighter.brushes.Plain = Brush;

	// CommonJS
	exports.Brush = Brush;
});

$('*:not(img,.syntaxhighlighter)').css({
	'background-color': 'transparent',//#000000
	'color':"#878A85",
	"border-color": 'rgba(168, 78, 105, 0.5)'
});

$('a').css('color',"#906");
$('h1,h2,h3,h4,h5,h6').css('color','#DD1515');
$('code').css({
	'background-color': '#1B2426',
	'color':"#E9C228"
});
$('body').css('background','url('+ chrome.extension.getURL('debut_dark.png')+') repeat 0 0');

var ss = document.styleSheets[0];
var selectedCss = "selection {background:transparent; color:#E08524;}";
ss.insertRule('::-moz-'+selectedCss, 0);
ss.insertRule('::'+selectedCss, 0);
ss.insertRule('::-webkit-'+selectedCss, 0);
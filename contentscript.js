$('*:not(img,.syntaxhighlighter)').css({
	'background': '#000000',
	'color':"#878A85",
	"border-color": '#A03'
});

$('a').css('color',"#906");
$('h1,h2,h3,h4,h5,h6').css('color','#DD1515');
$('code').css({
	'background': '#1B2426',
	'color':"#E9C228"
});
$('body').css('background','url('+ chrome.extension.getURL('debut_dark.png')+') repeat 0 0');
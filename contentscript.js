MoonR = {
	html:document.getElementsByTagName("html")[0],
	switcher : function () {
		if (this.html.classList.contains('moonr-injected'))
			this.html.classList.remove('moonr-injected');
		else
			this.html.classList.add('moonr-injected');
	}
};
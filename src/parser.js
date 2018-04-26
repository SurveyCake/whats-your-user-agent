var textarea = document.getElementsByClassName('ua-paste')[0];

textarea.addEventListener('keydown', function(evt) {
	var keyCode = evt.which || evt.keyCode;

	if (keyCode === 13) {
		evt.preventDefault();

		parser.setUA(textarea.value);
		updateUI();
	}
});

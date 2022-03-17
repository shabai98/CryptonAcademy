<SCRIPT LANGUAGE="JavaScript">
<!--
function play() {
	document.rabin.play()
}
function stop() {
	document.rabin.stop()
}
function rewind() {
	document.rabin.rewind()
}
function exec(func) {
	func()
}
// -->
</SCRIPT>

<SCRIPT LANGUAGE="JavaScript">
<!--
with (document) {
	write('<TABLE BORDER=2 CELLPADDING=7><TR><TD ALIGN="center">')
	write('<EMBED SRC="rabin.avi" AUTOSTART=FALSE LOOP=FALSE HEIGHT=120 WIDTH=159 NAME="rabin">')
	write('</TD></TR><TR><TD ALIGN="center"><FORM>')
	write('<INPUT TYPE="button" VALUE="play" onClick="exec(play)">')
	write('<INPUT TYPE="button" VALUE="stop" onClick="exec(stop)">')
	write('<INPUT TYPE="button" VALUE="rewind" onClick="exec(rewind)">')
	write('</TD></TR></TABLE></FORM>')
}

// -->
</SCRIPT>

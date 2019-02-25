console.log('index.js start');
$( "#root1" ).click(function() {
	alert("click root1");
	$(this).text('have been clicked of root1');
});
$( "#root2" ).click(function() {
	alert("click root2");
	$(this).text('have been clicked of root2');
});
console.log('index.js end');

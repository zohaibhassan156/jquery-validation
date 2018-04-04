$.validator.addMethod( "lettersonly", function( value, element ) {
	return this.optional( element ) || /^[a-z\s]+$/i.test( value );
}, "Letters only please" );

describe('Address Book', function() {
	var addressBook,
		thisContact;

	beforeEach(function() {
		addressBook = new AddressBook();
		thisContact = new Contact();
	});

	it('should be able to add a contact', function() {
		var index = addressBook.addContact(thisContact) - 1;
		expect(addressBook.getContact(index)).toBe(thisContact);
	});

	it('should be able to delete a contact', function() {
		var index = addressBook.addContact(thisContact) - 1;
		addressBook.deleteContact(index);

		expect(addressBook.getContact(index)).not.toBeDefined();
				
	});
});

describe('Async Address Book', function(){
	var addressBook = new AddressBook();

	beforeEach(function(done) {
		addressBook.getInitialContacts(function() {
			done();
		})
	});

	it('should grab initial contacts', function(done){
		expect(addressBook.initialComplete).toBe(true);
		done();
	});
});
function AddressBook() {
	this.contactList = [];
	this.initialComplete = false;
}

AddressBook.prototype.addContact = function(thisContact) {
	return this.contactList.push(thisContact);
}

AddressBook.prototype.getContact = function(index) {
	return this.contactList[index];
}

AddressBook.prototype.deleteContact = function(index) {
	this.contactList.splice(index, 1);
}

AddressBook.prototype.getAllContacts = function() {
	return this.contactList;
}

AddressBook.prototype.getInitialContacts = function(cb) {
	var self = this;

	setTimeout(function(){
		self.initialComplete = true;
		if(cb) {
			return cb();
		}
	}, 3);
}
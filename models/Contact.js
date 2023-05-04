class Contact {
    constructor(
        _id, firstName, lastName, email, favoriteColor, birthday
    ) {
        this._id = _id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.favoriteColor = favoriteColor
        this.birthday = birthday
    }
}

module.exports = { Contact }
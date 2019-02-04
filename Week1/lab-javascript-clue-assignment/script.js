var person = {
    firstName: "Piet",
    lastName: "Lok",
    fullName: function () {
        console.log(this.firstName + ' ' + this.lastName)
    }
}
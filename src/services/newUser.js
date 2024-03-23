class newUser {
	static uniqueUserId = null
	static userName = null
	static phoneNumber = null
	static email = null
	static major = null
	static year = null
	static password = null
	static fullName = null

	static uniqueUserId(uniqueUserId){
		this.uniqueUserId = uniqueUserId
	}

	static setUserName(userName) {
		this.userName = userName
	}

	static setPhoneNumber(phoneNumber) {
		this.phoneNumber = phoneNumber
	}

	static setEmail(email) {
		this.email = email
	}

	static setMajor(major) {
		this.major = major
	}

	static setYear(year) {
		this.year = year
	}

	static setPassword(password) {
		this.password = password
	}

	static setFullName(fullName) {
		this.fullName = fullName
	}
}

export default newUser

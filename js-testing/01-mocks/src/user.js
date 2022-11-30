class User {
  constructor({id,name, profession, age}) {
    this.id = parseInt(id)
    this.name = name
    this.profession = profession
    this.birthYear = this.calculateBirthYear(parseInt(age))
  }

  calculateBirthYear(age) {
    return new Date().getFullYear() - age
  }
}

module.exports = User
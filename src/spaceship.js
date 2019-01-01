class Spaceship {
  constructor(name, crew, phasers, shields) {
      this.name = name;
      this.crew = crew;

      // knew i was close so i kept persevering. overcomplicating.
      crew.forEach(person => {person.currentShip = this})
      this.phasers = phasers;
      this.shields = shields;
      this.cloaked = false
      this.warpDrive = 'disengaged'
      this.docked = crew.length > 0 ? false : true
      this.phasersCharge = 'uncharged'
    }

  // loadCrew() {
  //   if (crew.length > 0) {
  //     for (person of crew) {
  //       person.currentShip = new Spaceship(this.name, crew, this.phasers, this.shields)
  //     }
  //   }
  // }

}

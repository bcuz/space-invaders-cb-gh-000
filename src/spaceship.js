class Spaceship {
  constructor(name, crew, phasers, shields) {
      this.name = name;
      this.phasers = phasers;
      this.shields = shields;
      this.cloaked = false
      this.warpDrive = 'disengaged'
      this.docked = crew.length > 0 ? false : true
      this.phasersCharge = 'uncharged'
    }

  loadCrew() {
    if (crew.length > 0) {
      
    }
  }
}

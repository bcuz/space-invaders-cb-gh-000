class CrewMember {
  constructor(position) {
      this.position = position;
      // like i need a setter here or something.
      this.currentShip = 'Looking for a Rig';
    }

  set currentShip(newShip) {
    
  }

  engageWarpDrive() {
    if (this.currentShip == 'Looking for a Rig') {
      return 'had no effect'
    }
  }
  setsInvisibility() {
    if (this.currentShip == 'Looking for a Rig') {
      return 'had no effect'
    } else {
      currentShip.cloaked = true
    }
  }
  chargePhasers() {
    if (this.currentShip == 'Looking for a Rig') {
      return 'had no effect'
    }
  }
}

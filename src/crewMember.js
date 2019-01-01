class CrewMember {
  constructor(position) {
      this.position = position;
      this.currentShip = 'Looking for a Rig';
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
      // this shouldnt be difficult
      this.currentShip.cloaked = true
      console.log(this.currentShip.cloaked)
    }
  }
  chargePhasers() {
    if (this.currentShip == 'Looking for a Rig') {
      return 'had no effect'
    }
  }
}

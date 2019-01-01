class CrewMember {
  constructor(position) {
      this.position = position;
      this.currentShip = 'Looking for a Rig';
    }

  engageWarpDrive() {
    if (this.currentShip == 'Looking for a Rig') {
      return 'had no effect'
    } else {
      // this shouldnt be difficult
      this.currentShip.warpDrive = 'engaged'
      console.log(this.currentShip)
    }
  }
  setsInvisibility() {
    if (this.currentShip == 'Looking for a Rig') {
      return 'had no effect'
    } else {
      // this shouldnt be difficult
      this.currentShip.cloaked = true
      console.log(this.currentShip)
    }
  }
  chargePhasers() {
    if (this.currentShip == 'Looking for a Rig') {
      return 'had no effect'
    } else {
      // this shouldnt be difficult
      this.currentShip.cloaked = true
      console.log(this.currentShip)
    }
  }
}

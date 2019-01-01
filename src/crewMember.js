class CrewMember {
  constructor(position) {
      this.position = position;
      this.currentShip = 'Looking for a Rig';
    }

  engageWarpDrive() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    }
    
    // else {
    //   // this shouldnt be difficult
    //   this.currentShip.warpDrive = 'engaged'
    //   console.log(this.currentShip)
    // }
  }
  setsInvisibility() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else {
      // this shouldnt be difficult. something is not right here.
      // this.currentShip.cloaked = !this.currentShip.cloaked
      this.currentShip.cloaked = !this.currentShip.cloaked
      // shouldnt this log twice ?
      // console.log(this.position)
      // console.log(this.currentShip.cloaked)
    }
  }
  chargePhasers() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    }
    // else {
    //   // this shouldnt be difficult
    //   this.currentShip.cloaked = true
    //   console.log(this.currentShip)
    // }
  }
}

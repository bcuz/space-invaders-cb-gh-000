class CrewMember {
  constructor(position) {
      this.position = position;
      this.currentShip = new Spaceship('Millenium Falcon');
    }


  engageWarpDrive() {
    if (this.currentShip == 'Looking for a Rig') {
      return 'had no effect'
    }
  }
  setsInvisibility() {
    if (this.currentShip == 'Looking for a Rig') {
      return 'had no effect'
    }
  }
  chargePhasers() {
    if (this.currentShip == 'Looking for a Rig') {
      return 'had no effect'
    }
  }
}

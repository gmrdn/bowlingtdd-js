class BowlingGame {

  constructor() {
    this.scoreFinal = 0;
    this.lancers = new Array(21);
    this.numeroDuLancerEnCours = 0;
  }

  lancerUneBouleEtAjouterResultat(resultat){
    this.scoreFinal += resultat;
    this.lancers[this.numeroDuLancerEnCours] = resultat;
    this.numeroDuLancerEnCours += 1;
  }

  calculerLeScoreFinal() {
    this.scoreFinal = 0;
    var numeroLancer = 0;
    for (var manche = 0; manche < 10; manche ++) {
      if (this.estUnStrike(numeroLancer)) { 
        this.scoreFinal += 
            10 +
            this.bonusDeStrike(numeroLancer);
        numeroLancer += 1;
      }
      else if (this.estUnSpare(numeroLancer)) {
        this.scoreFinal += 
            10 + 
            this.bonusDeSpare(numeroLancer);
        numeroLancer += 2;
      }
      else {
        this.scoreFinal += 
            this.sommeDesLancersDeLaManche(numeroLancer);
        numeroLancer += 2;
      }
    }

    return this.scoreFinal;
  }

  estUnSpare(numeroLancer) {
    return this.lancers[numeroLancer] + this.lancers[numeroLancer+1] == 10;
  }

  estUnStrike(numeroLancer) {
    return this.lancers[numeroLancer]==10;
  }

  sommeDesLancersDeLaManche(numeroLancer){
    return this.lancers[numeroLancer] + this.lancers[numeroLancer+1];
  }

  bonusDeSpare(numeroLancer){
    return this.lancers[numeroLancer+2];
  }

  bonusDeStrike(numeroLancer){
    return this.lancers[numeroLancer+1] + this.lancers[numeroLancer+2];
  }

}

module.exports = BowlingGame;

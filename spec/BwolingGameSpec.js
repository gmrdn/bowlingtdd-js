const BowlingGame = require('../src/BowlingGame');

describe('BowlingGame', () => {

  var partie;

  beforeEach(() => {
    partie = new BowlingGame();
  });

  function lancerPlusieursBoulesEtAjouterResultats(nbBoules, resultatDeChaqueBoule) {
    for(var i=0; i < nbBoules; i++) {
      partie.lancerUneBouleEtAjouterResultat(resultatDeChaqueBoule);
    }
  }

  function lancerUnSpare() {
    partie.lancerUneBouleEtAjouterResultat(5);
    partie.lancerUneBouleEtAjouterResultat(5);
  }

  function lancerUnStrike() {
    partie.lancerUneBouleEtAjouterResultat(10);
  }

  it('calcule un score de zero quand on fait que des zeros', () => {
    lancerPlusieursBoulesEtAjouterResultats(20,0);
    expect(partie.calculerLeScoreFinal()).toBe(0);
  });

  it('calcule un score de 20 quand on fait que des 1', () => {
    lancerPlusieursBoulesEtAjouterResultats(20,1);
    expect(partie.calculerLeScoreFinal()).toBe(20);
  });

  it('ajoute le lancer suivant quand on fait un spare', () => {
    lancerUnSpare();
    partie.lancerUneBouleEtAjouterResultat(3);
    lancerPlusieursBoulesEtAjouterResultats(17,0);
    expect(partie.calculerLeScoreFinal()).toBe(16);
  });

  it('ajoute les deux lancers suivants quand on fait un strike', () => {
    lancerUnStrike();
    partie.lancerUneBouleEtAjouterResultat(3);
    partie.lancerUneBouleEtAjouterResultat(4);
    lancerPlusieursBoulesEtAjouterResultats(16,0);
    expect(partie.calculerLeScoreFinal()).toBe(24);
  });

  it('calcule un score de 300 si on fait que des strikes', () => {
    lancerPlusieursBoulesEtAjouterResultats(12, 10);
    expect(partie.calculerLeScoreFinal()).toBe(300);
  });
});

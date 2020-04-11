package com.majustic.demo.model;

public class Gazon {

	private int infGauche; 
	private int supDroite;
	public Gazon(int infGauche, int supDroite) {
		super();
		this.infGauche = infGauche;
		this.supDroite = supDroite;
	}
	public int getInfGauche() {
		return infGauche;
	}
	public void setInfGauche(int infGauche) {
		this.infGauche = infGauche;
	}
	public int getSupDroite() {
		return supDroite;
	}
	public void setSupDroite(int supDroite) {
		this.supDroite = supDroite;
	}
	@Override
	public String toString() {
		return "Gazon [infGauche=" + infGauche + ", supDroite=" + supDroite + "]";
	}
	
	
	
	
}

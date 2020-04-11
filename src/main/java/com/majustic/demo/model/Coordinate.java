package com.majustic.demo.model;

public class Coordinate {

	public int positionX;
	public  int positionY;
	public Coordinate(int positionX, int positionY) {
		super();
		this.positionX = positionX;
		this.positionY = positionY;
	}
	public int getPositionX() {
		return positionX;
	}
	public void setPositionX(int positionX) {
		this.positionX = positionX;
	}
	public int getPositionY() {
		return positionY;
	}
	public void setPositionY(int positionY) {
		this.positionY = positionY;
	}
	@Override
	public String toString() {
		return "Coordinate [positionX=" + positionX + ", positionY=" + positionY + "]";
	}
	
	
}

package com.majustic.demo.model;

public class Tondeuse {

	public int positionX;
	public  int positionY;
	public  Character direction;
	public Tondeuse(int positionX, int positionY, Character direction) {
		super();
		this.positionX = positionX;
		this.positionY = positionY;
		this.direction = direction;
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
	public Character getDirection() {
		return direction;
	}
	public void setDirection(Character direction) {
		this.direction = direction;
	}
	@Override
	public String toString() {
		return "Tondeuse [positionX=" + positionX + ", positionY=" + positionY + ", direction=" + direction + "]";
	}
	
	
}

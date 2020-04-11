package com.majustic.demo.service;


import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;

import com.majustic.demo.Result;
import com.majustic.demo.model.Gazon;
import com.majustic.demo.model.Tondeuse;


public class TondeuseService {

 	private final Logger logger = LoggerFactory.getLogger(this.getClass());

 	public Gazon gazon;
	public Tondeuse tondeuse;
	public String commande;
	
	
	public Result executerCommande(TondeuseService e) {
		

    	logger.info("Etat - infG : "+ e.gazon.getInfGauche() +" supG :" +  e.gazon.getSupDroite());
   	 	
	System.out.println("infG "+ e.gazon.getInfGauche() + " supG " +  e.gazon.getSupDroite());
	System.out.println("e.tondeuse.direction : "+ e.tondeuse.direction);

	return new Result();
};

public  Resource loadLog() {
    try {
	Path root = Paths.get("logs");
      Path file = root.resolve("tondeuse.log");
      Resource resource = new UrlResource(file.toUri());

      if (resource.exists() || resource.isReadable()) {
        return resource;
      } else {
        throw new RuntimeException("Could not read the file!");
      }
    } catch (MalformedURLException e) {
      throw new RuntimeException("Error: " + e.getMessage());
    }
  }
}

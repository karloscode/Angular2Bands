import { Injectable } from '@angular/core';
import { Band } from '../models/band';
@Injectable()
export class BandsService{
	
 BANDS = [
  new Band( "the-rolling-stones" , "https://www.youtube.com/embed/nrIPxlFzDi0", "Son considerados una de las más grandes e influyentes bandas de toda la historia del rock, siendo la agrupación que sentó las bases del rock contemporáneo. Contando desde sus inicios con el favor de la crítica, algunos de sus materiales están considerados entre los mejores de todos los tiempos; entre ellos destacan Beggars Banquet (1968), Let It Bleed (1969), Sticky Fingers (1971) y quizá su mejor obra, Exile on Main St. (1972). En 1989 fueron incluidos en el Salón de la Fama del Rock and Roll, y en 2004 la revista estadounidense Rolling Stone los colocó en el puesto No. 4 en su lista de Los 50 Mejores Artistas de todos los Tiempos. Ningún grupo de rock hasta la fecha ha sostenido tan duradera y todavía mundialmente reconocida trayectoria como The Rolling Stones; con Jagger, Richards y Watts como miembros fundadores en activo, continúan siendo la banda más longeva de la historia del rock" ,
  	"./assets/rolling-stones.jpg",
  	 "The Rolling Stones" , "The Rolling Stones", "Son considerados una de las más grandes e influyentes bandas de toda la historia del rock, siendo la agrupación que sentó las bases del rock contemporáneo. Contando desde sus inicios con el favor de la crítica, algunos de sus materiales están considerados entre los mejores de todos los tiempos; entre ellos destacan Beggars Banquet (1968), Let It Bleed (1969), Sticky Fingers (1971) y quizá su mejor obra, Exile on Main St. (1972). En 1989 fueron incluidos en el Salón de la Fama del Rock and Roll, y en 2004 la revista estadounidense Rolling Stone los colocó en el puesto No. 4 en su lista de Los 50 Mejores Artistas de todos los Tiempos. Ningún grupo de rock hasta la fecha ha sostenido tan duradera y todavía mundialmente reconocida trayectoria como The Rolling Stones; con Jagger, Richards y Watts como miembros fundadores en activo, continúan siendo la banda más longeva de la historia del rock"
     , "rolling stones , rock contemporáneo , Jagger, Richards , Watts"),

  new Band( "the-beatles" , "https://www.youtube.com/embed/Jbt8oH5Lxto" , "The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular.Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). Enraizada en el skiffle y el rock and roll de los años cincuenta, la banda trabajó más tarde con distintos géneros musicales, que iban desde las baladas pop hasta el rock psicodélico, incorporando a menudo elementos clásicos, entre otros, de forma innovadora en sus canciones. La naturaleza de su enorme popularidad, que había emergido primeramente con la moda de la «Beatlemanía», se transformó al tiempo que sus composiciones se volvieron más sofisticadas. Llegaron a ser percibidos como la encarnación de los ideales progresistas, extendiendo su influencia en las revoluciones sociales y culturales de la década de 1960." ,
  	"./assets/the-beatles.jpg",
  	 "The Beatles" , "The Beatles", "The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular.Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). Enraizada en el skiffle y el rock and roll de los años cincuenta, la banda trabajó más tarde con distintos géneros musicales, que iban desde las baladas pop hasta el rock psicodélico, incorporando a menudo elementos clásicos, entre otros, de forma innovadora en sus canciones. La naturaleza de su enorme popularidad, que había emergido primeramente con la moda de la «Beatlemanía», se transformó al tiempo que sus composiciones se volvieron más sofisticadas. Llegaron a ser percibidos como la encarnación de los ideales progresistas, extendiendo su influencia en las revoluciones sociales y culturales de la década de 1960." , 
     "beatles , pop/rock , liverpool , jhon Lenon , Paul McCartney"),

  new Band( "queen" , "https://www.youtube.com/embed/fJ9rUzIMcZQ" , "Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa" ,
   "./assets/queen.jpg" , "Queen" , "Queen", "Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa" , "queen , rock , banda , britanica , Freddie Mercury"),
 ];

 getAll(){
// Método que devuelve todos las Bandas
	return this.BANDS;
 }

 getByUrl(url){
 // Método que devuelve la banda mediante el parametro del router
    return this.BANDS.filter((elemento => elemento.url == url));
 }

}
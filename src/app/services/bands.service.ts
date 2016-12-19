import { Injectable } from '@angular/core';
import { Band } from '../models/band';
@Injectable()
export class BandsService{
	
 BANDS = [
  new Band( "the-rolling-stones" , "nrIPxlFzDi0", "Son considerados una de las más grandes e influyentes bandas de toda la historia del rock,3 siendo la agrupación que sentó las bases del rock contemporáneo.4 5 6 Contando desde sus inicios con el favor de la crítica, algunos de sus materiales están considerados entre los mejores de todos los tiempos;7 8 9 10 entre ellos destacan Beggars Banquet (1968), Let It Bleed (1969), Sticky Fingers (1971) y quizá su mejor obra, Exile on Main St. (1972).nota 1 En 1989 fueron incluidos en el Salón de la Fama del Rock and Roll, y en 2004 la revista estadounidense Rolling Stone los colocó en el puesto No. 4 en su lista de Los 50 Mejores Artistas de todos los Tiempos.11 Ningún grupo de rock hasta la fecha ha sostenido tan duradera y todavía mundialmente reconocida trayectoria como The Rolling Stones; con Jagger, Richards y Watts como miembros fundadores en activo, continúan siendo la banda más longeva de la historia del rock" ,
  	"http://cultura.biografieonline.it/wp-content/uploads/2015/02/Rolling-Stones-La-lingua.jpg",
  	 "The Rolling Stones" , "The Rolling Stones", "DescriptionMeta" , "KeywordsMeta"),

  new Band( "the-beatles" , "nrIPxlFzDi0" , "Son considerados una de las más grandes e influyentes bandas de toda la historia del rock,3 siendo la agrupación que sentó las bases del rock contemporáneo.4 5 6 Contando desde sus inicios con el favor de la crítica, algunos de sus materiales están considerados entre los mejores de todos los tiempos;7 8 9 10 entre ellos destacan Beggars Banquet (1968), Let It Bleed (1969), Sticky Fingers (1971) y quizá su mejor obra, Exile on Main St. (1972).nota 1 En 1989 fueron incluidos en el Salón de la Fama del Rock and Roll, y en 2004 la revista estadounidense Rolling Stone los colocó en el puesto No. 4 en su lista de Los 50 Mejores Artistas de todos los Tiempos.11 Ningún grupo de rock hasta la fecha ha sostenido tan duradera y todavía mundialmente reconocida trayectoria como The Rolling Stones; con Jagger, Richards y Watts como miembros fundadores en activo, continúan siendo la banda más longeva de la historia del rock" ,
  	"https://es.wikipedia.org/wiki/The_Rolling_Stones#/media/File:Stones_members_montage2.jpg",
  	 "The Beatles" , "The Beatles", "DescriptionMeta" , "KeywordsMeta"),

  new Band( "queen" , "1" , "2" , "3" , "Queen" , "5", "6" , "7"),
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
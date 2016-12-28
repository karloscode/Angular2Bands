import { Injectable } from '@angular/core';
import { Band } from '../models/band';
@Injectable()
export class BandsService{
	
 BANDS = [
  new Band( "the-rolling-stones" , "https://www.youtube.com/embed/nrIPxlFzDi0", "Son considerados una de las más grandes e influyentes bandas de toda la historia del rock,3 siendo la agrupación que sentó las bases del rock contemporáneo.4 5 6 Contando desde sus inicios con el favor de la crítica, algunos de sus materiales están considerados entre los mejores de todos los tiempos;7 8 9 10 entre ellos destacan Beggars Banquet (1968), Let It Bleed (1969), Sticky Fingers (1971) y quizá su mejor obra, Exile on Main St. (1972).nota 1 En 1989 fueron incluidos en el Salón de la Fama del Rock and Roll, y en 2004 la revista estadounidense Rolling Stone los colocó en el puesto No. 4 en su lista de Los 50 Mejores Artistas de todos los Tiempos.11 Ningún grupo de rock hasta la fecha ha sostenido tan duradera y todavía mundialmente reconocida trayectoria como The Rolling Stones; con Jagger, Richards y Watts como miembros fundadores en activo, continúan siendo la banda más longeva de la historia del rock" ,
  	"http://i.huffpost.com/gen/1315651/images/o-ROLLING-STONES-YOUNG-facebook.jpg",
  	 "The Rolling Stones" , "The Rolling Stones", "DescriptionMeta" , "KeywordsMeta"),

  new Band( "the-beatles" , "https://www.youtube.com/embed/Jbt8oH5Lxto" , "Son considerados una de las más grandes e influyentes bandas de toda la historia del rock, siendo la agrupación que sentó las bases del rock contemporáneo. Contando desde sus inicios con el favor de la crítica, algunos de sus materiales están considerados entre los mejores de todos los tiempos; entre ellos destacan Beggars Banquet (1968), Let It Bleed (1969), Sticky Fingers (1971) y quizá su mejor obra, Exile on Main St. (1972). En 1989 fueron incluidos en el Salón de la Fama del Rock and Roll, y en 2004 la revista estadounidense Rolling Stone los colocó en el puesto No. 4 en su lista de Los 50 Mejores Artistas de todos los Tiempos. Ningún grupo de rock hasta la fecha ha sostenido tan duradera y todavía mundialmente reconocida trayectoria como The Rolling Stones; con Jagger, Richards y Watts como miembros fundadores en activo, continúan siendo la banda más longeva de la historia del rock" ,
  	"http://bucket1.glanacion.com/anexos/fotos/89/the-beatles-2246789w620.jpg",
  	 "The Beatles" , "The Beatles", "DescriptionMeta" , "KeywordsMeta"),

  new Band( "queen" , "https://www.youtube.com/embed/fJ9rUzIMcZQ" , "Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa" ,
   "http://image.iheart.com/images/rovi/1080/0003/627/MI0003627191.jpg" , "Queen" , "5", "6" , "7"),
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
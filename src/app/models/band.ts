export class Band {
 urlYoutube: string;
 text: string;
 urlImg: string;
 name: string;
 titleMeta: string;
 descriptionMeta: string;
 keywordsMeta: string;
 constructor ( urlYoutube: string, text: string, urlImg: string, 
 	name: string, titleMeta: string, descriptionMeta: string, keywordsMeta: string ){
 this.urlYoutube = urlYoutube;
 this.text = text;
 this.urlImg = urlImg;
 this.name = name;
 this.titleMeta = titleMeta;
 this.descriptionMeta = descriptionMeta;
 this.keywordsMeta = keywordsMeta;
 }
}
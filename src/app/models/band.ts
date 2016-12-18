export class Band {
 	url: string;
	urlYoutube: string;
	text: string;
	urlImg: string;
	name: string;
	titleMeta: string;
	descriptionMeta: string;
	keywordsMeta: string;
	constructor ( url: string, urlYoutube: string, text: string, urlImg: string, 
	 	name: string, titleMeta: string, descriptionMeta: string, keywordsMeta: string ){
	this.url = url;
	this.urlYoutube = urlYoutube;
	this.text = text;
	this.urlImg = urlImg;
	this.name = name;
	this.titleMeta = titleMeta;
	this.descriptionMeta = descriptionMeta;
	this.keywordsMeta = keywordsMeta;
 }
}
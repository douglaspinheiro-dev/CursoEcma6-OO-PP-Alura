class View {
	constructor(elemento){
		this._elemento = elemento;
		this._Helpers;
	}

	renderiza(app){
		let elemento = this._elemento;
		let helpers = this._Helpers;
		

		$.get(this._url, function(data) {
			elemento.html($.templates(data).render(app, helpers));
		});
	}


	update(){
		throw new Error('O método template deve ser implementado na class filha.');
	}
	
}
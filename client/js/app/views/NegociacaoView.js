class NegociacoesView extends View {

	constructor(elemento){
		super(elemento);
		this._url = 'js/app/views/templates/table_NegociacaoView.html';
		this._Helpers = {
		    dataParaTexto: function(val) { return DateHelper.dataParaTexto(val); }
		};
	}

	update(listaNegociacoes){
		
		let app = {negociacoes: listaNegociacoes.negociacoes};
		this.renderiza(app);
	}
	
}
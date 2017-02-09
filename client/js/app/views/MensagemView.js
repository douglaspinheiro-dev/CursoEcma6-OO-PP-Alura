class MensagemView extends View {
	constructor(elemento){
		super(elemento);
		this._id = '#mensagemView';
		this._url = 'js/app/views/templates/alert_MensagemView.html';
		
	}

	update(texto){
		this.renderiza(texto);
	}

}
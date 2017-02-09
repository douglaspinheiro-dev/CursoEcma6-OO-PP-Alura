class NegociacaoController {

	constructor(){
		//let Z = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._listaNegociacoes = new ListaNegociacoes();

		this._negociacoesView = new NegociacoesView($('#negociacoesView'));
		this._negociacoesView.update(this._listaNegociacoes);

		this._mensagem = new Mensagem();
		this._mensagemView = new MensagemView($('#mensagemView'));
		this._mensagemView.update(this._mensagem);
		
	}
	
	adiciona(event){

		event.preventDefault();

		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._negociacoesView.update(this._listaNegociacoes);
		
		this._mensagem.texto = 'Negociação adicionada com sucesso';
		this._mensagemView.update(this._mensagem);
		
		this._limpaFormulario();
		
	}

	_limpaFormulario(){
		this._inputData.closest('form').each (function(){this.reset()});
		this._inputData.focus();
		/*
		this._inputData.val() = '';
		this._inputQuantidade.val() = 1;
		this._inputValor.val() = 0.0;
		this._inputData.focus();*/
	}

	_criaNegociacao(){
		return new Negociacao(
			DateHelper.textoParaData(this._inputData.val()),
			this._inputQuantidade.val(),
			this._inputValor.val()
		);
	}
}
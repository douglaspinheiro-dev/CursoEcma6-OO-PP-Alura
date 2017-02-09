class ListaNegociacoes {

	constructor(){
		this._negociacoes = []
	}

	adiciona(negociacao){
		this._negociacoes.push(negociacao);
	}

	get negociacoes(){
		//retorno um novo array, concatenando o array _negociacoes.
		return [].concat(this._negociacoes);
	}
}
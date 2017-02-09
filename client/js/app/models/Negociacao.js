class Negociacao {

	constructor(data, quantidade, valor) {
		//convenção = sublinhado significa somente leitura, nao deve acessar o atributo diretamente
		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;
		Object.freeze(this);
	}
	//function dentro da classe se chama metodo
	get volume() {
		return this._quantidade * this._valor;
	}

	get data(){
		return new Date(this._data.getTime());
	}

	get quantidade(){
		return this._quantidade;
	}

	get valor(){
		return this._valor;
	}


}
/*

class Pessoa {
	constructor(nome, sobrenome) {
		this.nome = nome;
		this.sobrenome = sobrenome;
	}
	obterNomeCompleto() {
		return `${this.nome} tsetestestse ${this.sobrenome}`;
	}
}*/
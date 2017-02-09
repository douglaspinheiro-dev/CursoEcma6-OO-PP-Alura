class Conta {
	constructor(saldo){
		this._saldo = saldo;
	}

	atualiza(taxa){
		throw new Error('Voce deve sobrescrever o método');
	}
	get saldo(){
		return this._saldo;
	}
}
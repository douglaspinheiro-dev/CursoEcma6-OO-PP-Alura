class DateHelper {
	
	constructor(){
		throw new Error('Esta classe não pode ser instanciada, utilize os métodos estaticos dela.')
	}

	static dataParaTexto(data){
		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
	}

	static textoParaData(anoMesDia){
		if(!/\d{4}-\d{2}-\d{2}/.test(anoMesDia))
			throw new Error ('Deve estar no formato aaaa-mm-dd');
		
		return new Date(...
			anoMesDia.split('-')
				.map((item, indice) => item - indice % 2));
	}
}
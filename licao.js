async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Tá querendo me enrolar né!!!!


Então vamos fazer assim:








Repita comigo, por gentileza:











NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!


De novo:




NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!






Mais uma vez:










NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!







Agora na forma de um mantra:


NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!
























Aprendeu?



Não?


Então vamos mais um pouquinho:

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!

NÃO DEVO ENVIAR SPAM PARA AS PESSOAS!!!!








`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
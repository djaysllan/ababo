const help = (setprefix) => {
	return `         
┏┳┳┅┅┅┅┅┅┅┅┅┅┅┓

      *Ａｙｓｌｌａｎ
            e
       K 3 V 3 N*

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┛

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}sticker*
desc : Converter imagem / gif / vídeo em adesivo
uso : Responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}toimg*
desc : Converter adesivo em imagem
uso : Responda a sticker\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}tts*
desc : Converter texto em fala / áudio
uso : *${prefix}tts [cc] [text]*\nexemplo : *${prefix}tts pt Oi sou um bot*\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}setprefix*
desc : Substituir prefixo
uso : *${prefix}setprefix [text|optional]*\nexamplo : *${prefix}setprefix ?*
nota : Este comando só pode ser usado pelo proprietário do bot\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}clearall*
desc : Excluir conversas abertas do bot
uso : Apenas envie o comando
nota : Este comando só pode ser usado pelo proprietário do bot\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}kick*
desc : Banir membro do grupo
uso : *${prefix}kick [@number]*\nexamplo : *${prefix}kick @number*
nota : Este comando só pode ser usado se você for um administrador do grupo
nota² : Este comando só pode ser usado se o bot for um administrador do grupo\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}add*
desc : Adiciona membro ao grupo
uso : *${prefix}add [number]*\nexample : *${prefix}add 551198129xxxx*
nota : Este comando só pode ser usado se você for um administrador do grupo
nota² : Este comando só pode ser usado se o bot for um administrador do grupo\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}welcome 1*
desc : Ativa mensagem de boas vindas
uso : Apenas envie o comando
nota : Este comando só pode ser usado se você for um administrador do grupo\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}welcome 0*
desc : Desativa mensagem de boas vindas
uso : Apenas envie o comando
nota : Este comando só pode ser usado se você for um administrador do grupo\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}bc*
desc : Transmissão para todos chats abertos do bot
uso : *${prefix}bc [text]*\nexamplo : *${prefix}bc text*
nota : Este comando só pode ser usado pelo proprietário do bot\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}tagall(2,3,4,5)
desc : Marca todos os membros do grupo, incluindo administradores também
uso : Apenas envie o comando
nota : Este comando só pode ser usado se você for um administrador do grupo\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}.tomp3*
desc : Baixa audio de algum vídeo
uso :  Marque um video com a legenda ${setprefix}tomp3\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}.loli*
desc :  Envia imagem de alguma loli aleatória
uso : Apenas envie o comando\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}randomanime*
desc : Envia imagens aleatórias de animes
uso : Apenas envie o comando\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}pokemon*
desc : Envia imagens aleatórias de pokemon
uso : Apenas envie o comando\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}level*
desc : Mostra seu atual level (seu level aumenta por quantidade de mensagens
uso : Apenas envie o comando\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}%gado*
desc : Mostra quantos % você é gado (porcentagem aleatória, não leve a serio)
uso : Apenas envie o comando\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}bcgc*
desc : Tm para todos membros desse atual grupo
uso : Este comando só pode ser usado se você for um administrador do grupo\n

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

comando : *${prefix}menuadmin*
desc : Exibe comandos administrativos
uso : Apenas envie o comando

┋┋┣┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅


      *Ａｙｓｌｌａｎ
            e
       K 3 V 3 N*
       

┗┻┻┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┛

`
}

exports.help = help

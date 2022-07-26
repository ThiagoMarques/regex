# REGEX

O Regex é comumente utilizado para validação de itens em diversas linguagens. Neste respositório você encontrará um exemplo simples em JavaScript, com exemplos de:

 - Validação de e-mail 
 - Validação de IPV4 
 - Validação de Telefone 
 - Validação de Senha

## Informações adicionais

**MetaCaracteres - Representantes**
. -> Ponto -> Um caracter qualquer
[] -> Conjunto -> Conjunto de caracteres permitidos
[^] -> Conjunto -> Conjunto de caracteres proibidos

**MetaCaracteres - Quantificadores**
? -> Opcional -> Zero ou um
\* -> Asterisco -> Zero ou mais
\+ -> Mais -> Um ou mais
{n,m} -> Chaves -> De n até m

**MetaCaracteres - Âncoras**
^ -> Circunflexo -> Início de linha
$ -> Cifrão -> Fim de linha
\b -> Borda -> Início ou fim de palavra

**MetaCaracteres - Outros**
\ -> Escape -> Uso de metacaracteres como literal
| -> Ou -> Operação de Ou
() -> Grupo -> Define um grupo
\1...\9 -> Retrovisor -> Resgata grupos já definidos

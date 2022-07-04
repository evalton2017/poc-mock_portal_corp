

export function vigenciaAtual(): string{
  const data  =JSON.stringify(new Date());
  const vigencia = data.split('-',2);
  const ano = vigencia[0].split('"',2);
  return vigencia[1]+"/"+ano[1]

}

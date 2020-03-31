const concatErros = (erros: any) => {
  erros = JSON.parse(JSON.stringify(erros));
  return Object.values(erros)
    .filter(value => (value as Array<any>).length > 0)
    .map(value => value)
    .join("\n");
}

const utilService = {
  concatErros
};

export default utilService;
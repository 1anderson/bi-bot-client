const concatErrosForm = (erros: any, h: any) => {
  erros = JSON.parse(JSON.stringify(erros));
  return Object.values(erros)
    .filter(value => (value as Array<any>).length > 0)
    .map(value => h("span", value));
};

const validateForm = async (observer: any, h:any) => {
  const { validate, errors } = observer as Record<string, any>;
  const isValid = await validate();
  if (!isValid) {
    throw concatErrosForm(errors, h);
  }
};

const utilService = {
  validateForm
};

export default utilService;
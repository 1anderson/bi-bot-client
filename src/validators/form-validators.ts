import { extend } from "vee-validate";
import { email, required } from "vee-validate/dist/rules";
import { ID } from "@node-steam/id";

extend("email", {
  ...email,
  message: "{_field_} tem que ser válido. !"
});

extend("required", {
  ...required,
  message: "{_field_} é obrigatório."
});

extend("minmax", {
  validate(value, { min, max }: any) {
    return value.length >= min && value.length <= max;
  },
  params: ["min", "max"],
  message: "O {_field_} campo deve ter entre {min} e {max} dígitos"
});

extend("confirm-password", {
  validate(value, args: any){
    return value === args.password;
  },
  params: ["password"],
  message: "Os valores são diferentes"
});

extend("steamID", value => {
  return new ID(value).isValid();
});

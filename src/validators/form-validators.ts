import { extend } from "vee-validate";
import { email, required } from "vee-validate/dist/rules";
import { ID } from "@node-steam/id";

extend("email", {
  ...email,
  message: "{_field_} é requerido, seu viado!"
});

extend("required", {
  ...required,
  message: "{_field_} é requerido"
});

extend("minmax", {
  validate(value, { min, max }: any) {
    console.log(value.length)
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

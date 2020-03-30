<template>
  <!DOCTYPE html>
  <html lang="pt-br">
    <head>
      <title>Cadastro</title>
      <meta charset="utf-8" />
    </head>

    <body class="back">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)" id="cadastro">
          <div
            class="container-cadastro column itens-vertical-center itens-space-between"
          >
            <img class="bibot-icon" src="../../assets/logo2.png" />
            <div class="entradas container">
              <div
                class="container-cadastro row itens-space-between itens-vertical-center"
              >
                <img src="../../assets/nome.png" class="icons" />
                <ValidationProvider
                  rules="required|minmax:3,30"
                  v-slot="{ errors }"
                >
                  <input
                    type="text"
                    name="nome"
                    placeholder="usuário / min:5 max: 30"
                    v-model="userCadastro.login"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="entradas container">
              <div
                class="container-cadastro row itens-space-between itens-vertical-center"
              >
                <img src="../../assets/senha.png" class="icons" />
                <ValidationProvider
                  rules="required|minmax:3,30"
                  v-slot="{ errors }"
                >
                  <input
                    type="password"
                    name="senha"
                    placeholder="senha / min: 5 max: 30"
                    minlength="5"
                    maxlength="20"
                    v-model="userCadastro.password"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="entradas container">
              <div
                class="container-cadastro row itens-space-between itens-vertical-center"
              >
                <img src="../../assets/senha.png" class="icons" />
                <ValidationProvider
                  :rules="`required|confirm-password:${userCadastro.password}`"
                  v-slot="{ errors }"
                >
                  <input
                    type="password"
                    name="confirmar-senha"
                    placeholder="confirme a senha"
                    v-model="passwordConfirm"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="entradas container">
              <div
                class="container-cadastro row itens-space-between itens-vertical-center"
              >
                <img src="../../assets/email.png" class="icons" />
                <ValidationProvider rules="required|email" v-slot="{ errors }">
                  <input
                    type="email"
                    name="email"
                    placeholder="endereço de email"
                    v-model="userCadastro.email"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="entradas container">
              <div
                class="container-cadastro row itens-space-between itens-vertical-center"
              >
                <img src="../../assets/email.png" class="icons" />
                <ValidationProvider
                  rules="required|steamID"
                  v-slot="{ errors }"
                >
                  <input
                    type="text"
                    name="SteamID"
                    placeholder="SteamID"
                    v-model="userCadastro.SteamID"
                  />
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div>
              <img src="../../assets/fundo2.png" class="ak-img" />
            </div>
            <button type="submit" class="container row itens-justify-center">
              <img src="../../assets/cadastrar.png" class="button-register" />
            </button>
            <div id="logo-bibot2">
              <img src="../../assets/logo3.png" />
            </div>
          </div>
        </form>
      </ValidationObserver>
    </body>
  </html>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ValidationProvider, ValidationObserver } from "vee-validate";

import { crudService } from "../../shared/services/crudService";
import UserCadastroDTO from "./user-cadastro-dto";
import "../../validators/form-validators";

@Component({
  components: { ValidationProvider, ValidationObserver }
})
export default class Cadastro extends Vue {
  userCadastro: UserCadastroDTO = new UserCadastroDTO("", "", "", "");
  passwordConfirm = "";
  async onSubmit() {
    const response = await crudService.create("user", this.userCadastro);
    console.log(response);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* PAG: conteúdo */

/* PAG: conteúdo */
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.bibot-icon {
  width: 100%;
}
.entradas {
  width: 50%;
  background-color: rgba(12, 12, 12, 0.8);
  border: 1px solid #16ccc7;
  border-radius: 5px;
}
/* css da cadastro */

#cadastro {
  width: 420px;
  height: 600px;
  max-width: 100%;
  max-height: 100%;
  border: 1px solid #16ccc7;
  border-radius: 10px;
  background-size: 100%;
  background-color: rgba(66, 66, 66, 0.8);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#cadastro input {
  padding: 5px;
  color: white;
  background: rgba(12, 12, 12, 0.5);
  border: none;
  border-radius: 5px;
}

#logo-bibot2 img {
  width: 200px;
  height: 90px;
}

/* flexbox  / cadastro css */

.container-cadastro {
  display: flex;
  height: 100%;
}

.row {
  flex-direction: row;
  width: 100%;
  display: flex;
}

.itens-space-between {
  justify-content: space-between;
}

.itens-justify-center {
  justify-content: center;
}

.column {
  flex-direction: column;
}

.itens-vertical-center {
  align-items: center;
}

.icons {
  width: 15px;
  height: 15px;
  margin-left: 10px;
}

.ak-img {
  width: 200px;
}

.button-register {
  height: 30px;
}

/* edição de link que acrescentei */

.button-register:hover {
  background: grey;
  border-radius: 8px;
}

.button-register:active {
  background: white;
  border-radius: 8px;
}

/* flexbox  / cadastro css */
.container-cadastro {
  display: flex;
  height: 100%;
}

.row {
  flex-direction: row;
  width: 100%;
  display: flex;
}

.itens-space-between {
  justify-content: space-between;
}

.itens-justify-center {
  justify-content: center;
}

.column {
  flex-direction: column;
}

.itens-vertical-center {
  align-items: center;
}

.icons {
  width: 15px;
  height: 15px;
  margin-left: 10px;
}

.ak-img {
  width: 200px;
}

.button-register {
  height: 30px;
}
</style>

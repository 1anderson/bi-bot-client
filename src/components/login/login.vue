<template>
  <!DOCTYPE html>
  <html lang="pt-br">
    <head>
      <title>Cadastro</title>
      <meta charset="utf-8" />
    </head>
    <body class="back">
      <ValidationObserver ref="observer">
        <form id="cadastro">
          <div
            class="container-cadastro d-flex flex-column align-items-center justify-content-between"
          >
            <img class="bibot-icon" src="../../assets/logo2.png" />
            <div
              class="justify-content-between d-flex flex-column container-form-input"
            >
              <div
                class="d-flex flex-row justify-content-around form-field-container"
              >
                <div class="d-flex flex-row justify-space-around entradas">
                  <div
                    class="d-flex flex-row align-items-center justify-content-center icons-container"
                  >
                    <img src="../../assets/nome.png" class="icons" />
                  </div>
                  <ValidationProvider rules="required|minmax:3,30">
                    <input
                      type="text"
                      name="nome"
                      placeholder="usuário / min:5 max: 30"
                      v-model="userLogin.user"
                    />
                  </ValidationProvider>
                </div>
              </div>
              <div
                class="d-flex flex-row justify-content-around form-field-container"
              >
                <div class="d-flex flex-row justify-space-around entradas">
                  <div
                    class="d-flex flex-row align-items-center justify-content-center icons-container"
                  >
                    <img src="../../assets/senha.png" class="icons" />
                  </div>
                  <ValidationProvider rules="required|minmax:3,30">
                    <input
                      type="password"
                      name="senha"
                      placeholder="senha / min: 5 max: 30"
                      minlength="5"
                      maxlength="20"
                      v-model="userLogin.password"
                    />
                  </ValidationProvider>
                </div>
              </div>
            </div>
            <div>
              <img src="../../assets/fundo2.png" class="ak-img" />
            </div>
            <div class="d-flex justify-content-center" v-on:click="submit">
              <img src="../../assets/login.png" class="button-register" />
            </div>
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
import ToastService from "../../shared/services/toastService";
import utilService from "../../shared/services/utilService";
import "../../validators/form-validators";
import loginDTO from "./login-dto";
import LoginDTO from "./login-dto";
@Component({
  components: { ValidationProvider, ValidationObserver }
})
export default class Login extends Vue {
  userLogin = new LoginDTO("", "");
  toastService = new ToastService();

  async submit() {
    try {
      await utilService.validateForm(this.$refs.observer, this.$createElement);
      const response = await crudService.post("user/login", this.userLogin);
    } catch (error) {
      this.toastService.showError(error, this.$bvToast, {
        title: "Validação dos Campos"
      });
    }
  }
}
</script>

<style scoped lang="css">
/* css do login */

#login {
  width: 420px;
  max-width: 100%;
  max-height: 100%;
  height: 570px;
  max-height: 100%;
  border: 1px solid #16ccc7;
  border-radius: 10px;
  background: url("../../assets/fundo2.png");
  background-size: 100%;
  background-color: rgba(66, 66, 66, 0.8);
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#login input {
  padding: 5px;
  color: white;
  background: rgba(12, 12, 12, 0.5);
  margin-left: 5px;
  border: none;
  border-radius: 5px;
}

#login a img {
  margin: auto;
  margin-top: 30px;
  width: 40%;
  height: 30px;
  background: black;
  border-radius: 8px;
  border: 1px solid black;
}

#login a img:hover {
  background: grey;
  border-radius: 8px;
}

#login a img:active {
  background: white;
  border-radius: 8px;
}

#logo-bibot img {
  margin-top: 160px;
  width: 200px;
  height: 90px;
}

.container-form-input {
  width: 100%;
  height: 100px;
}
/* igual */
.entradas {
  width: 50%;
  background-color: rgba(12, 12, 12, 0.8);
  border: 1px solid #16ccc7;
  border-radius: 5px;
}
.button-register {
  height: 30px;
}
#logo-bibot2 img {
  width: 200px;
  height: 90px;
}

.form-field-container {
  width: 100%;
}

.ak-img {
  width: 200px;
}
.icons {
  width: 15px;
  height: 15px;
}

.icons-container {
  width: 20%;
}

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

.container-cadastro {
  height: 100%;
}

.column {
  flex-direction: column;
}

.itens-vertical-center {
  align-items: center;
}

.bibot-icon {
  width: 100%;
}
</style>

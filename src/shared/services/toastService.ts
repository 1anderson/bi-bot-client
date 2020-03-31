import { BvToast } from "bootstrap-vue";

const optsDefault = {
  error: {
    variant: "danger",
    toaster: "b-toaster-top-right",
    bodyClass: "d-flex flex-column"
  }
};
export default class ToastService {
  showError = (message: any[] | string, toastInstance: BvToast, opts?: any) => {
    const config = Object.assign({}, optsDefault.error, opts);
    toastInstance.toast(message, {
      ...config
    });
  };
}

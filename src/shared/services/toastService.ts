import { BvToast } from "bootstrap-vue";

export default class ToastService {
  toastInstance: BvToast;
  constructor(toastInstance: BvToast) {
    this.toastInstance = toastInstance;
  }
  showError = (message: string) => {
    this.toastInstance.toast("error");
  };
}

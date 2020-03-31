import { BvToast } from "bootstrap-vue";

export default class ToastService {
  toastInstance: BvToast;
  constructor(toastInstance: BvToast) {
    this.toastInstance = toastInstance;
  }
  showError = (title: string, message: string, opts?: any) => {
    this.toastInstance.toast(message, {
      title: title,
      variant: "danger",
      ...opts
    });
  };
}

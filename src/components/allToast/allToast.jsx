/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";

export const success = (textToast) => toast.success(textToast);
export const problem = (textToast) => toast.error(textToast);
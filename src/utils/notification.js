import { toast } from 'react-toastify';
export const notify = (name) => toast.error(`Contact ${name} is already exist`, { autoClose: 1000 });
export const sucsessAdd = () => toast.info(`Contact add`, { autoClose: 1000 });
export const errorAdd = () => toast.error("Sorry your contact didn't save! Try again", { autoClose: 1000 });
export const sucsessDelete = () => toast.info(`Contact delete!`, { autoClose: 1000 });
export const errorDelete = () => toast.error("Sorry your contact didn't DELETE! Try again", { autoClose: 1000 });
export const sucsessEdit = () => toast.info(`Contact Edit SUCSESS!`, { autoClose: 1000 });
export const errorEdit =() => toast.error("Sorry! Try again", { autoClose: 1000 });
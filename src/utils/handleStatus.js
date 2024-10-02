import { toast } from 'react-toastify';

export const handleSuccess = (message) => {
    toast.success(message, {
        position: "bottom-center"
    });
}

export const handleError = (message) => {
    toast.error(message, {
        position: "bottom-center"
    });
}
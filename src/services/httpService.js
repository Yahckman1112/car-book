import axios from 'axios'
import Swal from "sweetalert2";

axios.interceptors.response.use(null, error=>{
    const expectederror = error.response && error.response.status>=400 && error.response.status<500

    if(!expectederror){
        Swal.fire({
            icon: "error",
            title: "Oops....",
            text:  "Unexpexted error occured",
            showCancelButton: true,
            showConfirmButton: false,
          });
    }

    return Promise.reject(error)
})

export default{
    get:axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete

}
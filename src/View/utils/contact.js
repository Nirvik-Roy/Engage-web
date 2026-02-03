import axios from "axios"
import toast from "react-hot-toast"
export const PostContact = async (data) =>{
    console.log(data)
    if (data) {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/contacts`, data);
                toast.success(res.data?.message || 'Form submited succesfully');
                return res.data
            
        } catch (err) {
            toast.error(err.response?.data?.message);
            return err.response.data
        }
    }
}
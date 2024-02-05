import { API } from "core/configs/api.config"
import axiosInstance from "core/configs/axios.config"

export const getPartnersService = () => {
    return axiosInstance(API.partners).then((res) => {
        return res.data.record
    })
}
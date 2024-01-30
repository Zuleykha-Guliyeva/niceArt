import { useQuery } from "react-query";
import { getPartnersService } from "./partners.service";

export const usePartners = () => {
    return useQuery('partners', () => {
        return getPartnersService();
    })
}
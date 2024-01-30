import { useQuery } from "react-query"
import { getVideosService } from "./video.service";

export const useVideos = () => {
    return useQuery('videos', () => {
        return getVideosService();
    })
}
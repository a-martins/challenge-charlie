import { useQuery } from "react-query";
import getPlaceName, { PlaceName } from "../../api/geocode";
import { Coordinates } from "../../pages/Home";

const useCurrentPlaceName = (coords: Coordinates | undefined) => {
  return useQuery<PlaceName>({
    queryKey: ["currentPlaceName", coords?.latitude, coords?.longitude],
    queryFn: getPlaceName,
    staleTime: 5 * 60 * 1000,
    enabled: !!coords?.latitude && !!coords?.longitude,
  });
};

export default useCurrentPlaceName;

import { useQuery } from "react-query";
import getBackground from "../../api/background";

const useBackground = () => {
  return useQuery(["background"], getBackground);
};

export default useBackground;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi} from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSetting(){
    const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate:updateSetting } = useMutation({
      mutationFn:updateSettingApi,
      onSuccess: () => {
        toast.success("Setting updated successfully");
        queryClient.invalidateQueries({
          queryKey: ["settings"],
        });
      },
      onError: (err) => toast.error(err.message),
    });
  return {isUpdating, updateSetting}
}


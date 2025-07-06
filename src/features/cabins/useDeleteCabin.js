import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin(){
     const queryClient = useQueryClient();
    
      const { isPending: isDeleting, mutate } = useMutation({
        mutationFn: (id) => deleteCabin(id),
        onSuccess: () => {
          toast.success("cabin deleted successfully");
          queryClient.invalidateQueries({
            queryKey: ["cabin"],
          });
        },
        onError: (err) => toast.error(err.message),
      });
      return{isDeleting, mutate}
}
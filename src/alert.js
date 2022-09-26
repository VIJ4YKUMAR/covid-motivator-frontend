import toast, { Toaster } from "react-hot-toast";


buildNotification = () => {
    const { myToasts } = useToaster();
   
    return (
      <div>
        {myToasts.map((toast) => (
          <div>{toast.message}</div>
        ))}
      </div>
    );
   };
   
   toast('Hey toast!');
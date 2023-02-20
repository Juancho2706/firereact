import {
  ToastContainer as Tostadacontainer,
  toast as Latostada,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Tostadito(message, type = "success") {
  if (type === "success") {
    return Latostada.success(message, { position: "bottom-right" });
  } else {
    return Latostada.error(message, { position: "bottom-right" });
  }
}

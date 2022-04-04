import { useContext } from "react";
import ProgressContext from "./ProgressContext";

export default function useProgress () {
    return useContext(ProgressContext);
}
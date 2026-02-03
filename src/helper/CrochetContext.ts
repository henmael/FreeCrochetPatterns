import { createContext } from "react";
import type { CrochetData } from "../helper/loadCrochetPatterns";

export const CrochetContext = createContext<CrochetData[] | []>([]);
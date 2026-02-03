import { useEffect, useState } from "react";

export interface CrochetData{
  id: number;
  pattern_name: string;
  image: string;
  description: string;
  skill_level: number;
  materials: string[];
  pattern: string[];
  note: string | undefined;
}

export function loadCrochetData(){
  const [data, setData] = useState<CrochetData[]>([]);

    useEffect(() => {
      fetch('/data.json').then(response => response.json()).then((result: CrochetData[]) => setData(result)).catch(err => console.log('error: ', err))
    }, []);

    return data;
}
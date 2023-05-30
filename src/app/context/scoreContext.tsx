'use client'
import { createContext, useState } from "react";

export interface ScoreContextType {
    baiScore: number | any,
    bdiScore: number | any,
    setBaiScore: (score: any) => void | any;
    setBdiScore: (score: any) => void | any;
}

export const ScoreContext = createContext<ScoreContextType | null>(null);

export default function ScoreContextProvider({ children }: any) {
    const [baiScore, setBaiScore] = useState(0);
    const [bdiScore, setBdiScore] = useState(0);
    const [bdiSummaryClicked, setBdiSummaryClicked] = useState(false);
    const [baiSummaryClicked, setBaiSummaryClicked] = useState(false);

    const baiScoreFn = (bai: any) => {
        setBaiScore(bai)
    }

    return <ScoreContext.Provider value={{ baiScore, setBaiScore, bdiScore, setBdiScore, }}>{children}</ScoreContext.Provider>
}
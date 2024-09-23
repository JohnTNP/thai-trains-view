import { ThemeProvider } from "@/components/theme-provider";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavBar } from "./components/nav-bar";
import { TrainsTable } from "./components/data-table/data-table-view";
import { Toaster } from "./components/ui/toaster";
import { Train, TrainData } from "./lib/types";
import { MapView } from "./components/map/map-view";
import { Loader } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const [page, setPage] = useState<"map" | "table">("table");
  const [trainList, setTrainList] = useState<Train[]>([]);

  const fetchTrainDataAndSetState = async () => {
    const { data } = await axios.post<TrainData>("/api/checktrain", null, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    setTrainList(data.data);
  };

  const updatePage = (page: "map" | "table") => {
    setPage(page);
  };

  useEffect(() => {
    const updateDataInterval = setInterval(() => {
      fetchTrainDataAndSetState();
    }, 5000);
    return () => clearInterval(updateDataInterval);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar updatePage={updatePage} />
      <main className="py-4 px-8">
        {page === "table" && trainList.length > 0 ? (
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <TrainsTable trainList={trainList} />
          </motion.div>
        ) : page === "map" ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <MapView />
          </motion.div>
        ) : null}
        {trainList.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-10 p-10">
            <Loader
              size={50}
              className="animate-spin ease-in-out duration-1000"
            />
          </div>
        ) : null}
      </main>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;

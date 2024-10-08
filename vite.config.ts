import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_API_KEY": JSON.stringify(env.REACT_APP_API_KEY),
      "process.env.REACT_APP_AUTH_ID": JSON.stringify(env.REACT_APP_AUTH_ID),
      "process.env.REACT_APP_PROJECT_ID": JSON.stringify(
        env.REACT_APP_PROJECT_ID
      ),
      "process.env.REACT_APP_STORAGE_BUCKET": JSON.stringify(
        env.REACT_APP_STORAGE_BUCKET
      ),
      "process.env.REACT_APP_MESSAGING_SENDER_ID": JSON.stringify(
        env.REACT_APP_MESSAGING_SENDER_ID
      ),
      "process.env.REACT_APP_APP_ID": JSON.stringify(env.REACT_APP_APP_ID),
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

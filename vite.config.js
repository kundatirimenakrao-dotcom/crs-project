import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(import.meta.dirname, "index.html"),
                fleet: resolve(import.meta.dirname, "fleet.html"),
                story: resolve(import.meta.dirname, "story.html"),
                booking: resolve(import.meta.dirname, "booking.html"),
                admin: resolve(import.meta.dirname, "admin.html")
            }
        }
    }
});

import { Application } from "./app";

const app = new Application();
const server = app.run();

process.on("SIGTERM", () => {
    console.log("SIGTERM received!");

    if (server)
        server.close();
})
import { EventEmitter } from "node:events";

const bus = new EventEmitter();

bus.on("user:created", (user) => {
    console.log("created:", user.id);
});

bus.emit("user:created", { id: 123, name: "Oleh" });

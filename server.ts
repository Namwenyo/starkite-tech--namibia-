import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  const PORT = 3000;

  // Socket.io logic
  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Join a default room for simple support chat
    socket.join("support-room");

    socket.on("message", (data) => {
      console.log("Message received:", data);
      // Broadcast message to everyone in the room (including sender)
      io.to("support-room").emit("message", {
        ...data,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString(),
      });

      // Simulate a support response if it's the user's first message
      if (data.role === "user") {
        setTimeout(() => {
          io.to("support-room").emit("message", {
            text: "Thank you for contacting StarKITE Support. A representative will be with you shortly.",
            role: "support",
            sender: "System",
            id: Math.random().toString(36).substr(2, 9),
            timestamp: new Date().toISOString(),
          });
        }, 1500);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

import { Server } from "socket.io";
import { Play_id_D } from "./controllers/Play_id_D/Play_id_D";

const io = new Server({
	cors: {
		origin: "*",
	},
});
io.listen(3001);

let clients = 0;
io.on("connection", (socket) => {
	console.log({ clients: ++clients });
	socket.on("disconnect", () => {
		console.log({ clients: --clients });
	});

	// initialize
	Play_id_D(io, socket);
});

console.log("Socket at 3001");

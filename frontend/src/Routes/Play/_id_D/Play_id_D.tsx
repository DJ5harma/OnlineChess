import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UseSocket } from "../../../Providers/SocketProvider";

export default function Play_id_D() {
	const { id: play_id } = useParams();
	const username = "User" + (Math.random() * 1000).toFixed().toString();
	const [peer, setPeer] = useState("");

	const socket = UseSocket();
	useEffect(() => {
		socket.send("I am here", { username, play_id });

		return () => {
			socket.removeAllListeners();
		};
	}, []);
	return (
		<div>
			<p>You : {username}</p>
			{peer && <p>{peer}</p>}
			Playid: {play_id}
		</div>
	);
}

import { Link } from "react-router-dom";

export default function Home() {
	const username = "User" + (Math.random() * 1000).toFixed().toString();
	const play_id = "1234";

	return (
		<div>
			<h1>Hi {username}!</h1>
			<Link to={`/Play/${play_id}`}>
				<button>Play!</button>
			</Link>
		</div>
	);
}

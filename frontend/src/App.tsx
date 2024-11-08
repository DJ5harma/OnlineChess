import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Play_id_D from "./Routes/Play/_id_D/Play_id_D";
import SocketProvider from "./Providers/SocketProvider";

function App() {
	return (
		<>
			<SocketProvider>
				<Routes>
					<Route index element={<Home />} />
					<Route path="play/:id" element={<Play_id_D />} />
				</Routes>
			</SocketProvider>
		</>
	);
}

export default App;

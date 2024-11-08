import { createContext, ReactNode, useContext, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

const context = createContext<React.MutableRefObject<Socket> | undefined>(
	undefined
);

export default function SocketProvider({ children }: { children: ReactNode }) {
	const socket = useRef(io("http://localhost:3001"));
	useEffect(() => {
		return () => {
			socket.current.disconnect();
		};
	}, []);
	if (socket.current)
		return <context.Provider value={socket}>{children}</context.Provider>;
}

export const UseSocket = () => useContext(context)?.current!;

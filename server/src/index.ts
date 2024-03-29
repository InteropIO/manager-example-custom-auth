import { start, Config } from "@interopio/manager";
import { Authenticator } from "./authenticator";
import { Groups } from "./groups";

const startServer = async () => {
    const config: Config = {
        name: "test-server",
        port: 4356,
        base: "api",
        store: {
            type: "mongo",
            connection: "mongodb://localhost:27017/server",
        },
        token: {
            secret: "mV|GuHok*+6N<C5~S|I0Wy^;Vg1!B~{KT4<U'@%6ZweX;]aw)|wkK5}QmodFl.s" // N.B. generate new random string
        },
        auth_exclusive_users: ["admin"],
        auth_method: "custom",
        auth_custom: new Authenticator(),
        groups_service: new Groups(),        
    };

    const server = await start(config);
}

startServer();

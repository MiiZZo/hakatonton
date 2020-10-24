import express from "express";
import cors from "cors";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import config from "config";
import { createConnection } from "typeorm";
import { router as authRouter } from "./auth/auth.controller";
import { router as vacanciesRouter } from "./vacancies/vacancy.controller";
import { router as resumesRouter } from "./resumes/resume.controller";

const bootstrap = async () => {
    const app = express();
    await createConnection();    

    app.use(cors({
        origin: config.get("ORIGIN"),
        credentials: true,
    }));
    app.use(express.json());

    const RedisStore = connectRedis(session);
    const redis = new Redis({
        host: config.get("REDIS_HOST") as string,
        password: config.get("REDIS_PASS") as string,
    });

    app.use(
        session({
            name: config.get("COOKIE_NAME"),
            store: new RedisStore({
                client: redis,
                disableTouch: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true,
                sameSite: "lax",
                secure: config.get("__prod__"),
            },
            saveUninitialized: false,
            secret: config.get("SESSION_SECRET"),
            resave: false,
        }),
    );

    app.use("/auth", authRouter);
    app.use("/vacancies", vacanciesRouter);
    app.use("/resumes", resumesRouter);

    app.listen(5000, () => {
        console.log(`SERVER STARTED http://localhost:5000`);
    });
}

bootstrap();

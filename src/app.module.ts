import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { PostModule } from "./post/post.module";
import { RecordModule } from "./record/record.module";
import { BillingModule } from "./billing/billing.module";
import { ClientModule } from "./client/client.module";
import { WitnessModule } from "./witness/witness.module";
import { AuditModule } from "./audit/audit.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
      entities: ["dist/**/*.entity{.ts,.js}"],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "uploads"),
      serveRoot: "/static",
    }),
    UserModule,
    AuthModule,
    PostModule,
    RecordModule,
    BillingModule,
    WitnessModule,
    ClientModule,
    AuditModule,
  ],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComponentModule } from "./components/component.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'src/environment/.env'
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: process.env.DB_SYNCHRONIZE === "true" ? true : false,
      logging: process.env.DB_LOGGING === "true" ? true : false,
      autoLoadEntities: true
    }),
    ComponentModule,
  ]
})
export class AppModule {}

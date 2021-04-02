import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  controllers: [CatsController],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*', method: RequestMethod.ALL
    });
  }
}


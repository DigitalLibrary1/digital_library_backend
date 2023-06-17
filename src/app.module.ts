import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import * as ormconfig from '../ormconfig';
// import { AdminModule } from '@adminjs/nestjs';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';

const DEFAULT_ADMIN = {
  email: 'penis',
  password: 'password',
}

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN)
  }
  return null
}
@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UsersModule,
    import('@adminjs/nestjs').then(({ AdminModule }) => AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [],
        },
        auth: {
          authenticate,
          cookieName: 'adminjs',
          cookiePassword: 'secret'
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: 'secret'
        },
      }),
    })),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

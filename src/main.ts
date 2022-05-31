declare const module: any;
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Belajar API basic')
  .setDescription('lorem ipsum ')
  .setVersion('1.0')
  .addTag('Basic')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api',app,document);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}
bootstrap();

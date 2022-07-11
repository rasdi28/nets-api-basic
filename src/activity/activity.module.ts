import { Module } from '@nestjs/common';
import { ActivityService } from './activity/activity.service';
import { ActivityController } from './activity/activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mactivity } from './activity.entity';
import { TactvityDetail } from './activitydetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mactivity,TactvityDetail])],
  providers: [ActivityService],
  controllers: [ActivityController]
})
export class ActivityModule {}

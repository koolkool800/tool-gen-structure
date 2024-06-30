import { BaseModel } from 'src/common/models';
import { HandoverByYourselfEntity } from '../../database/entities';

export class HandoverByYourselfModel extends BaseModel<HandoverByYourselfEntity> {
  constructor(handoverByYourselfEntity?: HandoverByYourselfEntity) {
    if (!handoverByYourselfEntity) {
      return;
    }
    super();
  }

  public static createInstance(
    handoverByYourselfEntity: HandoverByYourselfEntity
  ): HandoverByYourselfModel {
    return new HandoverByYourselfModel(handoverByYourselfEntity);
  }

  public toEntity(): HandoverByYourselfEntity {
    const handoverByYourselfEntity: HandoverByYourselfEntity = new HandoverByYourselfEntity();

    return handoverByYourselfEntity;
  }
}

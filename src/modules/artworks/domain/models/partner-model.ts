import { BaseModel } from 'src/common/models';
import { PartnerEntity } from '../../database/entities';

export class PartnerModel extends BaseModel<PartnerEntity> {
  constructor(partnerEntity?: PartnerEntity) {
    if (!partnerEntity) {
      return;
    }
    super();
  }

  public static createInstance(partnerEntity: PartnerEntity): PartnerModel {
    return new PartnerModel(partnerEntity);
  }

  public toEntity(): PartnerEntity {
    const partnerEntity: PartnerEntity = new PartnerEntity();

    return partnerEntity;
  }
}

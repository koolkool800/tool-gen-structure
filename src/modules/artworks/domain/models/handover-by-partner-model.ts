import { BaseModel } from 'src/common/models';
import { HandoverByDeliveryPartnerEntity } from '../../database/entities';

export class HandoverByDeliveryPartnerModel extends BaseModel<HandoverByDeliveryPartnerEntity> {
  constructor(handoverByDeliveryPartnerEntity?: HandoverByDeliveryPartnerEntity) {
    if (!handoverByDeliveryPartnerEntity) {
      return;
    }
    super();
  }

  public static createInstance(
    handoverByDeliveryPartnerEntity: HandoverByDeliveryPartnerEntity
  ): HandoverByDeliveryPartnerModel {
    return new HandoverByDeliveryPartnerModel(handoverByDeliveryPartnerEntity);
  }

  public toEntity(): HandoverByDeliveryPartnerEntity {
    const handoverByDeliveryPartnerEntity: HandoverByDeliveryPartnerEntity =
      new HandoverByDeliveryPartnerEntity();

    return handoverByDeliveryPartnerEntity;
  }
}

import { BaseModel } from 'src/common/models';
import { WarehouseEntity } from '../../database/entities';

export class WarehouseModel extends BaseModel<WarehouseEntity> {
  constructor(warehouseEntity?: WarehouseEntity) {
    if (!warehouseEntity) {
      return;
    }
    super();
  }

  public static createInstance(warehouseEntity: WarehouseEntity): WarehouseModel {
    return new WarehouseModel(warehouseEntity);
  }

  public toEntity(): WarehouseEntity {
    const warehouseEntity: WarehouseEntity = new WarehouseEntity();

    return warehouseEntity;
  }
}

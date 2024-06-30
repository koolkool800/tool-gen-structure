import { Injectable } from '@nestjs/common';
import { BOUGHT_PLACE, HANDOVER_METHOD, MATERIAL_KIND, PROOF_TYPE } from '../../enum';

interface IInput {
  userId: number;
  artistId: number;
  title: string;
  height: number;
  width: number;
  depth: number;
  materialKind: MATERIAL_KIND;
  materialDetail: string;
  productionYear: number;
  boughtPlace: BOUGHT_PLACE;
  proofType: PROOF_TYPE[];
  otherInfo?: string;

  //images
  targetSellPrice: number;
  minSellPrice: number;
  handoverMethod: HANDOVER_METHOD;

  // pick 1 in 3
  //handoverByYourself
  //handoverByDeliveryPartner
  //missin takeCareOwnWorkPreservation
}

@Injectable()
export class CreateArtworkUseCase {
  constructor() {}
  async execute() {}
}

import { equipmentWeight } from '@/data'
import { DataTypes } from '@/types'

export function calcBloodLoss(data: DataTypes): number {
    let bloodLoss = data.weight

    // Equipment
    bloodLoss -= data.compressBoard * equipmentWeight.compressBoard
    bloodLoss -= data.compressBlue * equipmentWeight.compressBlue
    bloodLoss -= data.compressOrange * equipmentWeight.compressOrange
    bloodLoss -= data.tupferBlue * equipmentWeight.tupferBlue
    bloodLoss -= data.tupferOrange * equipmentWeight.tupferOrange
    bloodLoss -= data.covers * equipmentWeight.cover

    // Liquids
    bloodLoss -= data.waterStart - data.waterEnd
    bloodLoss -= data.natcloStart - data.natcloEnd
    bloodLoss -= data.ringerAcetatStart - data.ringerAcetatEnd

    // Suction
    bloodLoss += data.suctionTotal - data.suctionAmniotic

    // Other
    bloodLoss -= data.absorbingMat * equipmentWeight.absorbingMat
    bloodLoss -= data.other

    return bloodLoss
}

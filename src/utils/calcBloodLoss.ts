import { equipmentWeight } from '@/data'
import { DataTypes } from '@/types'

export function calcBloodLoss(data: DataTypes): number {
    let bloodLoss = data.weight

    // Equipment
    bloodLoss -= data.compressBoard * equipmentWeight.compressBoard
    bloodLoss -= data.compressOne * equipmentWeight.compressOne
    bloodLoss -= data.compressTwo * equipmentWeight.compressTwo
    bloodLoss -= data.tupferOne * equipmentWeight.tupferOne
    bloodLoss -= data.tupferTwo * equipmentWeight.tupferTwo
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

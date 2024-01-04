'use client'
import ButtonPrimary from '@/components/Buttons/ButtonPrimary'
import ButtonTransparent from '@/components/Buttons/ButtonTransparent'
import DataEquipment from './Data/DataEquipment'
import DataLiquid from './Data/DataLiquid'
import DataSuction from './Data/DataSuction'
import DataOther from './Data/DataOther'
import DataEstimate from './Data/DataEstimate'
import DataWeight from './Data/DataWeight'

export default function DataForm() {
    return (
        <form>
            <div className="space-y-12">
                <DataEquipment />
                <DataLiquid />
                <DataSuction />
                <DataOther />
                <DataEstimate />
                <DataWeight />
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <ButtonTransparent type="button">Cancel</ButtonTransparent>
                <ButtonPrimary type="submit">Save</ButtonPrimary>
            </div>
        </form>
    )
}

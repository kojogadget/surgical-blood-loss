import FormSection from '@/components/Form/FormSection'
import Label from '@/components/Form/Label'
import Input from '@/components/Form/Input'
import { useDataContext } from '@/features/Data/context/DataContext'

export default function Suction() {
    const { updateData } = useDataContext()

    return (
        <FormSection
            title="Sug"
            description=""
            className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        >
            <div className="sm:col-span-3">
                <Label htmlFor="fostervann" label="Fostervann" />
                <Input
                    name="fostervann"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    placeholder="ml"
                    onChange={(e) =>
                        updateData('suctionAmniotic', Number(e.target.value))
                    }
                    type="number"
                />
            </div>
            <div className="sm:col-span-3">
                <Label htmlFor="total-sug" label="Total mengde sug" />
                <Input
                    name="total-sug"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    placeholder="ml"
                    onChange={(e) =>
                        updateData('suctionTotal', Number(e.target.value))
                    }
                    type="number"
                />
            </div>
        </FormSection>
    )
}

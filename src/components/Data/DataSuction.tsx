import FormSection from '@/components/Form/FormSection'
import Label from '@/components/Form/Label'
import Input from '@/components/Form/Input'
import DataType from '@/types/data'

export default function DataSuction({
    data,
    setData,
}: {
    data: DataType
    setData: (open: DataType) => void
}) {
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
                        setData({
                            ...data,
                            suctionAmniotic: Number(e.target.value),
                        })
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
                        setData({
                            ...data,
                            suctionTotal: Number(e.target.value),
                        })
                    }
                    type="number"
                />
            </div>
        </FormSection>
    )
}

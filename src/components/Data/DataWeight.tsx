import FormSection from '@/components/Form/FormSection'
import Input from '@/components/Form/Input'
import DataType from '@/types/data'

export default function DataWeight({
    data,
    setData,
}: {
    data: DataType
    setData: (open: DataType) => void
}) {
    return (
        <FormSection
            title="Vekt"
            description="Den totale vekten etter endt operasjon."
            className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        >
            <div className="sm:col-span-4">
                <Input
                    name="vekt"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    placeholder="gram (g)"
                    onChange={(e) =>
                        setData({ ...data, weight: Number(e.target.value) })
                    }
                    type="number"
                />
            </div>
        </FormSection>
    )
}

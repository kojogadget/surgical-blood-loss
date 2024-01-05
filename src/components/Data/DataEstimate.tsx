import FormSection from '@/components/Form/FormSection'
import Input from '@/components/Form/Input'
import DataType from '@/types/data'

export default function DataEstimate({
    data,
    setData,
}: {
    data: DataType
    setData: (open: DataType) => void
}) {
    return (
        <FormSection
            title="Visuelt estimat"
            description="Kirurgens visuelle estimat av mengden blod."
            className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        >
            <div className="sm:col-span-4">
                <Input
                    name="estimat"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    placeholder="ml"
                    onChange={(e) =>
                        setData({ ...data, estimate: Number(e.target.value) })
                    }
                    type="number"
                />
            </div>
        </FormSection>
    )
}

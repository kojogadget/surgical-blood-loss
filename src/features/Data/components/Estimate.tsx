import FormSection from '@/components/Form/FormSection'
import Input from '@/components/Form/Input'
import { useDataContext } from '@/features/Data/context/DataContext'

export default function Estimate() {
    const { data, setData } = useDataContext()

    const updateData = (key: string, value: number) => {
        setData({
            ...data,
            [key]: value,
        })
    }

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
                        updateData('estimate', Number(e.target.value))
                    }
                    type="number"
                />
            </div>
        </FormSection>
    )
}

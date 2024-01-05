import FormSection from '@/components/Form/FormSection'
import Input from '@/components/Form/Input'

export default function DataOther() {
    return (
        <FormSection
            title="Annet"
            description="Dersom blod er sølt skal dette tørkes opp og veies. Materialet som skal tørke blod skal veies før bruk og oppgis her. Vekt etter bruk oppgis sammen med total vekt."
            className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        >
            <div className="sm:col-span-4">
                <Input
                    name="other-dry"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    placeholder="gram (g)"
                    type="number"
                />
            </div>
        </FormSection>
    )
}

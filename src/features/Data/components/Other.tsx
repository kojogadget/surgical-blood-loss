import FormSection from '@/components/Form/FormSection'
import Fieldset from '@/components/Form/Fieldset'
import Input from '@/components/Form/Input'
import { useDataContext } from '@/features/Data/context/DataContext'
import CounterWrapper from '@/components/Form/CounterWrapper'
import Label from '@/components/Form/Label'
import Counter from '@/features/Data/components/Form/Counter'

export default function Other() {
    const { data, setData } = useDataContext()

    const updateData = (key: string, value: number) => {
        setData({
            ...data,
            [key]: value,
        })
    }

    return (
        <FormSection
            title="Annet"
            description="Dersom blod er sølt skal dette tørkes opp og veies. Materialet som skal tørke blod skal veies før bruk og oppgis her. Vekt etter bruk oppgis sammen med total vekt."
            className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        >
            <div className="sm:col-span-3">
                <Fieldset label="">
                    <CounterWrapper>
                        <Counter
                            keyValue="absorbingMat"
                            keyFlag="absorbingMatEnabled"
                            name="abdorberende-matte"
                            label="Absorberende matte (100lapp)"
                        />
                    </CounterWrapper>
                </Fieldset>
            </div>
            <div className="sm:col-span-4">
                <Label htmlFor="other-dry" label="Annet tørt materiale" />
                <Input
                    name="other-dry"
                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    placeholder="gram (g)"
                    onChange={(e) =>
                        updateData('other', Number(e.target.value))
                    }
                    type="number"
                />
            </div>
        </FormSection>
    )
}

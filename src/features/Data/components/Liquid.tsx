import FormSection from '@/components/Form/FormSection'
import Checkbox from '@/components/Form/Checkbox'
import Fieldset from '@/components/Form/Fieldset'
import Label from '@/components/Form/Label'
import Input from '@/components/Form/Input'
import { useDataContext } from '@/features/Data/context/DataContext'
import { useDataFlagContext } from '@/features/Data/context/DataFlagContext'

export default function Liquid() {
    const { data, setData } = useDataContext()
    const { dataFlag, setDataFlag } = useDataFlagContext()

    const updateData = (key: string, value: number) => {
        setData({
            ...data,
            [key]: value,
        })
    }

    const updateDataFlag = (key: string, value: boolean) => {
        setDataFlag({
            ...dataFlag,
            [key]: value,
        })
    }

    const handleWater = () => {
        updateDataFlag('waterEnabled', !dataFlag.waterEnabled)
    }
    const handleNatrium = () => {
        updateDataFlag('natcloEnabled', !dataFlag.natcloEnabled)
    }
    const handleRingerAcetat = () => {
        updateDataFlag('ringerAcetatEnabled', !dataFlag.ringerAcetatEnabled)
    }

    return (
        <FormSection
            title="Væske"
            description="Væske brukt under operasjonen. Oppgis i vekt av væske før og etter operasjonen."
            className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        >
            <div className="col-span-full -mt-8">
                <Fieldset label="">
                    <Checkbox
                        name="vann"
                        checked={dataFlag.waterEnabled}
                        onChange={handleWater}
                        label="Vann"
                    />
                    {dataFlag.waterEnabled && (
                        <div className="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <Label htmlFor="vann-start" label="Start" />
                                <Input
                                    name="vann-start"
                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    placeholder="gram (g)"
                                    onChange={(e) =>
                                        updateData(
                                            'waterStart',
                                            Number(e.target.value)
                                        )
                                    }
                                    type="number"
                                />
                            </div>
                            <div className="sm:col-span-3">
                                <Label htmlFor="vann-end" label="Slutt" />
                                <Input
                                    name="vann-end"
                                    placeholder="gram (g)"
                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    onChange={(e) =>
                                        updateData(
                                            'waterEnd',
                                            Number(e.target.value)
                                        )
                                    }
                                    type="number"
                                />
                            </div>
                        </div>
                    )}
                    <Checkbox
                        name="natriumclorid"
                        checked={dataFlag.natcloEnabled}
                        onChange={handleNatrium}
                        label="Natriumclorid"
                    />
                    {dataFlag.natcloEnabled && (
                        <div className="my-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <Label htmlFor="natclo-start" label="Start" />
                                <Input
                                    name="vann-start"
                                    placeholder="gram (g)"
                                    type="number"
                                    onChange={(e) =>
                                        updateData(
                                            'natcloStart',
                                            Number(e.target.value)
                                        )
                                    }
                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                />
                            </div>
                            <div className="sm:col-span-3">
                                <Label htmlFor="vann-end" label="Slutt" />
                                <Input
                                    name="natclo-end"
                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    placeholder="gram (g)"
                                    onChange={(e) =>
                                        updateData(
                                            'natcloEnd',
                                            Number(e.target.value)
                                        )
                                    }
                                    type="number"
                                />
                            </div>
                        </div>
                    )}
                    <Checkbox
                        name="ringer-acetat"
                        checked={dataFlag.ringerAcetatEnabled}
                        onChange={handleRingerAcetat}
                        label="Ringer-Acetat"
                    />
                    {dataFlag.ringerAcetatEnabled && (
                        <div className="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <Label
                                    htmlFor="ringer-acetat-start"
                                    label="Start"
                                />
                                <Input
                                    name="ringer-acetat-start"
                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    placeholder="gram (g)"
                                    onChange={(e) =>
                                        updateData(
                                            'ringerAcetatStart',
                                            Number(e.target.value)
                                        )
                                    }
                                    type="number"
                                />
                            </div>
                            <div className="sm:col-span-3">
                                <Label
                                    htmlFor="ringer-acetat-end"
                                    label="Slutt"
                                />
                                <Input
                                    name="ringer-acetat-end"
                                    placeholder="gram (g)"
                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    onChange={(e) =>
                                        updateData(
                                            'ringerAcetatEnd',
                                            Number(e.target.value)
                                        )
                                    }
                                    type="number"
                                />
                            </div>
                        </div>
                    )}
                </Fieldset>
            </div>
        </FormSection>
    )
}

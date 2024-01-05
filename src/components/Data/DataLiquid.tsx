import FormSection from '@/components/Form/FormSection'
import Checkbox from '@/components/Form/Checkbox'
import Fieldset from '@/components/Form/Fieldset'
import Label from '@/components/Form/Label'
import Input from '@/components/Form/Input'
import DataType from '@/types/data'

export default function DataLiquid({
    data,
    setData,
}: {
    data: DataType
    setData: (open: DataType) => void
}) {
    const handleWater = () => {
        setData({ ...data, waterEnabled: !data.waterEnabled })
    }
    const handleNatrium = () => {
        setData({ ...data, natcloEnabled: !data.natcloEnabled })
    }

    return (
        <FormSection
            title="Væske"
            description="Væske brukt under operasjonen. Oppgis i vekt av væske før og etter operasjonen."
            className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        >
            <div className="col-span-full -mt-8">
                <Fieldset label="">
                    <Checkbox name="vann" onClick={handleWater} label="Vann" />
                    {data.waterEnabled && (
                        <div className="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <Label htmlFor="vann-start" label="Start" />
                                <Input
                                    name="vann-start"
                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    placeholder="gram (g)"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            waterStart: Number(e.target.value),
                                        })
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
                                        setData({
                                            ...data,
                                            waterEnd: Number(e.target.value),
                                        })
                                    }
                                    type="number"
                                />
                            </div>
                        </div>
                    )}
                    <Checkbox
                        name="natriumclorid"
                        onClick={handleNatrium}
                        label="Natriumclorid"
                    />
                    {data.natcloEnabled && (
                        <div className="my-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <Label htmlFor="vann-start" label="Start" />
                                <Input
                                    name="vann-start"
                                    placeholder="gram (g)"
                                    type="number"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            natcloStart: Number(e.target.value),
                                        })
                                    }
                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                />
                            </div>
                            <div className="sm:col-span-3">
                                <Label htmlFor="vann-end" label="Slutt" />
                                <Input
                                    name="vann-end"
                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    placeholder="gram (g)"
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            natcloEnd: Number(e.target.value),
                                        })
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

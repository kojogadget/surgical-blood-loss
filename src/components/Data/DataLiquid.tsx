'use client'
import { useState } from 'react'
import FormSection from '@/components/Form/FormSection'
import Checkbox from '@/components/Form/Checkbox'
import Fieldset from '@/components/Form/Fieldset'
import Label from '@/components/Form/Label'
import Input from '@/components/Form/Input'

export default function DataLiquid() {
    const [showWater, setShowWater] = useState(false)
    const [showNatrium, setShowNatrium] = useState(false)

    const handleWater = () => {
        setShowWater(!showWater)
    }
    const handleNatrium = () => {
        setShowNatrium(!showNatrium)
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
                    {showWater && (
                        <div className="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <Label htmlFor="vann-start" label="Start" />
                                <Input
                                    name="vann-start"
                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    placeholder="gram (g)"
                                    type="number"
                                />
                            </div>
                            <div className="sm:col-span-3">
                                <Label htmlFor="vann-end" label="End" />
                                <Input
                                    name="vann-end"
                                    placeholder="gram (g)"
                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
                    {showNatrium && (
                        <div className="my-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <Label htmlFor="vann-start" label="Start" />
                                <Input
                                    name="vann-start"
                                    placeholder="gram (g)"
                                    type="number"
                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                />
                            </div>
                            <div className="sm:col-span-3">
                                <Label htmlFor="vann-end" label="End" />
                                <Input
                                    name="vann-end"
                                    className="[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    placeholder="gram (g)"
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

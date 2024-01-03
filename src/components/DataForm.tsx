'use client'
import ButtonPrimary from '@/components/Buttons/ButtonPrimary'
import Label from '@/components/Form/Label'
import Input from '@/components/Form/Input'
import TextArea from '@/components/Form/TextArea'
import ButtonTransparent from '@/components/Buttons/ButtonTransparent'
import ButtonSeconodary from '@/components/Buttons/ButtonSecondary'
import Select from '@/components/Form/Select'
import Checkbox from '@/components/Form/Checkbox'
import Fieldset from '@/components/Form/Fieldset'
import FormSection from '@/components/Form/FormSection'

export default function DataForm() {
    return (
        <form>
            <div className="space-y-12">
                <FormSection
                    title="Ny Pasient"
                    description=""
                    className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                >
                    <div className="col-span-full">
                        <Fieldset label="Utstyr">
                            <div className="mb-8">
                                <Checkbox
                                    name="kompress-brett"
                                    label="Kompress Brett"
                                />
                            </div>
                            <div className="mb-8">
                                <Checkbox
                                    name="kompress-blue"
                                    label="Kompress (Blå)"
                                />
                                <Checkbox
                                    name="kompress-orange"
                                    label="Kompress (Orange)"
                                />
                            </div>
                            <div className="mb-8">
                                <Checkbox
                                    name="tupfer-blue"
                                    label="Tupfer (Blå)"
                                />
                                <Checkbox
                                    name="tupfer-orange"
                                    label="Tupfer (Orange)"
                                />
                            </div>
                            <div className="mb-8">
                                <Checkbox name="duk" label="Duk" />
                            </div>
                        </Fieldset>
                    </div>
                    <div className="col-span-full">
                        <Fieldset label="Veske">
                            <div className="mb-8">
                                <Checkbox name="vann" label="Vann" />
                                <div className="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="col-span-3">
                                        <Label
                                            htmlFor="vann-start"
                                            label="Start"
                                        />
                                        <Input
                                            name="vann-start"
                                            placeholder="gram (g)"
                                            type="number"
                                        />
                                    </div>
                                    <div className="col-span-3">
                                        <Label htmlFor="vann-end" label="End" />
                                        <Input
                                            name="vann-end"
                                            placeholder="gram (g)"
                                            type="number"
                                        />
                                    </div>
                                </div>
                                <Checkbox
                                    name="natriumclorid"
                                    label="Natriumclorid"
                                />
                                <div className="my-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="col-span-3">
                                        <Label
                                            htmlFor="vann-start"
                                            label="Start"
                                        />
                                        <Input
                                            name="vann-start"
                                            placeholder="gram (g)"
                                            type="number"
                                        />
                                    </div>
                                    <div className="col-span-3">
                                        <Label htmlFor="vann-end" label="End" />
                                        <Input
                                            name="vann-end"
                                            placeholder="gram (g)"
                                            type="number"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Fieldset>
                    </div>
                </FormSection>
                <FormSection
                    title="Sug"
                    description=""
                    className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                >
                    <div className="sm:col-span-3">
                        <Label htmlFor="fostervann" label="Fostervann" />
                        <Input
                            name="fostervann"
                            placeholder="ml"
                            type="number"
                        />
                    </div>
                    <div className="sm:col-span-3">
                        <Label htmlFor="total-sug" label="Totalt sug" />
                        <Input
                            name="total-sug"
                            placeholder="ml"
                            type="number"
                        />
                    </div>
                </FormSection>
                <FormSection
                    title="Annet"
                    description="Annet materiale som kan absorberes"
                    className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                >
                    <div className="sm:col-span-4">
                        <Input
                            name="annet"
                            placeholder="gram (g)"
                            type="number"
                        />
                    </div>
                </FormSection>
                <FormSection
                    title="Visuelt estimat"
                    description="Kirurgens visuelle estimat av mengden blod"
                    className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                >
                    <div className="sm:col-span-4">
                        <Input name="estimat" placeholder="ml" type="number" />
                    </div>
                </FormSection>
                <FormSection
                    title="Vekt"
                    description="Den totale vekten etter endt operasjon"
                    className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                >
                    <div className="sm:col-span-4">
                        <Input
                            name="vekt"
                            placeholder="gram (g)"
                            type="number"
                        />
                    </div>
                </FormSection>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <ButtonTransparent type="button">Cancel</ButtonTransparent>
                <ButtonPrimary type="submit">Save</ButtonPrimary>
            </div>
        </form>
    )
}

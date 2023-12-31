import FormSection from '@/components/Form/FormSection'
import Fieldset from '@/components/Form/Fieldset'
import Counter from '@/features/Data/components/Form/Counter'
import CounterWrapper from '@/components/Form/CounterWrapper'

export default function Equipment() {
    return (
        <FormSection
            title="Utstyr"
            description="Utstyr i feltet. Kompresser og tupfere oppgis i antall pakker."
            className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        >
            <div className="sm:col-span-3">
                <div className="mb-8">
                    <Fieldset label="Kompress">
                        <CounterWrapper>
                            <Counter
                                keyValue="compressBoard"
                                keyFlag="compressBoardEnabled"
                                name="compress-board"
                                label="Kompressbrett"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Counter
                                keyValue="compressBlue"
                                keyFlag="compressBlueEnabled"
                                name="compress-blue"
                                label="Kompress (Blå)"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Counter
                                keyValue="compressOrange"
                                keyFlag="compressOrangeEnabled"
                                name="compress-orange"
                                label="Kompress (Oransje)"
                            />
                        </CounterWrapper>
                    </Fieldset>
                </div>
            </div>
            <div className="sm:col-span-3">
                <div className="mb-8">
                    <Fieldset label="Tupfer">
                        <CounterWrapper>
                            <Counter
                                keyValue="tupferBlue"
                                keyFlag="tupferBlueEnabled"
                                name="tupfer-blue"
                                label="Tupfer (Blå)"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Counter
                                keyValue="tupferOrange"
                                keyFlag="tupferOrangeEnabled"
                                name="tupfer-orange"
                                label="Tupfer (Oransje)"
                            />
                        </CounterWrapper>
                    </Fieldset>
                </div>
            </div>
            <div className="sm:col-span-3">
                <Fieldset label="Annet">
                    <CounterWrapper>
                        <Counter
                            keyValue="covers"
                            keyFlag="coversEnabled"
                            name="covers"
                            label="Duk"
                        />
                    </CounterWrapper>
                </Fieldset>
            </div>
        </FormSection>
    )
}

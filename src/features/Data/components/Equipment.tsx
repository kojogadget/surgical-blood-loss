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
                                keyValue="compressOne"
                                keyFlag="compressOneEnabled"
                                name="compress-one"
                                label="Kompress 5x11g (Brun)"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Counter
                                keyValue="compressTwo"
                                keyFlag="compressTwoEnabled"
                                name="compress-two"
                                label="Kompress 5x13g (Brun)"
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
                                keyValue="tupferOne"
                                keyFlag="tupferOneEnabled"
                                name="tupfer-one"
                                label="Tupfer 5x1g (Blå)"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Counter
                                keyValue="tupferTwo"
                                keyFlag="tupferTwoEnabled"
                                name="tupfer-two"
                                label="Tupfer 5x0.3g (Oransje)"
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
                            label="Duk 29g (Svart)"
                        />
                    </CounterWrapper>
                </Fieldset>
            </div>
        </FormSection>
    )
}

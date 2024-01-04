import FormSection from '@/components/Form/FormSection'
import Fieldset from '@/components/Form/Fieldset'
import Checkbox from '@/components/Form/Checkbox'
import Counter from '../Form/Counter'
import CounterWrapper from '../Form/CounterWrapper'

export default function DataEquipment() {
    return (
        <FormSection
            title="Utstyr"
            description="Antall av brukt utstyr. Legg inn i antall pakker."
            className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        >
            <div className="sm:col-span-3">
                <div className="mb-8">
                    <Fieldset label="Kompress">
                        <CounterWrapper>
                            <Checkbox
                                name="kompress-brett"
                                label="Kompressbrett"
                            />
                            <Counter
                                initialCount={0}
                                name="kompress-brett-counter"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Checkbox
                                name="kompress-blue"
                                label="Kompress (Blå)"
                            />
                            <Counter
                                initialCount={0}
                                name="kompress-blue-counter"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Checkbox
                                name="kompress-orange"
                                label="Kompress (Orange)"
                            />
                            <Counter
                                initialCount={0}
                                name="kompress-orange-counter"
                            />
                        </CounterWrapper>
                    </Fieldset>
                </div>
            </div>
            <div className="sm:col-span-3">
                <div className="mb-8">
                    <Fieldset label="Tupfer">
                        <CounterWrapper>
                            <Checkbox name="tupfer-blue" label="Tupfer (Blå)" />
                            <Counter
                                initialCount={0}
                                name="tupfer-blue-counter"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Checkbox
                                name="tupfer-orange"
                                label="Tupfer (Orange)"
                            />
                            <Counter
                                initialCount={0}
                                name="tupfer-orange-counter"
                            />
                        </CounterWrapper>
                    </Fieldset>
                </div>
            </div>
            <div className="sm:col-span-3">
                <Fieldset label="Annet">
                    <CounterWrapper>
                        <Checkbox name="duk" label="Duk" />
                        <Counter initialCount={0} name="duk-counter" />
                    </CounterWrapper>
                </Fieldset>
            </div>
        </FormSection>
    )
}

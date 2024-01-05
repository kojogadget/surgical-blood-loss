import FormSection from '@/components/Form/FormSection'
import Fieldset from '@/components/Form/Fieldset'
import Checkbox from '@/components/Form/Checkbox'
import Counter from '../Form/Counter'
import CounterWrapper from '../Form/CounterWrapper'
import DataType from '@/types/data'

export default function DataEquipment({
    data,
    setData,
}: {
    data: DataType
    setData: (open: DataType) => void
}) {
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
                            <Checkbox
                                name="kompress-brett"
                                label="Kompressbrett"
                                checked={data.compressBoardEnabled}
                                onClick={() =>
                                    setData({
                                        ...data,
                                        compressBoardEnabled:
                                            !data.compressBoardEnabled,
                                    })
                                }
                            />
                            <Counter
                                data={data}
                                setData={setData}
                                initialCount={0}
                                name="kompress-brett-counter"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Checkbox
                                name="kompress-blue"
                                label="Kompress (Blå)"
                                checked={data.compressBlueEnabled}
                                onClick={() =>
                                    setData({
                                        ...data,
                                        compressBlueEnabled:
                                            !data.compressBlueEnabled,
                                    })
                                }
                            />
                            <Counter
                                data={data}
                                setData={setData}
                                initialCount={0}
                                name="kompress-blue-counter"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Checkbox
                                name="kompress-orange"
                                label="Kompress (Orange)"
                                checked={data.compressOrangeEnabled}
                                onClick={() =>
                                    setData({
                                        ...data,
                                        compressOrangeEnabled:
                                            !data.compressOrangeEnabled,
                                    })
                                }
                            />
                            <Counter
                                data={data}
                                setData={setData}
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
                            <Checkbox
                                name="tupfer-blue"
                                label="Tupfer (Blå)"
                                checked={data.tupferBlueEnabled}
                                onClick={() =>
                                    setData({
                                        ...data,
                                        tupferBlueEnabled:
                                            !data.tupferBlueEnabled,
                                    })
                                }
                            />
                            <Counter
                                data={data}
                                setData={setData}
                                initialCount={0}
                                name="tupfer-blue-counter"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Checkbox
                                name="tupfer-orange"
                                label="Tupfer (Orange)"
                                checked={data.tupferOrangeEnabled}
                                onClick={() =>
                                    setData({
                                        ...data,
                                        tupferOrangeEnabled:
                                            !data.tupferOrangeEnabled,
                                    })
                                }
                            />
                            <Counter
                                data={data}
                                setData={setData}
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
                        <Checkbox
                            name="duk"
                            label="Duk"
                            checked={data.coversEnabled}
                            onClick={() =>
                                setData({
                                    ...data,
                                    coversEnabled: !data.coversEnabled,
                                })
                            }
                        />
                        <Counter
                            data={data}
                            setData={setData}
                            initialCount={0}
                            name="duk-counter"
                        />
                    </CounterWrapper>
                </Fieldset>
            </div>
        </FormSection>
    )
}

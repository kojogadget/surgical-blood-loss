import FormSection from '@/components/Form/FormSection'
import Fieldset from '@/components/Form/Fieldset'
import Checkbox from '@/components/Form/Checkbox'
import Counter from '@/components/Form/Counter'
import CounterWrapper from '@/components/Form/CounterWrapper'
import { useDataContext } from '@/features/Data/context/DataContext'
import { useDataFlagContext } from '@/features/Data/context/DataFlagContext'

export default function Equipment() {
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
                                checked={dataFlag.compressBoardEnabled}
                                onChange={() =>
                                    updateDataFlag(
                                        'compressBoardEnabled',
                                        !dataFlag.compressBoardEnabled
                                    )
                                }
                            />
                            <Counter
                                data={data}
                                updateData={updateData}
                                keyValue="compressBoard"
                                initialCount={0}
                                name="kompress-brett-counter"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Checkbox
                                name="kompress-blue"
                                label="Kompress (Blå)"
                                checked={dataFlag.compressBlueEnabled}
                                onChange={() =>
                                    updateDataFlag(
                                        'compressBlueEnabled',
                                        !dataFlag.compressBlueEnabled
                                    )
                                }
                            />
                            <Counter
                                data={data}
                                updateData={updateData}
                                keyValue="compressBlue"
                                initialCount={0}
                                name="kompress-blue-counter"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Checkbox
                                name="kompress-orange"
                                label="Kompress (Orange)"
                                checked={dataFlag.compressOrangeEnabled}
                                onChange={() =>
                                    updateDataFlag(
                                        'compressOrangeEnabled',
                                        !dataFlag.compressOrangeEnabled
                                    )
                                }
                            />
                            <Counter
                                data={data}
                                updateData={updateData}
                                keyValue="compressOrange"
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
                                checked={dataFlag.tupferBlueEnabled}
                                onChange={() =>
                                    updateDataFlag(
                                        'tupferBlueEnabled',
                                        !dataFlag.tupferBlueEnabled
                                    )
                                }
                            />
                            <Counter
                                data={data}
                                updateData={updateData}
                                keyValue="tupferBlue"
                                initialCount={0}
                                name="tupfer-blue-counter"
                            />
                        </CounterWrapper>
                        <CounterWrapper>
                            <Checkbox
                                name="tupfer-orange"
                                label="Tupfer (Orange)"
                                checked={dataFlag.tupferOrangeEnabled}
                                onChange={() =>
                                    updateDataFlag(
                                        'tupferOrangeEnabled',
                                        !dataFlag.tupferOrangeEnabled
                                    )
                                }
                            />
                            <Counter
                                data={data}
                                updateData={updateData}
                                keyValue="tupferOrange"
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
                            checked={dataFlag.coversEnabled}
                            onChange={() =>
                                updateDataFlag(
                                    'coversEnabled',
                                    !dataFlag.coversEnabled
                                )
                            }
                        />
                        <Counter
                            data={data}
                            updateData={updateData}
                            keyValue="covers"
                            initialCount={0}
                            name="duk-counter"
                        />
                    </CounterWrapper>
                </Fieldset>
            </div>
        </FormSection>
    )
}

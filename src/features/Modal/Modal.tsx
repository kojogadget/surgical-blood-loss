import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Content from '@/features/Modal/components/Content'

export default function Modal({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean
    setIsOpen: (open: boolean) => void
}) {
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setIsOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6">
                                <Content
                                    cancelButtonRef={cancelButtonRef}
                                    setIsOpen={setIsOpen}
                                />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

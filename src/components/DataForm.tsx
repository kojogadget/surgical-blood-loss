'use client'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import ButtonPrimary from '@/components/Buttons/ButtonPrimary'
import Label from '@/components/Form/Label'
import Input from '@/components/Form/Input'
import TextArea from '@/components/Form/TextArea'
import ButtonTransparent from '@/components/Buttons/ButtonTransparent'
import ButtonSeconodary from '@/components/Buttons/ButtonSecondary'
import Select from '@/components/Form/Select'
import Checkbox from '@/components/Form/Checkbox'
import Fieldset from '@/components/Form/Fieldset'
import Radio from '@/components/Form/Radio'
import FormSection from '@/components/Form/FormSection'

export default function DataForm() {
    return (
        <form>
            <div className="space-y-12">
                <FormSection
                    title="Profile"
                    description="This information will be displayed publicly so be careful what you share."
                    className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                >
                    <div className="sm:col-span-4">
                        <Label htmlFor="name" label="Username" />
                        <Input
                            name="name"
                            type="text"
                            autoComplete="username"
                            placeholder="janesmith"
                            span="workcation.com/"
                        />
                    </div>

                    <div className="col-span-full">
                        <Label htmlFor="about" label="About" />
                        <TextArea name="about" rows={3} defaultValue={''} />
                        <p className="mt-3 text-sm leading-6 text-gray-400">
                            Write a few sentences about yourself.
                        </p>
                    </div>

                    <div className="col-span-full">
                        <Label htmlFor="photo" label="Photo" />
                        <div className="mt-2 flex items-center gap-x-3">
                            <UserCircleIcon
                                className="h-12 w-12 text-gray-500"
                                aria-hidden="true"
                            />
                            <ButtonSeconodary type="button">
                                Change
                            </ButtonSeconodary>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <Label htmlFor="cover-photo" label="Cover" />
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                            <div className="text-center">
                                <PhotoIcon
                                    className="mx-auto h-12 w-12 text-gray-500"
                                    aria-hidden="true"
                                />
                                <div className="mt-4 flex text-sm leading-6 text-gray-400">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            className="sr-only"
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-400">
                                    PNG, JPG, GIF up to 10MB
                                </p>
                            </div>
                        </div>
                    </div>
                </FormSection>

                <FormSection
                    title="Personal Information"
                    description="Use a permanent address where you can receive mail."
                    className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                >
                    <div className="sm:col-span-3">
                        <Label htmlFor="first-name" label="First name" />
                        <Input
                            name="first-name"
                            type="text"
                            autoComplete="given-name"
                        />
                    </div>

                    <div className="sm:col-span-3">
                        <Label htmlFor="last-name" label="Last name" />
                        <Input
                            name="last-name"
                            type="text"
                            autoComplete="family-name"
                        />
                    </div>

                    <div className="sm:col-span-4">
                        <Label htmlFor="email" label="Email address" />
                        <Input name="email" type="email" autoComplete="email" />
                    </div>

                    <div className="sm:col-span-3">
                        <Label htmlFor="country" label="Country" />
                        <Select
                            name="country"
                            options={['United States', 'Canada', 'Mexico']}
                            autoComplete="country-name"
                        />
                    </div>

                    <div className="col-span-full">
                        <Label
                            htmlFor="street-address"
                            label="Street address"
                        />
                        <Input
                            name="street-address"
                            type="text"
                            autoComplete="street-address"
                        />
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                        <Label htmlFor="city" label="City" />
                        <Input
                            name="city"
                            type="text"
                            autoComplete="address-level2"
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <Label htmlFor="region" label="State / Province" />
                        <Input
                            name="region"
                            type="text"
                            autoComplete="address-level1"
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <Label htmlFor="postal-code" label="ZIP / Postal" />
                        <Input
                            name="postal-code"
                            type="text"
                            autoComplete="postal-code"
                        />
                    </div>
                </FormSection>

                <FormSection
                    title="Notifications"
                    description="We'll always let you know about important changes, but you pick what else you want to hear about."
                    className="space-y-10"
                >
                    <Fieldset label="By Email">
                        <Checkbox
                            name="comments"
                            label="Comments"
                            description="Get notified when someones postsa comment on a posting."
                        />
                        <Checkbox
                            name="candidates"
                            label="Candidates"
                            description="Get notified when a candidate applies for a job."
                        />
                        <Checkbox
                            name="offers"
                            label="Offers"
                            description="Get notified when a candidate accepts or rejects an offer."
                        />
                    </Fieldset>
                    <Fieldset
                        label="Push Notifications"
                        desciption="These are delivered via SMS to your mobile phone."
                    >
                        <Radio name="push-notifications" label="Everything" />
                        <Radio name="push-email" label="Same as email" />
                        <Radio
                            name="push-nothing"
                            label="No push notifications"
                        />
                    </Fieldset>
                </FormSection>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <ButtonTransparent type="button">Cancel</ButtonTransparent>
                <ButtonPrimary type="submit">Save</ButtonPrimary>
            </div>
        </form>
    )
}

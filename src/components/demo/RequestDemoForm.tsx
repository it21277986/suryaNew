'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { sendContactFormDemo } from "@/lib/api";
import ApiCompanyRequest from "@/services/api/api-company-request";
import { formprop } from '@/components/demo/DemoForm';

interface RequestDemoFormProps {
    datapickerVisible: boolean;
    setDatPickerVisible: (value: boolean | ((prevState: boolean) => boolean)) => void;
    formValues: formprop
}
const RequestDemoForm = ({ datapickerVisible, setDatPickerVisible, formValues }: RequestDemoFormProps) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        country: '',
        numberOfLearners: '',
        haveAnLMS: '',
        requestComment: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        try {

            const data = {
                ...formValues,
                isEnterprise: false,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                companyName: formData.companyName,
                phoneNumber: formData.phoneNumber,
                country: formData.country,
                numberOfLearners: formData.numberOfLearners,
                haveAnLMS: formData.haveAnLMS,
                requirementMsg: formData.requestComment,
            }

            // Save the form data to the database
            ApiCompanyRequest.createCompanyRequest(data)
                .then(() => {
                    // Add the subject when sending the contact form
                    const formDataWithSubject = {
                        ...formData, // Spread the existing formData
                        subject: 'Requesting for SURYA LMS Demo'
                    };

                    sendContactFormDemo(formDataWithSubject)
                        .then(() => {
                            setLoading(false);
                            toast.success(`Hey ${formData.firstName}, Your request has been submitted successfully!`);
                            setFormData({
                                firstName: '',
                                lastName: '',
                                email: '',
                                companyName: '',
                                phoneNumber: '',
                                country: '',
                                numberOfLearners: '',
                                haveAnLMS: '',
                                requestComment: '',
                            });
                        })
                        .catch(() => {
                            toast.error('Failed to submit request!');
                            setLoading(false);
                        });
                })
                .catch(() => {
                    toast.error('Failed to submit request!');
                    setLoading(false);
                });

        } catch (error) {
            console.error(error);
            toast.error('Failed to submit request!');
            setLoading(false);
        }

    };

    return (
        <div className="flex flex-col justify-center items-center h-full bg-white pt-[150px] mb-20 sm:mb-20">
            <ToastContainer autoClose={8000} />

            <div className="text-[50px] font-bold text-center pb-2 sm:text-3xl">
                Request a
                <span className="text-primary"> Demo</span>
            </div>
            <div>
                <div className="text-[30px] text-center pb-10 sm:text-3xl">
                    Surya LMS Demo
                </div>
                {/* calander Schedualing*/}
                <div className="text-[30px] text-center pb-5 sm:text-3xl">
                    {formValues.date.format('MMMM D, YYYY')}
                </div>
                <div className="pb-5 sm:text-3xl">
                    <button className="border-primary bg-[#EFF6FF] text-primary regular-17 p-4 rounded-[5px] w-full sm:w-3/4" style={{ border: '1px solid blue' }} onClick={() => setDatPickerVisible(prev => !prev)}>{`${formValues.timeSlot.startTime} - ${formValues.timeSlot.endTime}`}</button>
                </div>
            </div>
            {!datapickerVisible &&
                <form onSubmit={handleSubmit}
                    className="w-full max-w-4xl sm:max-w-lg mx-auto px-12 py-16 bg-white shadow-md rounded-lg space-y-6">

                    <div className="grid grid-cols-2 gap-6">
                        {/* First Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold pb-1" htmlFor="firstName">First name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="input-field"
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold pb-1" htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="input-field"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {/* Company Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold pb-1" htmlFor="companyName">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="input-field"
                                required
                            />
                        </div>

                        {/* Email Address */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold pb-1" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input-field"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {/* Phone Number */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold pb-1" htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="input-field"
                                required
                            />
                        </div>

                        {/* Country */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold pb-1" htmlFor="country">Country</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="input-field"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {/* Number Of Learners */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold pb-1" htmlFor="numberOfLearners">Number Of Learners</label>
                            <input
                                type="number"
                                name="numberOfLearners"
                                value={formData.numberOfLearners}
                                onChange={handleChange}
                                className="input-field"
                                required
                            />
                        </div>

                        {/* Do you currently have an LMS?  */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold pb-1" htmlFor="haveAnLMS">Do you currently have an LMS? </label>
                            <input
                                type="text"
                                name="haveAnLMS"
                                value={formData.haveAnLMS}
                                onChange={handleChange}
                                className="input-field"
                                required
                            />
                        </div>
                    </div>

                    {/* Requirement */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold pb-1" htmlFor="requestComment">Comments</label>
                        <textarea
                            name="requestComment"
                            placeholder='How do you training now...'
                            value={formData.requestComment}
                            onChange={handleChange}
                            className="input-field-textarea"
                            required
                            maxLength={255}
                        ></textarea>
                    </div>

                    {/* Check Box  */}
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            name="Agree"
                            required
                            className="mt-1 mr-2"
                        />
                        <label className="text-left">
                            I agree to <a href="#" className="text-blue-600 underline">terms & conditions</a> provided by the company. By providing my phone number, I agree to receive text messages
                            from the business. By providing my information, I agree to receive contents from the business.
                        </label>
                    </div>


                    {/* Submit Button */}
                    {loading ? (
                        <button
                            type="submit"
                            className="submit-loading-button rounded-[5px]"
                            disabled
                        >
                            <svg aria-hidden="true" role="status"
                                className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="#1C64F2" />
                            </svg>
                            Submitting...
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-[5px] text-lg font-semibold hover:bg-blue-700 transition"
                            style={{ background: 'linear-gradient(90deg, #0176FE 0%, #175AA9 100%)' }}
                        >
                            Submit
                        </button>
                    )}

                </form>}
        </div>
    );
};

export default RequestDemoForm;

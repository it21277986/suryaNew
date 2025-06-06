'use client';

import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { sendContactForm } from "@/lib/api";
import ApiCompanyRequest from "@/services/api/api-company-request";
interface FourteenDayTrialFormProps {
    isEnterpirce: boolean;
}
const FourteenDayTrialForm = ({isEnterpirce}:FourteenDayTrialFormProps) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
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

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);

        try {

            const data = {
                isEnterprise: isEnterpirce,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                companyName: formData.companyName,
                requirementMsg: formData.requestComment,
            }

            // Save the form data to the database
            ApiCompanyRequest.createCompanyRequest(data)
                .then(() => {
                    // Add the subject when sending the contact form
                    const formDataWithSubject = {
                        ...formData,
                        isEnterpirce:isEnterpirce, // Spread the existing formData
                        subject:  isEnterpirce?'Requesting for Loonum 14 Day Trial - Enterprise' :"Requesting for Loonum 14 Day Trial - Individual" // Add the new subject attribute
                    };

                    sendContactForm(formDataWithSubject)
                        .then(() => {
                            setLoading(false);
                            toast.success(`Hey ${formData.firstName}, Your request has been submitted successfully!`);
                            setFormData({
                                firstName: '',
                                lastName: '',
                                email: '',
                                companyName: '',
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
        <div>
            <div className="flex flex-col justify-center items-center h-full bg-white pt-[50px] mb-20 sm:mb-20">
                <ToastContainer autoClose={8000} />
                <div className="text-[50px] font-bold text-center pb-10 sm:text-3xl">
                    Start Your {isEnterpirce ?<span className="text-">14 Day Free</span>:<span className="text-primary">14 Day Free</span>} Trial
                    {isEnterpirce ?<p className='text-[30px]'>For Enterprise</p>: <p className='text-[30px]'>For Individual</p>}
                </div>

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

                    {/* Requirement */}
                    <div className="flex flex-col">
                        <label className="text-sm font-semibold pb-1" htmlFor="requestComment">Comments</label>
                        <textarea
                            name="requestComment"
                            value={formData.requestComment}
                            placeholder='About your company...'
                            onChange={handleChange}
                            className="input-field-textarea"
                            required
                            maxLength={255}
                        ></textarea>
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
                            Start Surya LMS
                        </button>
                    )}

                </form>
            </div>
        </div>
    );
};

export default FourteenDayTrialForm;

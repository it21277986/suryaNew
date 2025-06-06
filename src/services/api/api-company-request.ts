import axios from 'axios';

export type CompanyRequestData = {
    isEnterprise: boolean,
    firstName: string,
    lastName: string,
    companyName: string,
    email: string,
    requirementMsg: string,
};

const BACKEND_URL = String(process.env.NEXT_PUBLIC_API_BASE_URL);

// eslint-disable-next-line import/no-anonymous-default-export
export default class ApiCompanyRequest {
    // Send company request to backend using axios
    static createCompanyRequest(data: CompanyRequestData) {
        return axios.post(`${BACKEND_URL}/admin/company-request`, data);
    }
}

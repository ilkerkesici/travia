
import { BASE_URL } from "config";


/**
 * API Helper the project
 */
class ApiHelper {

    /**
     * 
     * @param endpoint is endpoint of the API
     */
    getRequest = async (endpoint: string) => {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                method: "GET",
            });
            const responseText = await response.text();

            try {
                const responseJson = JSON.parse(responseText);
                return { success: true, data: responseJson };
            } catch (e) {
                return { success: false, data: responseText };
            }
        } catch (error) {
            return { success: false, data: error };
        }
    };




}

const APIHelper = new ApiHelper();

export default APIHelper;
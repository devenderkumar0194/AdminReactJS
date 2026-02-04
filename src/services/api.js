/**
 * API Service Module
 * Provides centralized API request handling with proper error management
 */

// Configuration from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';
const API_VERSION = import.meta.env.VITE_API_VERSION || 'v1';
const BASE_API_URL = `${API_BASE_URL}/${API_VERSION}`;

/**
 * Generic API request handler with proper error handling
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Request options
 * @returns {Promise<any>} Response data
 */
export async function apiRequest(endpoint, options = {}) {
  const url = `${BASE_API_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  // Add auth token if available
  const authToken = localStorage.getItem('admin_auth_token');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  try {
    const response = await fetch(url, config);
    
    // Handle different response status codes appropriately
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.message || `HTTP error! status: ${response.status}`;
      
      // Log the error for debugging
      console.error(`API request failed: ${url}`, {
        status: response.status,
        message: errorMessage,
        errorData
      });
      
      throw new Error(errorMessage);
    }
    
    // Handle responses that don't have JSON content
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    } else {
      // For DELETE requests or other non-JSON responses
      return {};
    }
  } catch (error) {
    console.error(`API request failed: ${url}`, error);
    
    // Re-throw the error to be handled by the calling function
    throw error;
  }
}

/**
 * Check if the API is reachable
 * @returns {Promise<boolean>} True if API is reachable
 */
export async function checkApiHealth() {
  try {
    const response = await fetch(`${BASE_API_URL}/health`);
    return response.ok;
  } catch (error) {
    console.error('API health check failed:', error);
    return false;
  }
}

/**
 * Get API configuration info
 * @returns {Object} API configuration
 */
export function getApiConfig() {
  return {
    baseUrl: BASE_API_URL,
    isConfigured: !!import.meta.env.VITE_API_BASE_URL,
  };
}
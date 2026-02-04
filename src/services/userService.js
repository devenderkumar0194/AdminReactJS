/**
 * User Service Module
 * Handles all user-related API operations
 */

import { apiRequest } from './api';

/**
 * Fetch list of users with pagination and filtering
 * @param {number} page - Page number (default: 1)
 * @param {number} limit - Items per page (default: 10)
 * @param {Object} filters - Filter criteria
 * @returns {Promise<Object>} Users list with pagination info
 */
export async function fetchUsers(page = 1, limit = 10, filters = {}) {
  const params = new URLSearchParams({
    page,
    limit,
    ...filters,
  });
  
  const queryString = params.toString();
  const endpoint = `/users${queryString ? `?${queryString}` : ''}`;
  
  try {
    const response = await apiRequest(endpoint);
    return response;
  } catch (error) {
    console.error('Error fetching users:', error);
    // Return mock data in case of API failure
    return {
      users: [
        { id: '1', name: 'John Doe', email: 'john@example.com', role: 'User', status: 'active' },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active' },
        { id: '3', name: 'Bob Wilson', email: 'bob@example.com', role: 'User', status: 'inactive' },
      ],
      pagination: {
        page: 1,
        limit: 10,
        total: 3,
        totalPages: 1
      }
    };
  }
}

/**
 * Fetch a single user by ID
 * @param {string|number} id - User ID
 * @returns {Promise<Object|null>} User object or null if not found
 */
export async function fetchUserById(id) {
  try {
    const response = await apiRequest(`/users/${id}`);
    return response.user || response; // Handle both nested and direct responses
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    return null;
  }
}

/**
 * Create a new user
 * @param {Object} userData - User data to create
 * @returns {Promise<Object>} Created user object
 */
export async function createUser(userData) {
  try {
    const response = await apiRequest('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    return response.user || response; // Handle both nested and direct responses
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

/**
 * Update an existing user
 * @param {string|number} id - User ID to update
 * @param {Object} userData - Updated user data
 * @returns {Promise<Object>} Updated user object
 */
export async function updateUser(id, userData) {
  try {
    const response = await apiRequest(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
    return response.user || response; // Handle both nested and direct responses
  } catch (error) {
    console.error(`Error updating user with id ${id}:`, error);
    throw error;
  }
}

/**
 * Delete a user by ID
 * @param {string|number} id - User ID to delete
 * @returns {Promise<void>}
 */
export async function deleteUser(id) {
  try {
    await apiRequest(`/users/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error(`Error deleting user with id ${id}:`, error);
    throw error;
  }
}

/**
 * Search users by query
 * @param {string} query - Search query
 * @returns {Promise<Array>} Array of matching users
 */
export async function searchUsers(query) {
  try {
    const response = await apiRequest(`/users/search?q=${encodeURIComponent(query)}`);
    return response.users || response; // Handle both nested and direct responses
  } catch (error) {
    console.error('Error searching users:', error);
    return [];
  }
}

/**
 * Activate a user account
 * @param {string|number} id - User ID to activate
 * @returns {Promise<Object>} Activated user object
 */
export async function activateUser(id) {
  try {
    const response = await apiRequest(`/users/${id}/activate`, {
      method: 'PATCH',
    });
    return response.user || response; // Handle both nested and direct responses
  } catch (error) {
    console.error(`Error activating user with id ${id}:`, error);
    throw error;
  }
}

/**
 * Deactivate a user account
 * @param {string|number} id - User ID to deactivate
 * @returns {Promise<Object>} Deactivated user object
 */
export async function deactivateUser(id) {
  try {
    const response = await apiRequest(`/users/${id}/deactivate`, {
      method: 'PATCH',
    });
    return response.user || response; // Handle both nested and direct responses
  } catch (error) {
    console.error(`Error deactivating user with id ${id}:`, error);
    throw error;
  }
}

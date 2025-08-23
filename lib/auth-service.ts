import { LoginFormData, SignupFormData } from "@/lib/validation/auth";

// Types for API responses
export interface AuthResponse {
  success: boolean;
  user?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    userType: "traveler" | "guide";
    location: string;
    phone: string;
  };
  token?: string;
  message?: string;
}

// Mock API endpoints - replace with your actual API URLs
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

class AuthService {
  // Login user
  async login(data: LoginFormData): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      // Store token in localStorage or httpOnly cookies (recommended)
      if (result.token) {
        localStorage.setItem("authToken", result.token);
      }

      return result;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  // Register user
  async signup(data: SignupFormData): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      // Store token in localStorage or httpOnly cookies (recommended)
      if (result.token) {
        localStorage.setItem("authToken", result.token);
      }

      return result;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  }

  // Logout user
  async logout(): Promise<void> {
    try {
      // Call logout endpoint if needed
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.getToken()}`,
        },
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Always remove token from local storage
      localStorage.removeItem("authToken");
    }
  }

  // Get stored token
  getToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("authToken");
    }
    return null;
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Social login (Google)
  async loginWithGoogle(): Promise<AuthResponse> {
    // This would typically redirect to Google OAuth or use a popup
    // Implementation depends on your chosen OAuth library (e.g., next-auth, @google-cloud/auth)
    try {
      // Redirect to Google OAuth endpoint
      window.location.href = `${API_BASE_URL}/auth/google`;
      return { success: true };
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    }
  }

  // Social login (Facebook)
  async loginWithFacebook(): Promise<AuthResponse> {
    // Similar to Google login
    try {
      window.location.href = `${API_BASE_URL}/auth/facebook`;
      return { success: true };
    } catch (error) {
      console.error("Facebook login error:", error);
      throw error;
    }
  }

  // Refresh token
  async refreshToken(): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.getToken()}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Token refresh failed");
      }

      if (result.token) {
        localStorage.setItem("authToken", result.token);
      }

      return result;
    } catch (error) {
      console.error("Token refresh error:", error);
      // If refresh fails, logout user
      this.logout();
      throw error;
    }
  }
}

// Export singleton instance
export const authService = new AuthService();

// Export the class for testing
export default AuthService;

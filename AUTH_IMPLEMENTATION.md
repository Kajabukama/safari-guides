# Authentication Implementation

This document describes the implementation of form submission for authentication components using zod, react-hook-form, and shadcn UI components.

## 🏗️ Architecture

### Components Structure

```
components/auth/
├── AuthModals.tsx      # Main modal container
├── signin.tsx          # Sign-in form component
└── signup.tsx          # Sign-up form component
```

### Validation & Services

```
lib/
├── validation/
│   ├── auth.ts         # Zod validation schemas
│   └── index.ts        # Exports
└── auth-service.ts     # API service for authentication
```

### Types & Interfaces

```
interfaces/
└── auth.ts             # TypeScript interfaces
```

## 📋 Features

### ✅ Implemented Features

1. **Form Validation with Zod**

   - Email/phone validation
   - Password strength requirements
   - Confirm password matching
   - User type selection validation

2. **Form Handling with react-hook-form**

   - Type-safe form handling
   - Real-time validation
   - Error message display
   - Loading states

3. **shadcn UI Integration**

   - `Form` components for better UX
   - `Input` components with icons
   - `Button` components with loading states
   - `RadioGroup` for user type selection

4. **Authentication Service**
   - Login/signup API integration
   - Social authentication (Google/Facebook)
   - Token management
   - Error handling

## 🔧 Usage

### Basic Usage

```tsx
import AuthModals from "@/components/auth/AuthModals";

function App() {
  const [authModal, setAuthModal] = useState({
    isOpen: false,
    modalType: null as "login" | "signup" | null,
  });

  return (
    <AuthModals
      isOpen={authModal.isOpen}
      modalType={authModal.modalType}
      onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      onSwitchModal={(type) => setAuthModal({ isOpen: true, modalType: type })}
    />
  );
}
```

### Custom Validation

```tsx
import { loginSchema, signupSchema } from "@/lib/validation/auth";

// Extend validation schemas if needed
const customLoginSchema = loginSchema.extend({
  rememberMe: z.boolean().optional(),
});
```

### API Integration

```tsx
import { authService } from "@/lib/auth-service";

// Use the auth service in your components
const handleLogin = async (data) => {
  try {
    const response = await authService.login(data);
    if (response.success) {
      // Handle successful login
    }
  } catch (error) {
    // Handle error
  }
};
```

## 🔒 Validation Rules

### Login Form

- **Email**: Valid email format (when using email login)
- **Phone**: International phone number format (when using phone login)
- **Password**: Minimum 6 characters

### Signup Form

- **First/Last Name**: Minimum 2 characters each
- **Email**: Valid email format (required)
- **Phone**: International phone number format (required)
- **Location**: Required field
- **Password**:
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
- **Confirm Password**: Must match password
- **User Type**: Must select either "traveler" or "guide"

## 🌐 API Integration

### Environment Variables

Add to your `.env.local`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### Expected API Endpoints

- `POST /auth/login` - User login
- `POST /auth/signup` - User registration
- `POST /auth/logout` - User logout
- `GET /auth/google` - Google OAuth
- `GET /auth/facebook` - Facebook OAuth
- `POST /auth/refresh` - Token refresh

### API Response Format

```typescript
interface AuthResponse {
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
```

## 🎨 Styling

The components use Tailwind CSS classes and are fully responsive. Key styling features:

- **Mobile-friendly**: Responsive grid layouts
- **Accessibility**: Proper ARIA labels and focus management
- **Loading states**: Visual feedback during form submission
- **Error states**: Clear error message display
- **Theme support**: Works with light/dark themes

## 🧪 Testing

### Form Validation Testing

```tsx
import { loginSchema } from "@/lib/validation/auth";

// Test valid data
const validData = {
  email: "test@example.com",
  password: "SecurePass123",
};
const result = loginSchema.safeParse(validData);
expect(result.success).toBe(true);

// Test invalid data
const invalidData = {
  email: "invalid-email",
  password: "123",
};
const invalidResult = loginSchema.safeParse(invalidData);
expect(invalidResult.success).toBe(false);
```

## 🔄 State Management

The authentication state can be managed using:

1. **React Context** (current implementation in `AuthProvider`)
2. **Zustand** for more complex state needs
3. **Redux Toolkit** for large applications

### Example with Context

```tsx
// In AuthProvider.tsx
const [user, setUser] = useState(null);
const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
  const token = authService.getToken();
  if (token) {
    // Validate token and set user
    setIsAuthenticated(true);
  }
}, []);
```

## 🚀 Next Steps

1. **Email Verification**: Add email verification flow
2. **Password Reset**: Implement forgot password functionality
3. **Two-Factor Authentication**: Add 2FA support
4. **Session Management**: Implement refresh token rotation
5. **Social Auth**: Complete Google/Facebook integration
6. **Security**: Add rate limiting and CSRF protection

## 📚 Dependencies

- `zod` - Schema validation
- `react-hook-form` - Form handling
- `@hookform/resolvers` - Zod integration
- `sonner` - Toast notifications
- `lucide-react` - Icons
- `@radix-ui/*` - UI primitives

## 🤝 Contributing

When modifying the auth components:

1. Update validation schemas in `lib/validation/auth.ts`
2. Update TypeScript interfaces in `interfaces/auth.ts`
3. Test form validation thoroughly
4. Ensure accessibility compliance
5. Update this documentation

---

**Note**: This implementation uses mock API calls. Replace the `authService` methods with actual API endpoints for production use.

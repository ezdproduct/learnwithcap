import { NextRequest, NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

const WP_URL = process.env.WOOCOMMERCE_URL || "https://course.learnwithcap.com";

interface UserPayload {
    data: {
        user: {
            id: string;
        }
    }
}

async function fetchWpUser(userId: string, token: string, wpUrl: string) {
    // Fetch user details including roles (context=edit requires auth)
    const response = await fetch(`${wpUrl}/wp-json/wp/v2/users/${userId}?context=edit`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        console.error(`Failed to fetch WP user ${userId}: ${response.status}`);
        return null;
    }
    return response.json();
}

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        if (!username || !password) {
            return NextResponse.json({ message: 'Vui lòng nhập đầy đủ thông tin.' }, { status: 400 });
        }

        // 1. Get JWT token
        const response = await fetch(`${WP_URL}/wp-json/jwt-auth/v1/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({
                message: data.message || 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.'
            }, { status: response.status });
        }

        const token = data.token;

        // 2. Decode token to get user ID
        const decoded: UserPayload = jwtDecode(token);
        const userId = decoded.data.user.id;

        // 3. Fetch full user profile using the token and ID
        const userProfile = await fetchWpUser(userId, token, WP_URL);

        // 4. Merge data and return
        if (userProfile) {
            // Merge token data (token, user_email, user_nicename, user_display_name) 
            // with full profile data (id, roles, name, etc.)
            return NextResponse.json({
                ...data,
                ...userProfile,
                role: userProfile.roles?.[0] || 'subscriber',
                id: userProfile.id, // Ensure ID is present
            });
        }

        // Fallback if fetching profile fails, return original token data
        return NextResponse.json(data);

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Login API Error:', error.message);
        } else {
            console.error('Login API Error:', error);
        }
        return NextResponse.json({ message: 'Lỗi máy chủ nội bộ.' }, { status: 500 });
    }
}

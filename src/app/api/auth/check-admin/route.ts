import { NextRequest, NextResponse } from 'next/server';

const WP_URL = process.env.WOOCOMMERCE_URL || "https://course.learnwithcap.com";

export async function GET(req: NextRequest) {
    try {
        const authHeader = req.headers.get('Authorization');
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');

        if (!authHeader) {
            return NextResponse.json({ message: 'Missing Authorization header' }, { status: 401 });
        }

        if (!userId) {
            return NextResponse.json({ message: 'Missing userId parameter' }, { status: 400 });
        }

        // Fetch list of administrators (max 100 to stay safe, default is 10)
        const response = await fetch(`${WP_URL}/wp-json/wp/v2/users?roles=administrator&per_page=100`, {
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            // If we can't fetch the list (e.g. 403 Forbidden), then the user is definitely not an admin
            // or the token is invalid.
            console.error("Failed to fetch admin list:", response.status);
            return NextResponse.json({ isAdmin: false });
        }

        const admins = await response.json();

        // Check if userId exists in the admin list
        // WordPress user IDs are numbers, but check flexibly
        const isAdmin = Array.isArray(admins) && admins.some((admin: any) => String(admin.id) === String(userId));

        return NextResponse.json({ isAdmin });

    } catch (error: any) {
        console.error('Check Admin API Error:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

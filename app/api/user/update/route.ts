import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { connectToDatabase } from '@/lib/database/mongoose';
import User from '@/lib/database/models/user.model';
import bcrypt from 'bcryptjs';

export async function PUT(req: Request) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const { name, email, address, currentPassword, newPassword } = await req.json();

        await connectToDatabase();

        const updateData: any = {
            $set: {
                name,
                email,
                address // Explicitly set the address field
            }
        };

        // Update password if provided
        if (currentPassword && newPassword) {
            const user = await User.findById(session.user.id);
            if (!user) {
                return NextResponse.json({ message: 'User not found' }, { status: 404 });
            }
            const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
            if (!isPasswordValid) {
                return NextResponse.json({ message: 'Current password is incorrect' }, { status: 400 });
            }
            const hashedNewPassword = await bcrypt.hash(newPassword, 10);
            updateData.$set.password = hashedNewPassword;
        }

        const updatedUser = await User.findByIdAndUpdate(
            session.user.id,
            updateData,
            { new: true, runValidators: true }
        );


        return NextResponse.json({
            message: 'Profile updated successfully',
            user: {
                name: updatedUser.name,
                email: updatedUser.email,
                address: updatedUser.address
            }
        }, { status: 200 });
    } catch (error) {
        console.error('Profile update error:', error);
        return NextResponse.json({ message: 'An error occurred while updating the profile' }, { status: 500 });
    }
}
'use server'

import { redirect } from 'next/navigation'

export async function navigateToLogin() {
    redirect('/app')
}
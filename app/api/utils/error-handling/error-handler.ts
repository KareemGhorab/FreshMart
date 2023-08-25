import logger from '@/utils/logger/logger'
import { NextRequest, NextResponse } from 'next/server'

export const checkAsyncFunction = async (
	request: NextRequest,
	func: (request: NextRequest) => Promise<Response>
) => {
	try {
		return await func(request)
	} catch (err: any) {
		logger.error(err)
		return NextResponse.json(
			{ message: err.message },
			{ status: err.status || 400 }
		)
	}
}

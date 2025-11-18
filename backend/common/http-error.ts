export class HttpException extends Error {
	status: number;
	error: {};

	constructor(status: number, message: string) {
		super(message);
		this.status = status;
		this.error = { message }
	}
}

export class BadRequest extends HttpException {
	constructor (message: string) {
		super(400, message);
	}
}

export class Unauthorized extends HttpException {
	constructor (message: string) {
		super(401, message);
	}
}

export class Forbidden extends HttpException {
	constructor (message: string) {
		super(403, message);
	}
}

export class NotFound extends HttpException {
	constructor (message: string) {
		super(404, message);
	}
}

export class TooManyRequests extends HttpException {
	constructor (message: string) {
		super(429, message);
	}
}
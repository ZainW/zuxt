/// <reference types="lucia-auth" />
declare namespace Lucia {
	type Auth = import("./utils/auth.js").Auth;
	type UserAttributes = {
    avatar: string;
    name: string;
    email: string;
    role?: string;
	};
}

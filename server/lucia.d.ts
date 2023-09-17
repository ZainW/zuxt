/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./utils/lucia.js").Auth;
  type UserAttributes = {
    avatar: string;
    name: string;
    email: string;
    role?: string;
  };
}
